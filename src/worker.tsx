import { defineApp } from "rwsdk/worker";
import { index, render } from "rwsdk/router";
import { Document } from "@/app/Document";
import { Home } from "src/pages/Home";
import { setCommonHeaders } from "src/headers";
import { drizzle } from "drizzle-orm/d1";
import { env } from "cloudflare:workers";

export interface Env {
  DB: D1Database;
}

export type AppContext = {
  db: ReturnType<typeof drizzle>;
};

export default defineApp([
  setCommonHeaders(),
  async ({ ctx, request, headers }) => {
    // setup db
    ctx.db = drizzle(env.DB);
  },
  render(Document, [index([Home])]),
]);
