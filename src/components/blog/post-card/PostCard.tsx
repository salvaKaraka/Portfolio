import { PostMetadata } from '@/components/blog/PostMetadata';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Tags = dynamic(() => import('./Tags'), { ssr: false })

export default function PostCard(post: PostMetadata) {

    return (
        <Link href={`/blog/${post.slug}`}>
            <div key={post.slug} className={`border backdrop-blur-2xl border-violet-500/30 dark:border-violet-500/40 p-2 rounded-xl h-40 flex flex-col justify-between hover:bg-black/10 hover:dark:bg-white/20 hover:scale-[.998] transition-all`}>
                <div className='overflow-hidden mb-2'>
                    <h2 className={`text-black/90 dark:text-white/90 font-semibold truncate`}>{post.title}</h2>
                    <p className={`text-black/40 dark:text-white/40 text-[10px] font-semibold`}>{post.date}</p>
                    <p className={`text-gray-600 text-sm overflow-hidden line-clamp-2 mt-2`}>{post.subtitle}</p>
                </div>
                <Tags post={post} />
            </div>
        </Link>
    );
}
