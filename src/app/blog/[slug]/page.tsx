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
        <main className="p-4">
            <SectionContainer>
                <div className="my-12 text-center">
                    <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
                    <p className="text-slate-400 mt-2">{post.data.date}</p>
                </div>

                <article className="prose">
                    <Markdown>{post.content}</Markdown>
                </article>
            </SectionContainer>
        </main>
    )
}

