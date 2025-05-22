import { defineApp } from "rwsdk/worker";
import { index, render } from "rwsdk/router";
import { Document } from "@/app/Document";
import { Home } from "src/pages/Home";
import { setCommonHeaders } from "src/headers";

export interface Env {
  DB: D1Database;
}

export default defineApp([
  setCommonHeaders(),
  render(Document, [index([Home])]),
]);
