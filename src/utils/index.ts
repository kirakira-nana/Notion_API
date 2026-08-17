import { HandlerRequest } from "../notion-api/types.js";

// 環境変数、または Authorization ヘッダーから Notion トークンを取得する
export const getNotionToken = (c: HandlerRequest) => {
  return (
    process.env.NOTION_TOKEN ||
    (c.req.header("Authorization") || "").split("Bearer ")[1] ||
    undefined
  );
};
