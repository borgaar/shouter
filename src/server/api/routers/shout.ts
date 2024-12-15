import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const getShoutsOutput = z.array(
  z.object({
    user: z.object({
      image: z.string(),
      name: z.string(),
    }),
    content: z.string(),
    createdAt: z.date(),
    likes: z.number(),
  }),
);

export const postRouter = createTRPCRouter({
  createShout: protectedProcedure
    .input(z.string())
    .output(z.string())
    .mutation(async ({ ctx, input }) => {
      return (
        await ctx.db.shout.create({
          data: { content: input, shouterId: ctx.session.user.id },
        })
      ).id;
    }),
  getShouts: publicProcedure
    .input(z.number())
    .output(getShoutsOutput)
    .query(async ({ ctx, input }) => {
      const shouts = await ctx.db.shout.findMany({
        orderBy: { createdAt: "desc" },
        skip: input,
        take: 20,
        include: {
          shouter: true,
          Like: true,
        },
      });

      return shouts.map((s) => ({
        user: {
          name: s.shouter.name ?? "",
          image: s.shouter.image ?? "",
        },
        content: s.content,
        likes: s.Like.length,
        createdAt: s.createdAt,
      }));
    }),
});
