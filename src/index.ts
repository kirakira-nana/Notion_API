import { Hono } from "hono";

import { pageRoute } from "./routes/notion-page.js";
import { tableRoute } from "./routes/table.js";
import { userRoute } from "./routes/user.js";
import { searchRoute } from "./routes/search.js";

// Notion コンテンツ向け API（v1）
const app = new Hono().basePath("/v1");

app.get("/page/:pageId", pageRoute);
app.get("/table/:pageId", tableRoute);
app.get("/user/:userId", userRoute);
app.get("/search", searchRoute);

export default app;
