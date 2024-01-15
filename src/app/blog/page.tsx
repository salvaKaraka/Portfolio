import dynamic from 'next/dynamic'
import Browser from '@/components/blog/Browser';
import getPostMetadata from '@/components/blog/getPostMetadata';
import BlogSectionContainer from '@/components/sections/BlogSectionContainer';

const PostCard = dynamic(() => import('@/components/blog/post-card/PostCard'), { ssr: false })

export default async function Blog(){

    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
      <PostCard key={post.slug} {...post} />
    ));
        
    return (
        <main className="p-5 min-h-screen">
            <BlogSectionContainer title="Blog" subtitle='A collection of my thoughts and ideas.'>

            <div className='grid grid-cols-1 gap-3'>
                {postPreviews}
            </div>
            </BlogSectionContainer>
        </main>
      )
}