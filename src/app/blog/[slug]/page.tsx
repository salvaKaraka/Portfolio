import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';
import getPostMetadata from '@/components/blog/getPostMetadata';
import TitleSectionContainer from '@/components/sections/BlogSectionContainer';
import dynamic from 'next/dynamic';
const Markdown = dynamic(() => import('markdown-to-jsx'));


const getPostContent = (slug: string) => {
    const folder = './src/content/posts';
    const file = `${folder}/${slug}.md`;
    const fileContent = fs.readFileSync(file, 'utf8');
    const matterResult = matter(fileContent);
    return matterResult;
}


//IMPORTANT! This function is called at build time by Next.js to generate the list of possible values for the slug.
export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};


export default function BlogPost(props: any) {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <main className="p-4 min-h-screen">
            <TitleSectionContainer title={post.data.title} subtitle={post.data.date}>
                
                <div className=' mb-8'>
                    <Link href="/blog" className="mb-8 text-slate-600 dark:text-slate-300 hover:underline"> 
                            ← Back to blog
                    </Link>
                </div>

                <article className="prose dark:prose-invert max-w-4xl mx-auto text-slate-800 dark:text-slate-200">
                    <Markdown>{post.content}</Markdown>
                </article>

            </TitleSectionContainer>
        </main>
    )
}

