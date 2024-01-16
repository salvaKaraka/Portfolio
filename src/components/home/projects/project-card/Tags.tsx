
export default function Tags({ tags }: { tags: string[] }) {
  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'React':
        return 'text-blue-500 bg-blue-100 dark:bg-blue-900 dark:text-blue-400';
      case 'Next.js':
        return 'text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-100';
      case 'TypeScript':
        return 'text-blue-500 bg-blue-100 dark:bg-blue-900 dark:text-blue-400';
      case 'JavaScript':
        return 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-400';
      case 'Node.js':
        return 'text-green-500 bg-green-100 dark:bg-green-900 dark:text-green-400';
      case 'Python':
        return 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-400';
      case 'HTML':
        return 'text-red-500 bg-red-100 dark:bg-red-900 dark:text-red-400';
      case 'CSS':
        return 'text-blue-500 bg-blue-100 dark:bg-blue-900 dark:text-blue-400';
      case 'TailwindCSS':
        return 'text-blue-500 bg-blue-100 dark:bg-blue-900 dark:text-blue-400';
      case 'Three.js':
        return 'text-blue-500 bg-blue-100 dark:bg-blue-900 dark:text-blue-400';
      case 'React Three Fiber':
        return 'text-blue-500 bg-blue-100 dark:bg-blue-900 dark:text-blue-400';
    }
  };

  return (
    <>
      {tags && tags.length > 0 ? (
        <div className='flex gap-1'>
          {tags.map((tag, index) => (
            <span key={index} className={`${getTagColor(tag)} text-[12px] border rounded-md px-1 border-black/10 dark:border-white/10`}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
}
