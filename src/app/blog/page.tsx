import Browser from '@/components/blog/Browser';
import PostCard from '@/components/blog/PostCard';
import getPostMetadata from '@/components/blog/getPostMetadata';
import SectionContainer from '@/components/section/SectionContainer';

export default function Blog(){

    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostCard key={post.slug} {...post} />
    ));
        
    return (
        <main className="p-4">
            <SectionContainer>
                <Browser />
                {postPreviews}
            </SectionContainer>
        </main>
      )
}