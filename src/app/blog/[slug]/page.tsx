import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';
import getPostMetadata from '@/components/blog/getPostMetadata';
import SectionContainer from '@/components/section/SectionContainer';
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
            <SectionContainer className='divide-slate-300 dark:divide-neutral-700'>
                <div className="my-12 text-center">
                    <Link href="/blog" className="text-slate-600 dark:text-slate-300 hover:underline"> 
                        ← Back to blogㅤ
                    </Link>
                    <h1 className="text-2xl text-slate-600 dark:text-slate-300 ">{post.data.title}</h1>
                    <p className="text-slate-400 mt-2">{post.data.date}</p>
                </div>

                

                <hr className="my-8" />

                <article className="prose dark:prose-invert mx-auto text-slate-800 dark:text-slate-200">
                    <Markdown>{post.content}</Markdown>
                </article>
            </SectionContainer>
        </main>
    )
}

