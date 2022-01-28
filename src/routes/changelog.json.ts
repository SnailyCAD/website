import { importMarkdowns, convertMarkdown } from "$lib/mdx";

const postFiles = await importMarkdowns("src/data/changelogs/");

export async function get() {
  const posts = postFiles;
  console.log({ posts });
  const body = JSON.stringify(posts);

  return { body };
}
