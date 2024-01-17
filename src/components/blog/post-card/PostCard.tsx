import { PostMetadata } from '@/components/blog/PostMetadata';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Tags = dynamic(() => import('./Tags'), { ssr: false })

export default function PostCard(post: PostMetadata) {

    return (
        <Link href={`/blog/${post.slug}`} className='w-full md:w-[90%] m-auto'>
            <div key={post.slug} className={`border border-neutral-400 dark:border-neutral-700 p-2 rounded-xl h-32 flex flex-col justify-between hover:bg-black/5 hover:dark:bg-white/5 hover:scale-[.998] transition-all`}>
                <div className='overflow-hidden mb-2'>
                    <h2 className={`text-black/90 dark:text-white/90 text-xl font-semibold truncate`}>{post.title} - <span className={`text-black/40 dark:text-white/40 text-[12px] font-semibold`}>{post.date}</span></h2>
                    <p className={`text-neutral-700 dark:text-neutral-400 text-md overflow-hidden line-clamp-2 mt-2`}>{post.subtitle}</p>
                </div>
                <Tags post={post} />
            </div>
        </Link>
    );
}
