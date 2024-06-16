import { rssSchema } from "@astrojs/rss";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        description: z.string(),
    }),
});

const comments = defineCollection({
    type: "content",
    schema: z.object({
        pubDate: z.coerce.date(),
    }),
});

export const collections = { posts, comments };