import { createSafeActionClient } from "next-safe-action";
import { currentUser } from "./auth";

export const action = createSafeActionClient();

export const authAction = createSafeActionClient({
  async middleware() {
    const user = await currentUser();

    if (!user) {
      throw new Error("You must be logged in!");
    }

    return { user };
  },
});
