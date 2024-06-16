import rss from "@astrojs/rss"
import { getCollection } from "astro:content";

export async function GET(context) {
    const posts = await getCollection("posts");
    const comments = await getCollection("comments");
    return rss({
        title: "Recent Posts & News",
        description: "You can read the full content on my website (https://jschall.net)",
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            link: `/posts/${post.slug}`,
        })),
    });
}