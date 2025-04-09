import { prisma } from "prisma/seed";
import { afterEach, beforeEach } from "node:test";
import { data } from "prisma/data";
import { seed } from "prisma/seed";
import { api } from "~/trpc/react";

beforeEach(async () => {
    await seed(data)
    console.log('✨ Successfully seeded!')
})

afterEach(async () => {
  await prisma.$disconnect()
})

it('should return a table of topics with slug and description properties', async () => {
    const topics = await api.topic.listTopics.useQuery()
    console.log(topics);
    
})