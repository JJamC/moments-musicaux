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


