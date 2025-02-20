import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { findTopics } from "../models/topics.model";


export const listTopics = 
publicProcedure.output(
    z.array(
      z.object({
        slug: z.string(),
        description: z.string(),
      })
    )
  )
  .query(async () => {
    const topics = await findTopics()
    return topics;
  });

  