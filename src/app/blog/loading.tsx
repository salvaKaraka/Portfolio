import getPostMetadata from '@/components/blog/getPostMetadata';
import SectionContainer from '@/components/sections/SectionContainer';

export default async function BlogLoading() {
    const postMetadataPromise = getPostMetadata();  // Obtenemos la promesa
    const postMetadata = await postMetadataPromise;  // Esperamos a que la promesa se resuelva

    const placeholders = postMetadata.map((post) => (
        <div key={post.title} className={`border backdrop-blur-2xl border-neutral-700 animate-pulse p-2 rounded-xl h-32 transition-all`}>
        </div>
    ));

    return (
        <main className="p-5 h-screen">
            <SectionContainer>
                <div className='grid grid-cols-1 gap-3'>
                    {placeholders}
                </div>
            </SectionContainer>
        </main>
    );
}
