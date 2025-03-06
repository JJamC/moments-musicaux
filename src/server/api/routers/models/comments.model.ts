import { prisma } from "../../globalPrisma";

export const findCommentsById = async (id: number) => {

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
    id: id,
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

