import SectionContainer from '@/components/section/SectionContainer';

export default function PostLoading() {
    
    const placeholders = [];
    
    for (let i = 0; i < 20; i++) {
        placeholders.push(
            <div key={i} className={`bg-black/5 dark:bg-white/10 animate-pulse p-2 rounded-xl h-5 my-1 flex flex-col justify-between`}>
                {/* Contenido del div */}
            </div>
        );
    }

    return (
        <main className="p-4">
            <SectionContainer className='divide-slate-300 dark:divide-neutral-700'>
                <div className="my-12 text-center">
                    <h1 className="text-2xl text-slate-600 dark:text-slate-300 ">Cargando...</h1>
                    <p className="text-slate-400 mt-2">...</p>
                </div>

                

                <hr className="my-8" />

                {placeholders}
            </SectionContainer>
        </main>
    )
}
