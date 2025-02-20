import { prisma } from "../../globalPrisma";

export const findUsers = async () => {

  const users = await prisma.user.findMany({
    select: {
        id: true,
        createdAt: true,
        username: true,
        email: true,
        avatar_url: true,
  }
})
  return users;

};

