import { prisma } from "../../globalPrisma";

export const findArticles = async (topic: string, sortBy: string = "createdAt") => {

  if(topic === "all") {
    const articles = await prisma.article.findMany({
      orderBy: [
        {
          [sortBy]: 'desc',
        },
      ],
      select: {
        id: true,
        title: true,
        topicName: true,
        authorId: true,
        body: true,
        createdAt: true,
        votes: true,
        article_img_url: true,
      },
    });
    
    return articles;
  }
  const filteredArticles = await prisma.article.findMany({
    orderBy: [
      {
        [sortBy]: 'desc',
      },
    ],
    select: {
      id: true,
      title: true,
      topicName: true,
      authorId: true,
      body: true,
      createdAt: true,
      votes: true,
      article_img_url: true,
    },
    where: {
      topicName: topic
    }
  });

  return filteredArticles

};

export const fetchArticle = async (id: number) => {

    const article = await prisma.article.findUnique({
      select: {
        id: true,
        title: true,
        topicName: true,
        authorId: true,
        body: true,
        createdAt: true,
        votes: true,
        article_img_url: true,
      },
      where: {
        id: id,
      },
    });

    if (!article) {
      throw Error("article null");
    }
    return article;
};

export const incrementArticleVote = async (id: number) => {
  await prisma.article.update({
    where: {
      id: id,
    },
    data: {
      votes: {
        increment: 1,
      },
    },
  });
};

export const decrementArticleVote = async (id: number) => {
  await prisma.article.update({
    where: {
      id: id,
    },
    data: {
      votes: {
        decrement: 1,
      },
    },
  });
};