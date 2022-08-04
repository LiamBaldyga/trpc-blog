import z from 'zod';

export const createPostSchema = z.object({
  title: z.string().max(256, 'Max title length is 256'),
  body: z.string().min(3),
});

export type CreatePostInput = z.TypeOf<typeof createPostSchema>;

export const getSinglePostSchma = z.object({
  postId: z.string().uuid(),
});
