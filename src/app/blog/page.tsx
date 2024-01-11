import PostCard from '@/components/PostCard';
import getPostMetadata from '@/components/getPostMetadata';
import Link from 'next/link';



export default function Blog(){

    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostCard key={post.slug} {...post} />
    ));
        
    return (
        <main className="p-4">
            {postPreviews}
        </main>
      )
}