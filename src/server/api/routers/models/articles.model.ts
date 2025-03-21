import { prisma } from "../../globalPrisma";

export const findArticles = async () => {
  const articles = await prisma.article.findMany({
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
  const formattedArticles = articles.map((article) => {
    const formattedArticle = {...article}
    const date = new Date(article.createdAt);
    const simpleDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    formattedArticle.createdAt = simpleDate
    return formattedArticle
  })
  
  return formattedArticles;
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