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

export const fetchUser = async (id: number) => {

  const user = await prisma.user.findUnique({
    select: {
      id: true,
      createdAt: true,
      username: true,
      email: true,
      avatar_url: true,
    },
    where: {
      id: id,
    },
  });

  if (!user) {
    throw Error("user null");
  }
  return user;
};

