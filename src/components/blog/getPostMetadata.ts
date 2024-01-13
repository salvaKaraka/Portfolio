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

        // Remove newlines from content excluding bold markers
        const preview = matterResult.content.replace(/(\*\*.*?\*\*|[\r\n])/gs, ' ');

        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle? matterResult.data.subtitle : '↬ ✍️',
            slug: filename.replace('.md', ''),
            tags: matterResult.data.tags || [],
            preview: preview,
        };
    });
    return postMetadata;
};

export default getPostMetadata;
