import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from '@/components/blog/PostMetadata';

const getPostMetadata = (): PostMetadata[] => {
    const folder = './src/content/blog-posts';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith('.md'));

    // Get gray-matter metadata for each post
    const postMetadata = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${folder}/${filename}`, 'utf8');
        const matterResult = matter(fileContents);
        return{
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: filename.replace('.md', ''),
            tags: matterResult.data.tags || [],
            preview: matterResult.content.substring(0, 100).concat('...'),
        };
    });
    return postMetadata;
};

export default getPostMetadata;