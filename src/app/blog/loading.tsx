import getPostMetadata from '@/components/blog/getPostMetadata';
import SectionContainer from '@/components/section/SectionContainer';

export default async function BlogLoading() {
    const postMetadataPromise = getPostMetadata();  // Obtenemos la promesa
    const postMetadata = await postMetadataPromise;  // Esperamos a que la promesa se resuelva

    const placeholders = postMetadata.map((post) => (
        <div key={post.title} className={`border backdrop-blur-2xl border-violet-500/30  dark:border-violet-500/40 bg-black/5 dark:bg-white/10 animate-pulse p-2 rounded-xl h-40 flex flex-col justify-between hover:bg-black/10 hover:scale-[.99] transition-all`}>
        </div>
    ));

    return (
        <main className="p-5 h-screen">
            <SectionContainer>
                <div className='grid grid-cols-2 gap-3'>
                    {placeholders}
                </div>
            </SectionContainer>
        </main>
    );
}
