import { users } from "../../db/schema";
import { RequestInfo } from "rwsdk/worker";
import { Button } from "@/app/components/ui/button";
const Home = async ({ ctx }: RequestInfo) => {
  const allUsers = await ctx.db.select().from(users).all();
  return (
    <div>
      <h1 className="text-4xl font-bold ">Hello World</h1>
      <pre>{JSON.stringify(allUsers, null, 2)}</pre>
      <Button>Click me</Button>
    </div>
  );
};

export { Home };
