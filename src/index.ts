import { handleInquiry } from "./inquiry";

const HUB_HOST = "osushi-cr.dev";
const PRODUCT_HOST = "transcribe.osushi-cr.dev";
const PRODUCT_PREFIX = "/transcribe-edge";

function isSharedAsset(pathname: string): boolean {
  return (
    pathname === "/styles.css" ||
    pathname === "/avatar.png" ||
    pathname.startsWith("/vendor/")
  );
}

function productAssetPath(pathname: string): string {
  if (pathname === "/") {
    return `${PRODUCT_PREFIX}/`;
  }
  return `${PRODUCT_PREFIX}${pathname}`;
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    const host = url.hostname;

    if (url.pathname === "/inquiry") {
      return handleInquiry(request, env);
    }

    if (url.pathname === "/hello" || url.pathname === "/hello/") {
      url.pathname = "/contact/";
      return Response.redirect(url.toString(), 301);
    }

    if (host === "www.osushi-cr.dev") {
      url.hostname = HUB_HOST;
      return Response.redirect(url.toString(), 301);
    }

    if (host === HUB_HOST) {
      if (url.pathname === PRODUCT_PREFIX || url.pathname.startsWith(`${PRODUCT_PREFIX}/`)) {
        const next = new URL(url);
        next.hostname = PRODUCT_HOST;
        next.pathname = url.pathname.slice(PRODUCT_PREFIX.length) || "/";
        return Response.redirect(next.toString(), 301);
      }
      return env.ASSETS.fetch(request);
    }

    if (host === PRODUCT_HOST) {
      if (isSharedAsset(url.pathname)) {
        return env.ASSETS.fetch(request);
      }
      const assetUrl = new URL(request.url);
      assetUrl.pathname = productAssetPath(url.pathname);
      return env.ASSETS.fetch(new Request(assetUrl, request));
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
