import fs from "node:fs";
import { remark } from "remark";
import html from "remark-html";
// import rehypePrism from "@mapbox/rehype-prism";
import { rehype } from "rehype";
import fm from "front-matter";
import glob from "glob";

export async function importMarkdowns(markdownPath) {
  const fileNames = glob.sync(`${markdownPath}*.md`);
  return await Promise.all(fileNames.map(async (path) => await convertMarkdown(path)));
}

/**
 * convert markdown to object with attributes and html
 * @param {string} path path to file
 * @returns
 */
export async function convertMarkdown(path: string) {
  console.log({ path });

  const file = fs.readFileSync(path, "utf8");
  const { attributes, body } = fm(file);

  console.log({ attributes, body });

  const vFile = await remark().use(html).process(body);
  const result = String(vFile);
  // result = rehype().use(rehypePrism).processSync(result).contents;

  return { path, attributes, html: result };
}
