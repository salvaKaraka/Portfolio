import getPostMetadata from '@/components/blog/getPostMetadata';
import SectionContainer from '@/components/section/SectionContainer';
import { primaryStyle } from '@/styles/styles';

export default async function Blog() {
    const postMetadataPromise = getPostMetadata();  // Obtenemos la promesa
    const postMetadata = await postMetadataPromise;  // Esperamos a que la promesa se resuelva

    const placeholders = postMetadata.map((post) => (
        <div key={post.title} className={`${primaryStyle} animate-pulse p-2 rounded-xl h-40 flex flex-col justify-between hover:bg-black/10 hover:scale-[.99] transition-all`}>
        </div>
    ));

    return (
        <main className="p-5">
            <SectionContainer>
                <div className='grid grid-cols-2 gap-3'>
                    {placeholders}
                </div>
            </SectionContainer>
        </main>
    );
}
