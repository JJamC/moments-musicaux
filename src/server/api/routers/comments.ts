import { downVoteCommentVotes, editComment, handleCommentDelete, handleCommentPost, listCommentsByArticle, upVoteCommentVotes } from "./procedures/comments.procedures";
import { createTRPCRouter } from "../trpc";

export const commentRouter = createTRPCRouter({
listCommentsByArticle,
handleCommentPost,
handleCommentDelete,
editComment,
upVoteCommentVotes,
downVoteCommentVotes
});

export type CommentRouter = typeof commentRouter;