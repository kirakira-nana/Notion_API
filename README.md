![Notion API Worker](https://user-images.githubusercontent.com/1440854/79893752-cc448680-8404-11ea-8d19-e0308eb32028.png)
![API Version](https://badgen.net/badge/API%20Version/v1/green)

Notion の非公開 API 向け **サーバーレスラッパー** です。Notion のコンテンツへ、すばやく簡単にアクセスできます。Notion を CMS として使う用途に向いています。

ホスト済みのインスタンスは [`https://notion-api.splitbee.io`](https://notion-api.splitbee.io/) で公開されています。[Vercel 上で自分でホスト](https://vercel.com/?ref=notion-api-worker) することもできます。Vercel には十分な無料枠があります。

_取り扱いには注意してください。非公開の Notion API に依存しているため、将来も安定して動く保証はありません。_

## 特長

🍭 **かんたん** – GET リクエスト 1 回で Notion のデータを取得できます

🗄 **テーブル対応** – テーブルやデータベースから構造化データを取得できます

✨ **高速** – [SWR](https://www.google.com/search?q=stale+while+revalidate) キャッシュを内蔵し、すぐに結果を返せます

🛫 **CORS 対応** – 必要な場所からデータへアクセスできます

## 使いどころ

- ブログやドキュメントのデータの出どころとして使う。ページと追加メタデータを持つテーブルを用意し、ページ一覧を描画するたびに `/table` エンドポイントを呼び出します。

- 特定ページのデータを取得し、[`react-notion`](https://github.com/splitbee/react-notion) で描画します。

## エンドポイント

### ページデータを読み込む

`/v1/page/<PAGE_ID>`

例（[元の Notion ページ](https://www.notion.so/react-notion-example-2e22de6b770e4166be301490f6ffd420)）

[`https://notion-api.splitbee.io/v1/page/2e22de6b770e4166be301490f6ffd420`](https://notion-api.splitbee.io/v1/page/2e22de6b770e4166be301490f6ffd420)

指定したページのブロックデータをすべて返します。
このデータは [`react-notion`](https://github.com/splitbee/react-notion) で描画できます。

### テーブルからデータを読み込む

`/v1/table/<PAGE_ID>`

例（[元の Notion ページ](https://www.notion.so/splitbee/20720198ca7a4e1b92af0a007d3b45a4?v=4206debfc84541d7b4503ebc838fdf1e)）

[`https://notion-api.splitbee.io/v1/table/20720198ca7a4e1b92af0a007d3b45a4`](https://notion-api.splitbee.io/v1/table/20720198ca7a4e1b92af0a007d3b45a4)

## 非公開ページの認証

公開ページは認証なしで取得できます。非公開ページを取得する場合は、次の 2 通りがあります。

- 推奨は、環境変数 `NOTION_TOKEN` を設定したうえで自分のインスタンスをホストする方法です。詳細は [Vercel の環境変数ドキュメント](https://vercel.com/docs/environment-variables) を参照してください。
- 代わりに、リクエストヘッダー `Authorization: Bearer <NOTION_TOKEN>` を付けて認可することもできます。

### トークンの取得

トークンを取得するには、Notion にログインして DevTools を開き、Cookie を確認します。認可に使う `token_v2` という Cookie があります。

## 作者

- [Nana](https://github.com/kirakira-nana) – 実装・ドキュメント
