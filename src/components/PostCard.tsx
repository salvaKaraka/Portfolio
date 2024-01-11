import getPostMetadata from '@/components/getPostMetadata';
import { PostMetadata } from '@/components/PostMetadata';
import Link from 'next/link';

export default function PostCard(post: PostMetadata) {

    return (
        <div key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
                <h2>{post.title}</h2>
            </Link>
            <p>{post.subtitle}</p>
            <p>{post.date}</p>
            {post.tags && post.tags.length > 0 ? (
                <div>
                    <strong>Tags: </strong>
                    {post.tags.slice(0, -1).map((tag, index) => (
                        <span key={index} className="tag">{tag}, </span>
                    ))}
                    <span className="tag">{post.tags![post.tags!.length - 1]}. </span>
                </div>) : null
            }
        </div>
    )
}