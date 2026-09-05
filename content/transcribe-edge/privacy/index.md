---
layout: page
title: Privacy Policy
---

Last updated: 2026-09-05

Operator: お寿司 (@osushi_cr)

Support: contact us through the [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSdA1f_cpA4lGkpmPeFScjFKfPNqjfbTPDnE1n9R2MzxB2AxRQ/viewform) linked from the App Store product page and the in-app Settings screen.

See also the [Terms of Use](/terms/).

---

## English

### 1. Scope and operator

This Privacy Policy explains how お寿司 (@osushi_cr) (“we,” “us,” or the “operator”) handles information in connection with the Transcribe Edge iOS app (“the App”) and its support form.

### 2. How the App works

The App records two audio channels when you explicitly start a session: speaker or system audio captured through screen sharing, and microphone audio such as input from AirPods. If the system-audio channel is unavailable, the App does not silently continue as a microphone-only recording. The App has no live-caption feature. After you stop recording, it uses on-device SpeechAnalyzer, Apple Intelligence, and Foundation Models to create transcripts, notes, and minutes.

The App does not use a cloud LLM or a developer-operated cloud service as a fallback. If required on-device features are unavailable because of the device, region, settings, or missing model assets, processing is unavailable.

### 3. Information handled on your device

The App handles the following information locally:

- speaker or system audio and microphone audio you choose to record;
- transcripts, notes, and minutes generated from that audio;
- meeting titles and other text you enter; and
- settings such as language, local retention preferences, and Google Drive connection details.

Audio used for transcription remains on your device unless you export or copy it yourself. The App does not upload audio to Google Drive or to a server operated by us. We do not have remote access to your local recordings, transcripts, or notes.

Local content remains on the device until you delete a session, remove the App, or the session passes the retention-days setting you choose in Settings. Sessions older than that many calendar days from their start date are deleted from the device when the App launches and when you save the retention setting. Deleting a local session does not delete Markdown already uploaded to Google Drive. Copies may also remain in iOS backups or other places you export them.

### 4. Optional Google Drive connection

Google Drive is optional. If you connect a Google account, the App requests only:

- `https://www.googleapis.com/auth/drive.file`, to create and update files and folders created or opened through the App; and
- `https://www.googleapis.com/auth/userinfo.email`, to retrieve and display the email address of the connected account.

The App creates or uses a folder named “Transcribe Edge” in your Google Drive and uploads only Markdown notes and minutes that you choose to send. It never uploads audio. OAuth access and refresh tokens are stored in the iOS Keychain. The connected email address and Drive folder identifiers are stored locally so the App can show and use the selected account.

