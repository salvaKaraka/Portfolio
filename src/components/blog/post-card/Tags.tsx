import { PostMetadata } from '@/components/blog/PostMetadata';

export default function Tags({ post }: { post: PostMetadata }) {
  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Dev':
        return 'text-green-500 bg-green-100 dark:bg-green-900 dark:text-green-400';
      case 'Data Science':
        return 'text-blue-500 bg-blue-100 dark:bg-blue-900 dark:text-blue-400';
      case 'Machine Learning':
        return 'text-purple-500 bg-purple-100 dark:bg-purple-900 dark:text-purple-400';
      case 'Web Development':
        return 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-400';
      default:
        return 'text-gray-500 bg-gray-100 dark:bg-gray-900 dark:text-gray-400';
    }
  };

  return (
    <>
      {post.tags && post.tags.length > 0 ? (
        <div className='flex gap-1'>
          {post.tags.map((tag, index) => (
            <span key={index} className={`${getTagColor(tag)} text-[12px] border rounded-md px-1 border-black/10 dark:border-white/10`}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
}
