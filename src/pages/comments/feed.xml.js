import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const comments = await getCollection("comments");
  return rss({
    title: "Recent Comments",
    description:
      "You can read the full content on my website (https://jschall.net/comments)",
    site: context.site,
    items: comments.map((comment) => ({
      ...comment.data,
      link: `/comments/${comment.slug}`,
      content: comment.body,
    })),
  });
}