When you disconnect Google Drive in Settings, the App attempts to revoke its Google token and removes its local tokens and connection details. Files already uploaded remain in your Google Drive until you delete them. You can also review or revoke access from your [Google Account permissions](https://myaccount.google.com/permissions).

Google processes authentication information, account information, and uploaded Markdown under the [Google Privacy Policy](https://policies.google.com/privacy) and applicable Google terms. Depending on Google’s infrastructure and your account settings, that processing may occur outside your country or region.

The App’s use and transfer of information received from Google APIs complies with the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including its Limited Use requirements. We use Google user data only to provide the Drive connection and account display requested by you. We do not use it for advertising, tracking, credit decisions, or sale, and we do not transfer it to data brokers.

### 5. Support requests

If you contact us through the support form, you choose what to submit. Google Forms may process your submission under Google’s policies, and we receive the information needed to respond. Do not attach or paste recordings, transcripts, confidential meeting content, passwords, or OAuth tokens unless we specifically ask for information that is necessary to investigate your request.

We retain support correspondence only as long as reasonably needed to respond, maintain a record of the request, prevent abuse, and comply with legal obligations. You may ask us to delete information you submitted through the support form, subject to information we must retain by law.

### 6. Information we do not use

In the current version of the App:

- we do not operate a cloud backend for transcription or summarization;
- we do not use cloud LLM fallback;
- we do not upload audio to Google Drive or to our servers;
- we do not use advertising or tracking SDKs;
- we do not sell personal information; and
- we do not use App content for advertising or to train AI models.

Apple handles App Store purchase, payment, tax, and refund information under Apple’s policies. We do not receive your full payment-card details. Apple may provide developers with transaction and sales information under its own terms and privacy policy.

### 7. Security

The App relies on iOS app sandboxing and stores Google OAuth tokens in the iOS Keychain. No storage or transmission method is completely secure. You are responsible for securing your iPhone, Apple ID, Google account, exported files, and any Drive sharing settings you choose.

### 8. Other people’s information and children

Recordings may contain personal, confidential, or sensitive information about other people, including children. You are responsible for having the authority and any consent required to record and process that information. The App is not designed to solicit personal information directly from children.

### 9. Your choices and requests

You can:

- choose whether to start and stop a recording;
- delete local sessions in the App;
- choose whether to connect Google Drive and whether to upload Markdown;
- disconnect Google Drive in Settings and revoke access through Google;
- delete uploaded files from your Google Drive; and
- contact us through the support form to ask about information under our control or to request access, correction, or deletion where applicable.

Deleting the App generally removes its local data from that device, but does not delete files already uploaded to Google Drive or copies stored in device backups or elsewhere.

### 10. Changes

We may update this policy when the App or our practices change. We will update the “Last updated” date and, when reasonably appropriate, provide additional notice.

---

## 日本語

### 1. 適用範囲と運営者

本プライバシーポリシーは、お寿司（@osushi_cr）（以下「運営者」）が、iOS アプリ「Transcribe Edge」（以下「本アプリ」）およびサポートフォームに関連する情報をどのように取り扱うかを説明するものです。

### 2. 本アプリの仕組み

本アプリは、利用者が明示的に収録を開始したとき、画面共有で取得するスピーカーまたはシステム音声と、AirPods などから入るマイク音声を二系統で収録します。システム音声を取得できない場合、利用者に知らせずマイク音声だけの収録へ切り替えることはありません。ライブ字幕機能はありません。収録を停止したあと、端末内の SpeechAnalyzer、Apple Intelligence、および Foundation Models を使って、文字起こし、ノート、議事録を作ります。

クラウド LLM や運営者のクラウドサービスへ切り替えて処理することはありません。端末、地域、設定、またはモデルデータの未ダウンロードなどにより必要な端末内機能を使えない場合、処理は利用不能になります。

### 3. 端末内で取り扱う情報

本アプリは、次の情報を端末内で取り扱います。

- 利用者が収録するスピーカーまたはシステム音声とマイク音声
- 音声から生成した文字起こし、ノート、議事録
- 会議タイトルなど、利用者が入力する文章
- 言語、端末内の保持設定、Google Drive の接続情報などの設定

文字起こしに使う音声は、利用者が自ら書き出しまたはコピーしない限り端末内に残ります。本アプリは、音声を Google Drive または運営者のサーバーへアップロードしません。運営者は、端末内の録音、文字起こし、ノートへ遠隔からアクセスできません。

端末内の内容は、利用者がセッションを削除するか、本アプリを削除するか、設定した保持日数を過ぎるまで端末に残ります。開始日から保持日数を過ぎたセッションは、本アプリの起動時と、保持日数の設定を保存したときに端末から削除します。端末内のセッションを削除しても、すでに Google Drive へ送った Markdown は削除されません。iOS のバックアップや、利用者が書き出したコピーは残ることがあります。

### 4. 任意の Google Drive 接続

Google Drive の接続は任意です。Google アカウントを接続する場合、本アプリは次の権限だけを要求します。

- `https://www.googleapis.com/auth/drive.file`：本アプリを通じて作成または開いたファイルとフォルダを作成・更新するため
- `https://www.googleapis.com/auth/userinfo.email`：接続したアカウントのメールアドレスを取得し、表示するため

本アプリは、Google Drive 内に「Transcribe Edge」という名前のフォルダを作成または使用し、利用者が送信を選んだノートと議事録の Markdown だけをアップロードします。音声はアップロードしません。OAuth のアクセストークンとリフレッシュトークンは iOS の Keychain に保存します。接続先を表示して利用するため、メールアドレスと Drive フォルダの識別子を端末内に保存します。

設定画面で Google Drive を切断すると、本アプリは Google トークンの失効を試みたうえで、端末内のトークンと接続情報を削除します。すでにアップロードしたファイルは、利用者が Google Drive 上で削除するまで残ります。[Google アカウントの権限管理](https://myaccount.google.com/permissions)からアクセス権を確認または取り消すこともできます。

Google は、認証情報、アカウント情報、およびアップロードされた Markdown を、[Google プライバシーポリシー](https://policies.google.com/privacy)その他の適用される規約に従って処理します。Google のインフラストラクチャやアカウント設定によっては、利用者の国または地域の外で処理される場合があります。

本アプリによる Google API から受領した情報の利用および移転は、Limited Use 要件を含む [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) に従います。Google ユーザーデータは、利用者が求めた Drive 接続とアカウント表示のためだけに使用します。広告、トラッキング、信用判断、販売には使用せず、データブローカーへ移転しません。

### 5. サポートへの問い合わせ

サポートフォームへ問い合わせる場合、送信する内容は利用者が選びます。Google Forms は Google のポリシーに従って送信内容を処理することがあり、運営者は回答に必要な情報を受け取ります。運営者から調査に必要な情報を具体的にお願いした場合を除き、録音、文字起こし、会議の機密情報、パスワード、OAuth トークンを貼り付けたり添付したりしないでください。

サポートのやり取りは、回答、問い合わせ記録の維持、不正利用の防止、法的義務への対応に合理的に必要な期間だけ保持します。法令上保持が必要な情報を除き、利用者はサポートフォームから送信した情報の削除を求めることができます。

### 6. 利用しない情報と目的

現行バージョンでは、次の取り扱いを行いません。

- 文字起こしや要約のためのクラウドバックエンドの運用
- クラウド LLM へのフォールバック
- Google Drive または運営者のサーバーへの音声のアップロード
- 広告またはトラッキング SDK の利用
- 個人情報の販売
- 広告または AI モデルの学習を目的とした本アプリ内コンテンツの利用

App Store での購入、決済、税、返金に関する情報は、Apple が同社のポリシーに従って取り扱います。運営者は、利用者の支払カード情報を完全な形では受け取りません。Apple は、同社の規約およびプライバシーポリシーに基づき、取引および売上に関する情報を開発者へ提供することがあります。

### 7. 安全管理

本アプリは iOS のアプリサンドボックスを利用し、Google の OAuth トークンを iOS の Keychain に保存します。ただし、保存や通信の方法に完全な安全性を保証できるものはありません。iPhone、Apple ID、Google アカウント、書き出したファイル、および利用者が設定した Drive の共有範囲は、利用者自身でも適切に管理してください。

### 8. 他者および子どもの情報

録音には、子どもの情報を含め、他者の個人情報、機密情報、または慎重な取り扱いを要する情報が含まれることがあります。その情報を収録し、処理する権限と、必要な同意を得る責任は利用者にあります。本アプリは、子どもから直接個人情報を集めることを目的として設計されたものではありません。

### 9. 利用者の選択と請求

利用者は、次の操作を行えます。

- 収録を開始するか、いつ停止するかを選ぶ
- 本アプリ内で端末内のセッションを削除する
- Google Drive を接続するか、Markdown をアップロードするかを選ぶ
- 設定画面で Google Drive を切断し、Google 側でもアクセス権を取り消す
- Google Drive 上のアップロード済みファイルを削除する
- 運営者の管理下にある情報について、適用される法令に基づく開示、訂正、削除などをサポートフォームから請求する

本アプリを削除すると、通常、その端末にある本アプリのローカルデータも削除されます。ただし、Google Drive にアップロード済みのファイル、端末のバックアップ、または別の場所に保存したコピーは削除されません。

### 10. 本ポリシーの変更

本アプリまたは情報の取り扱いを変更した場合、本ポリシーを更新することがあります。その際は「Last updated」の日付を更新し、合理的に必要な場合は別の方法でもお知らせします。
