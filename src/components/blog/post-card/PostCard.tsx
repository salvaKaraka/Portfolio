import { PostMetadata } from '@/components/blog/PostMetadata';
import { primaryStyle, linkStyle, primaryTextStyle, secondaryTextStyle, tertiaryTextStyle } from '@/styles/styles';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';


const tagColors: {[key: string]: string} = {
    Dev: "red-500",
    Design: "blue-500",
    Tech: "green-500",
    Personal: "gray-500",
    Other: "gray-500",
};

export default function PostCard(post: PostMetadata) {

  const getTagColor = (tag: string) => {
        return tagColors[tag] || "gray-500";
    }

  return (
    <Link href={`/blog/${post.slug}`}>
    <div key={post.slug} className={`${primaryStyle} p-2 rounded-xl h-40 flex flex-col justify-between`}>
      <div className='overflow-hidden'>
        
          <h2 className={`text-violet-400 dark:text-violet-500 hover:text-violet-700 dark:hover:text-violet-900 truncate`}>{post.title}</h2>
        
        <p>{post.subtitle}</p>
        <p className={`text-black/40 dark:text-white/40 text-[10px] font-semibold`}>{post.date}</p>
        <div
           // Ajusta el número de líneas según sea necesario
        >
          
          <Markdown className={`text-black/60 dark:text-white/60 text-sm font-medium overflow-hidden line-clamp-3`}>{post.preview}</Markdown>
        </div>
      </div>
      {post.tags && post.tags.length > 0 ? (
                <div className='mt-auto'>
                    {post.tags.map((tag, index) => (
                        <span key={index} className={`text-${getTagColor(tag)}`}>{tag} </span>
                    ))}
                </div>) : null
            }
    </div>
    </Link>
  );
}
