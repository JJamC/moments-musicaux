import { handleCommentDelete, handleCommentPost, listCommentsByArticle } from "./procedures/comments.procedures";
import { createTRPCRouter } from "../trpc";

export const commentRouter = createTRPCRouter({
listCommentsByArticle,
handleCommentPost,
handleCommentDelete
});

export type CommentRouter = typeof commentRouter;