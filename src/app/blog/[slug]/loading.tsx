import BlogSectionContainer from '@/components/sections/BlogSectionContainer';

export default function PostLoading() {
    
    const placeholders = [];
    
    for (let i = 0; i < 50; i++) {
        placeholders.push(
            <div key={i} className={`m-auto max-w-4xl bg-black/5 dark:bg-white/10 animate-pulse p-2 rounded-xl h-5 my-1 flex flex-col justify-between`}>
                {/* Contenido del div */}
            </div>
        );
    }

    return (
        <main className="p-4">
            <BlogSectionContainer title="Cargando..." subtitle='...'>

                {placeholders}
            </BlogSectionContainer>
        </main>
    )
}
