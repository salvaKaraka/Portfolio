import { PostMetadata } from '@/components/blog/PostMetadata';

export default function Tags({ post }: { post: PostMetadata }) {

  return (
    <>
      {post.tags && post.tags.length > 0 ? (
        <div className='flex gap-1'>
          {post.tags.map((tag, index) => (
            <span key={index} className={`text-[12px] border rounded-md px-1 border-black/10 dark:border-white/10`}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
}
