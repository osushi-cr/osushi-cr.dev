# osushi-cr.dev

お寿司（@osushi_cr）の公開サイト。Cloudflare Workers の静的アセットとして載せる。

| URL | 内容 |
|------|------|
| https://osushi-cr.dev/ | デジタル名刺 |
| https://transcribe.osushi-cr.dev/ | Transcribe Edge |
| https://transcribe.osushi-cr.dev/privacy/ | プライバシーポリシー |
| https://transcribe.osushi-cr.dev/terms/ | 利用規約 |

ソース: https://github.com/osushi-cr/osushi-cr.dev

apex の `/transcribe-edge/` はサブドメインへ 301 する。

規約とポリシーの原稿は `content/transcribe-edge/`。直したあとは:

```bash
python3 scripts/build.py
npx wrangler types
npx wrangler deploy
```
