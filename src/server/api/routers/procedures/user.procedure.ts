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
    return users.map(user => ({
      ...user,
      createdAt: user.createdAt.toISOString(), // Convert Date to string (ISO format)
    }));
  });