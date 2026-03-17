import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        tags: z.array(z.string()).optional(),
        effekt: z.string().optional(),
        schwierigkeit: z.enum(['leicht', 'mittel', 'schwer', 'experte']).optional(),
        requisiten: z.array(z.string()).optional(),
        typ: z.enum(['gimmick', 'normal', 'technik', 'prinzip']).optional(),
      }),
    }),
  }),
};
