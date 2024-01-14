import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostMetadata } from '@/components/blog/PostMetadata';

const getPostMetadata = async (): Promise<PostMetadata[]> => {
    const folder = './src/content/blog-posts';

    try {
        const files = await fs.promises.readdir(folder);
        const markdownPosts = files.filter((file) => file.endsWith('.md'));

        const postMetadata = await Promise.all(markdownPosts.map(async (filename) => {
            const filePath = path.join(folder, filename);
            const fileContents = await fs.promises.readFile(filePath, 'utf8');
            const matterResult = matter(fileContents);

            return {
                title: matterResult.data.title,
                date: matterResult.data.date,
                subtitle: matterResult.data.subtitle ? matterResult.data.subtitle : '↬ ✍️',
                slug: filename.replace('.md', ''),
                tags: matterResult.data.tags || [],
            };
        }));

        return postMetadata;
    } catch (error) {
        console.error(`Error reading directory ${folder}:`, error);
        return [];
    }
};

export default getPostMetadata;
