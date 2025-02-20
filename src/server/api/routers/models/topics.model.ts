import { prisma } from "../../globalPrisma";

export const findTopics = async () => {

  const topics = await prisma.topic.findMany({
    select: {
        slug: true,
        description: true,
  }
})
  return topics;

};

