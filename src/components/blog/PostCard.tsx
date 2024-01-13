import { PostMetadata } from '@/components/blog/PostMetadata';
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
        <div key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
                <h2>{post.title}</h2>
            </Link>
            <p>{post.subtitle}</p>
            <Markdown>{post.preview}</Markdown>
            <p>{post.date}</p>
            {post.tags && post.tags.length > 0 ? (
                <div>
                    {post.tags.map((tag, index) => (
                        <span key={index} className={`text-${getTagColor(tag)} bg-${getTagColor(tag)} p-4`}>{tag} </span>
                    ))}
                </div>) : null
            }
        </div>
    )
}