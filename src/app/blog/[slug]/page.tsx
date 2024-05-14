import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';
import getPostMetadata from '@/components/blog/getPostMetadata';
import BlogSectionContainer from '@/components/sections/BlogSectionContainer';
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
            <BlogSectionContainer title={post.data.title} subtitle={post.data.date}>
                
                <div className=' mb-8'>
                    <Link href="/blog" className="relative bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent decoration-purple-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-violet-400 after:to-purple-500 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100"> 
                            ← Back to blog
                    </Link>
                </div>

                <article id="post_container" className="prose dark:prose-invert max-w-4xl mx-auto text-slate-800 dark:text-slate-200">
                    <Markdown>{post.content}</Markdown>
                </article>

            </BlogSectionContainer>
        </main>
    )
}

