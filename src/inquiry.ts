export const NOTION_DATABASE_ID = "da6387afa74440bcb9d18d4a12b119e7";

export type Inquiry = {
  name: string;
  contact: string;
  message: string;
};

function clip(value: unknown, max: number): string {
  return String(value ?? "").trim().slice(0, max);
}

export function parseInquiry(input: unknown): Inquiry | { error: string } {
  if (!input || typeof input !== "object") {
    return { error: "empty" };
  }

  const body = input as Record<string, unknown>;
  if (clip(body.website, 80)) {
    return { error: "bot" };
  }

  const inquiry = {
    name: clip(body.name, 80),
    contact: clip(body.contact, 200),
    message: clip(body.message, 4000),
  };

  if (!inquiry.message) {
    return { error: "message" };
  }

  return inquiry;
}

function richText(content: string) {
  return {
    rich_text: content ? [{ type: "text" as const, text: { content } }] : [],
  };
}

async function tryDeliver(task: Promise<boolean>): Promise<boolean> {
  try {
    return await task;
  } catch {
    return false;
  }
}

export async function deliverInquiry(
  inquiry: Inquiry,
  env: Pick<Env, "NOTION_TOKEN" | "INQUIRY_EMAIL" | "INQUIRY_WEBHOOK">,
): Promise<boolean> {
  const title = inquiry.name || inquiry.contact || "相談";
  const delivered = await Promise.all([
    env.NOTION_TOKEN ? tryDeliver(postToNotion(inquiry, title, env.NOTION_TOKEN)) : false,
    env.INQUIRY_EMAIL ? tryDeliver(postToFormSubmit(inquiry, env.INQUIRY_EMAIL)) : false,
    env.INQUIRY_WEBHOOK ? tryDeliver(postToWebhook(inquiry, env.INQUIRY_WEBHOOK)) : false,
  ]);

  return delivered.some(Boolean);
}

async function postToNotion(inquiry: Inquiry, title: string, token: string): Promise<boolean> {
  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        件名: { title: [{ type: "text", text: { content: title.slice(0, 80) } }] },
        "会社・名前": richText(inquiry.name),
        連絡先: richText(inquiry.contact),
        概要: richText(inquiry.message),
      },
    }),
  });
  return response.ok;
}

async function postToFormSubmit(inquiry: Inquiry, email: string): Promise<boolean> {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: inquiry.name,
      contact: inquiry.contact,
      message: inquiry.message,
      _subject: "osushi-cr.dev 仕事の相談",
    }),
  });
  return response.ok;
}

async function postToWebhook(inquiry: Inquiry, webhook: string): Promise<boolean> {
  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inquiry),
  });
  return response.ok;
}

export async function handleInquiry(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  let payload: unknown;
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    payload = await request.json();
  } else {
    const form = await request.formData();
    payload = Object.fromEntries(form.entries());
  }

  const parsed = parseInquiry(payload);
  if ("error" in parsed) {
    if (parsed.error === "bot") {
      return Response.json({ ok: true });
    }
    return Response.json({ ok: false }, { status: 400 });
  }

  if (!env.NOTION_TOKEN && !env.INQUIRY_EMAIL && !env.INQUIRY_WEBHOOK) {
    return Response.json({ ok: false }, { status: 503 });
  }

  const ok = await deliverInquiry(parsed, env);
  return Response.json({ ok }, { status: ok ? 200 : 502 });
}
