import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import matter from 'gray-matter';
import getPostMetadata from '@/components/blog/getPostMetadata';
import SectionContainer from '@/components/section/SectionContainer';

const getPostContent = (slug: string) => {
    const folder = './src/content/blog-posts';
    const file = `${folder}/${slug}.md`;
    const fileContent = fs.readFileSync(file, 'utf8');
    const matterResult = matter(fileContent);
    return matterResult;
}


 //IMPORTANT! This function is called at build time by Next.js to generate the list of possible values for the slug.
export const generateStaticParams = async () => {
    const postMetadata = getPostMetadata();
    return postMetadata.map((post) => ({
        slug: post.slug,
    }));
};


export default function BlogPost(props: any) {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <main className="p-4">
            <SectionContainer>
                <Link href="/blog">
                <h1>{post.data.title}</h1>
                </Link>
                <p>{post.data.subtitle}</p>
                <p>{post.data.date}</p>
                <Markdown>{post.content}</Markdown>
            </SectionContainer>
        </main>
      )
}

