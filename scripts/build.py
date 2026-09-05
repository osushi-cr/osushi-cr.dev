#!/usr/bin/env python3
"""Convert Transcribe Edge markdown into static HTML."""

from __future__ import annotations

import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content" / "transcribe-edge"
PUBLIC = ROOT / "public" / "transcribe-edge"

PAGES = {
    "index.md": {
        "out": PUBLIC / "index.html",
        "title": "Transcribe Edge",
        "description": "ウェブ会議のあと、iPhone の端末内で文字起こしと議事録をつくるアプリです。",
        "lang": "ja",
        "canonical": "https://transcribe.osushi-cr.dev/",
        "home": True,
    },
    "privacy/index.md": {
        "out": PUBLIC / "privacy" / "index.html",
        "title": "Privacy Policy | Transcribe Edge",
        "description": "Transcribe Edge privacy policy.",
        "lang": "en",
        "canonical": "https://transcribe.osushi-cr.dev/privacy/",
    },
    "terms/index.md": {
        "out": PUBLIC / "terms" / "index.html",
        "title": "Terms of Use | Transcribe Edge",
        "description": "Transcribe Edge terms of use.",
        "lang": "en",
        "canonical": "https://transcribe.osushi-cr.dev/terms/",
    },
}


def strip_front_matter(text: str) -> str:
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            return text[end + 4 :].lstrip("\n")
    return text


def inline(text: str) -> str:
    text = html.escape(text)

    def link(match: re.Match[str]) -> str:
        label, url = match.group(1), match.group(2)
        return f'<a href="{html.escape(url, quote=True)}">{label}</a>'

    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", link, text)
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<em>\1</em>", text)
    return text


def markdown_to_html(source: str) -> str:
    lines = source.splitlines()
    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.strip() == "---":
            out.append("<hr>")
            i += 1
            continue
        heading = re.match(r"^(#{1,3})\s+(.*)$", line)
        if heading:
            level = len(heading.group(1))
            out.append(f"<h{level}>{inline(heading.group(2))}</h{level}>")
            i += 1
            continue
        if re.match(r"^[-*]\s+", line):
            items: list[str] = []
            while i < len(lines) and re.match(r"^[-*]\s+", lines[i]):
                items.append(f"<li>{inline(re.sub(r'^[-*]\s+', '', lines[i]))}</li>")
                i += 1
            out.append("<ul>" + "".join(items) + "</ul>")
            continue
        if not line.strip():
            i += 1
            continue
        para = [line]
        i += 1
        while i < len(lines) and lines[i].strip() and not re.match(r"^(#{1,3}\s+|---$|[-*]\s+)", lines[i]):
            para.append(lines[i])
            i += 1
        out.append(f"<p>{inline(' '.join(para))}</p>")
    return "\n".join(out)


def split_home_body(body: str) -> tuple[str, str, str]:
    match = re.match(r"<h1>(.*?)</h1>\s*<p>(.*?)</p>\s*(.*)", body, re.S)
    if not match:
        return "Transcribe Edge", "", body
    return match.group(1), match.group(2), match.group(3)


def wrap(title: str, description: str, lang: str, canonical: str, body: str, home: bool) -> str:
    heading, lead, rest = split_home_body(body) if home else ("Transcribe Edge", "", body)
    hero = ""
    main = f'  <main class="prose">\n{body}\n  </main>'
    if home:
        hero = f"""  <section class="hero">
    <img class="hero-icon" src="/icon.png" width="112" height="112" alt="">
    <h1>{heading}</h1>
    <p class="hero-lead">{lead}</p>
    <div class="store" aria-disabled="true">
      <img class="store-badge" src="/badges/download-on-the-app-store-jp.svg" width="109" height="40" alt="Download on the App Store">
      <p class="store-note">近日公開</p>
    </div>
  </section>"""
        main = f"{hero}\n  <main class=\"prose\">\n{rest}\n  </main>"

    return f"""<!DOCTYPE html>
<html lang="{html.escape(lang)}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{html.escape(title)}</title>
  <meta name="description" content="{html.escape(description)}">
  <link rel="canonical" href="{html.escape(canonical)}">
  <link rel="icon" href="/icon.png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <meta property="og:title" content="{html.escape(title)}">
  <meta property="og:description" content="{html.escape(description)}">
  <meta property="og:image" content="https://transcribe.osushi-cr.dev/icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;700;900&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
</head>
<body class="doc">
  <header class="site-header">
    <a class="brand" href="/">
      <img class="brand-logo" src="/icon.png" width="36" height="36" alt="">
      <span>Transcribe Edge</span>
    </a>
    <nav>
      <a href="/terms/">利用規約</a>
      <a href="/privacy/">プライバシー</a>
    </nav>
  </header>
{main}
  <footer class="site-footer">
    <p class="footer-copy">© 2026 <a href="https://osushi-cr.dev/">お寿司</a></p>
    <p class="footer-legal">App Store and the App Store logo are trademarks of Apple&nbsp;Inc.</p>
  </footer>
</body>
</html>
"""


def main() -> None:
    for rel, meta in PAGES.items():
        source = strip_front_matter((CONTENT / rel).read_text())
        body = markdown_to_html(source)
        meta["out"].parent.mkdir(parents=True, exist_ok=True)
        html_out = wrap(
            meta["title"],
            meta["description"],
            meta["lang"],
            meta["canonical"],
            body,
            bool(meta.get("home")),
        )
        meta["out"].write_text(html_out)
        print(meta["out"].relative_to(ROOT))


if __name__ == "__main__":
    main()
