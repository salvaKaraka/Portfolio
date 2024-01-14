import dynamic from 'next/dynamic'
import Browser from '@/components/blog/Browser';
import getPostMetadata from '@/components/blog/getPostMetadata';
import SectionContainer from '@/components/section/SectionContainer';

const PostCard = dynamic(() => import('@/components/blog/post-card/PostCard'), { ssr: false })

export default async function Blog(){

    const postMetadata = await getPostMetadata();
    const postPreviews = await Promise.all(postMetadata.map(async (post) => {
        return(<PostCard key={post.slug} {...post} />)
}));
        
    return (
        <main className="p-5">
            <SectionContainer>
            <div className='grid grid-cols-2 gap-3'>
                {postPreviews}
            </div>
            </SectionContainer>
        </main>
      )
}