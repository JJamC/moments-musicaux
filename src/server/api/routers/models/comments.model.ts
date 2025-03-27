import { prisma } from "../../globalPrisma";

export const findCommentsByArticleId = async (articleId: number) => {

  const comments = await prisma.comments.findMany({
    select: {
        id: true,
        articleId: true,
        authorId: true,
        body: true,
        votes: true,
        createdAt: true,
  },
  where: {
    articleId: articleId,
  },
})
if (!comments) {
  throw Error("article null");
}
  return comments;
};

export const postComment = async (articleId : number, authorId: number, body: string)=> {

  const newComment = await prisma.comments.create({
    data: {
      articleId,
      authorId,
      body,
      createdAt: Date.now().toString()
    }
  })
  return {
    id: newComment.id,
    articleId: newComment.articleId,
    authorId: newComment.authorId,
    body: newComment.body,
    votes: newComment.votes,
    createdAt: newComment.createdAt,
  }
}

export const deleteComment = async (commentId: number) => {
  console.log(commentId);
  
  await prisma.comments.delete({
    where: {
      id: commentId
    }
  })
}

export const updateComment = async (commentId: number, newBody: string) => {
  const updatedComment = await prisma.comments.update({
    where: {
      id: commentId,
    },
    data: {
      body: newBody,
    },
  })
  return updatedComment
}

export const incrementCommentVotes = async (commentId: number) => {
  await prisma.comments.update({
    where: {
      id: commentId,
    },
    data: {
      votes: {
        increment: 1,
      },
    },
  });
};

export const decrementCommentVotes = async (commentId: number) => {
  await prisma.comments.update({
    where: {
      id: commentId,
    },
    data: {
      votes: {
        decrement: 1,
      },
    },
  });
};