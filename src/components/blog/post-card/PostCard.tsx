import { PostMetadata } from '@/components/blog/PostMetadata';
import { primaryStyle } from '@/styles/styles';
import Markdown from 'markdown-to-jsx';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Tags = dynamic(() => import('./Tags'), { ssr: false })

export default function PostCard(post: PostMetadata) {

    return (
        <Link href={`/blog/${post.slug}`}>
            <div key={post.slug} className={`${primaryStyle} p-2 rounded-xl h-40 flex flex-col justify-between hover:bg-black/10 hover:dark:bg-white/20 hover:scale-[.99] transition-all`}>
                <div className='overflow-hidden mb-2'>
                    <h2 className={`text-violet-500 font-semibold truncate`}>{post.title}</h2>
                    <p className={`text-black/40 dark:text-white/40 text-[10px] font-semibold`}>{post.date}</p>
                    <p className={`text-black/60 dark:text-white/60 text-sm overflow-hidden line-clamp-2 mt-2`}>{post.subtitle}</p>
                </div>
                <Tags post={post} />
            </div>
        </Link>
    );
}
