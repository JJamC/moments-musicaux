import { listUsers } from "./procedures/user.procedure";
import { createTRPCRouter } from "../trpc";

export const userRouter = createTRPCRouter({
listUsers,
});

export type UsersRouter = typeof userRouter;