// import { prisma } from "../prisma/seed";
// import { afterEach, beforeEach } from "node:test";
// import { data } from "../prisma/data/index";
// import { seed } from "../prisma/seed";
// import { appRouter } from "~/server/api/root";

// beforeEach(async () => {
//   console.log(process.env.NODE_ENV);

//   await seed(data);
//   console.log("✨ Successfully seeded!");
// });

// afterEach(async () => {
//   await prisma.$disconnect();
// });

// test("env test loads correctly", () => {
//   console.log("Loaded ENV:", process.env.DATABASE_URL);
//   expect(process.env.DATABASE_URL).toBeDefined();
// });

// it("findTopics should return an array of topics with slug and description properties", async () => {
//   const topics = await appRouter.topic.listTopics();
//   expect(topics.length).toBe(7);
//   topics.forEach((topic) => {
//     expect(topic).toMatchObject({
//       description: expect.any(String),
//       slug: expect.any(String),
//     });
//   });
// });

// it("findUsers should return an array of users", async () => {
//   const users = await appRouter.user.listUsers();
//   expect(users.length).toBe(4);
//   users.forEach((user) => {
//     expect(user).toMatchObject({
//       id: expect.any(Number),
//       createdAt: expect.any(String),
//       username: expect.any(String),
//       email: expect.any(String),
//       avatar_url: expect.any(String),
//     });
//   });
// });

// // it("fetchUser should return a specific user", async () => {
// //   const user = await fetchUser(2);
// //   expect(user).toMatchObject({
// //     username: "ravelM",
// //     email: "ravelM@impressionistmusic.com",
// //     avatar_url:
// //       "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Maurice_Ravel_1925.jpg/1024px-Maurice_Ravel_1925.jpg",
// //     createdAt: "2023-05-16T08:45:00Z",
// //   });
// // });
