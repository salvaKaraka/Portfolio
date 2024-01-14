import SectionContainer from '@/components/section/SectionContainer';
import { primaryStyle } from '@/styles/styles';

export default function Blog() {
    
    const divs = [];
    
    for (let i = 0; i < 20; i++) {
        divs.push(
            <div key={i} className={`bg-black/5 dark:bg-white/10 animate-pulse p-2 rounded-xl h-5 my-1 flex flex-col justify-between`}>
                {/* Contenido del div */}
            </div>
        );
    }

    return (
        <main className="p-5 h-screen">
            <SectionContainer>
            {divs}
            </SectionContainer>
        </main>
    );
}
