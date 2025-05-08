import { users } from "../../db/schema";
import { RequestInfo } from "rwsdk/worker";

const Home = async ({ ctx }: RequestInfo) => {
  const allUsers = await ctx.db.select().from(users).all();
  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(allUsers, null, 2)}</pre>
    </div>
  );
};

export { Home };
