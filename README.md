# osushi-cr.dev

お寿司（@osushi_cr）の公開サイト。Cloudflare Workers の静的アセットとして載せる。

| URL | 内容 |
|------|------|
| https://osushi-cr.dev/ | デジタル名刺 |
| https://osushi-cr.dev/contact/ | お問い合わせ |
| https://www.youtube.com/@kurara_ai_news | くらら（AITuber） |
| https://6f.osushi-cr.dev/ | 6F（別 Pages プロジェクト） |
| https://kakuyomu.jp/users/yoshitetsu | カクヨム |
| https://transcribe.osushi-cr.dev/ | Transcribe Edge |
| https://transcribe.osushi-cr.dev/privacy/ | プライバシーポリシー |
| https://transcribe.osushi-cr.dev/terms/ | 利用規約 |

ソース: https://github.com/osushi-cr/osushi-cr.dev

作品リンクは名刺カード上で、Works（6F / くらら / カクヨム / Transcribe Edge）と Follow（X / GitHub / note / お問い合わせ）に分けている。問い合わせは `/contact/` のフォームから `POST /inquiry`。Notion に残しつつ、作成時にメンションして通知を飛ばす。メールでも気づきたいときは `INQUIRY_EMAIL` を入れる。

```bash
npx wrangler secret put NOTION_TOKEN
npx wrangler secret put INQUIRY_EMAIL
npx wrangler secret put INQUIRY_WEBHOOK
```

Notion に残すときは、インテグレーションを [お仕事相談](https://www.notion.so/da6387afa74440bcb9d18d4a12b119e7) に接続する。

apex の `/transcribe-edge/` はサブドメインへ 301 する。

規約とポリシーの原稿は `content/transcribe-edge/`。直したあとは:

```bash
python3 scripts/build.py
npx wrangler types
npx wrangler deploy
```
