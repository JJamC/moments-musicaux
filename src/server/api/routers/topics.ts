import { listTopics } from "./procedures/topics.procedures";
import { createTRPCRouter } from "../trpc";

export const topicRouter = createTRPCRouter({
listTopics,
});

export type TopicsRouter = typeof topicRouter;