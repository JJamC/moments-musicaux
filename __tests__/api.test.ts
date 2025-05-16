import { prisma } from "../prisma/seed";
import { afterEach, beforeEach } from "node:test";
import { data } from "../prisma/data/index";
import { seed } from "../prisma/seed";
import { findTopics } from "~/server/api/routers/models/topics.model";

beforeEach(async () => {
  console.log(process.env.NODE_ENV);

  await seed(data);
  console.log("✨ Successfully seeded!");
});

afterEach(async () => {
  await prisma.$disconnect();
});

it("should return a table of topics with slug and description properties", async () => {
  const topics = await findTopics();
  console.log(topics);
});
