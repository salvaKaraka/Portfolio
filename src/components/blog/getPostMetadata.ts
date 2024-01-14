import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from '@/components/blog/PostMetadata';

const getPostMetadata = (): PostMetadata[] => {
  const folder = './src/content/posts';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle ? matterResult.data.subtitle : '↬ ✍️',
        slug: fileName.replace('.md', ''),
        tags: matterResult.data.tags || [],
    };
  });

  return posts;
};

export default getPostMetadata;