import rss from "@astrojs/rss"
import { getCollection } from "astro:content";

export async function GET(context) {
    const blog = await getCollection("blog");
    return rss({
        title: "Posts",
        description: "You can read the full content on my website (https://jschall.net)",
        site: context.site,
        items: blog.map((post) => ({
            ...post.data,
            link: `/blog/${post.slug}`,
        })),
    });
}