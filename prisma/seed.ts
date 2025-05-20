import { PrismaClient } from '@prisma/client'
import { articles, ArticlesData } from './data/articles'
import { comments, CommentsData} from './data/comments'
import { topics, TopicsData } from './data/topics'
import { users, UsersData } from './data/users'

export const prisma = new PrismaClient()

export interface SeedData {
  articles: ArticlesData[],
  comments: CommentsData[],
  topics: TopicsData[],
  users: UsersData[]
}

export async function seed({articles, comments, topics, users}: SeedData) {

  await prisma.comments.deleteMany({});
  await prisma.article.deleteMany({});
  await prisma.topic.deleteMany({});
  await prisma.user.deleteMany({});

  await prisma.user.createMany({ data: users });
  await prisma.topic.createMany({ data: topics });
  await prisma.article.createMany({ data: articles});
  await prisma.comments.createMany({ data: comments });
}

seed({articles, comments, topics, users})
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})