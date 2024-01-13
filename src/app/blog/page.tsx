import Browser from '@/components/blog/Browser';
import PostCard from '@/components/blog/post-card/PostCard';
import getPostMetadata from '@/components/blog/getPostMetadata';
import SectionContainer from '@/components/section/SectionContainer';

export default function Blog(){

    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostCard key={post.slug} {...post} />
    ));
        
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