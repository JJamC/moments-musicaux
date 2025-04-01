import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { findUsers } from "../models/users.model";


export const listUsers = publicProcedure
  .output(
    z.array(
      z.object({
        id: z.number().int(),
        createdAt: z.string(),
        username: z.string(),
        email: z.string(),
        avatar_url: z.string(),
      })
    )
  )
  .query(async () => {
    const users = await findUsers()
    return users.map((user) => {
      const userCopy = {...user}
      if (userCopy.createdAt) {
        const dateMatch = /^(\d{4}-\d{2}-\d{2})/.exec(userCopy.createdAt);
        userCopy.createdAt = dateMatch ? dateMatch[0] : "Date Unknown"; 
      }
      return userCopy
    })
  });