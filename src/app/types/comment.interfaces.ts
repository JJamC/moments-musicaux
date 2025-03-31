import { api } from "~/trpc/react";

type CommentMutationType = ReturnType<typeof api.comment.handleCommentPost.useMutation>;
