import dynamic from 'next/dynamic';
import Link from 'next/link';
import ModelCanvas from './ModelCanvas';

const Tags = dynamic(() => import('./Tags'), { ssr: false })

type props = {
    title: string;
    description: string;
    link: string;
    model: any;
    tags: string[];
    shadowPosition?: [number, number, number];
}

export default function ProjectCard({ title, description, link, model, tags, shadowPosition }: props) {

    return (
        <div className='w-full m-auto border border-neutral-400 dark:border-neutral-700 p-2 rounded-xl'>
            <div className='flex flex-col md:flex-row '>
                <div className='p-4'>

                    <Link href={link} target="_blank" rel="noopener noreferrer" className="group flex text-xl md:text-2xl hover:text-purple-600 transition">
                        {title}
                        <div className=' group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-75'>
                            <span className='text-purple-500 group-hover:text-purple-600'>↗</span>
                        </div>
                    </Link>

                    <p className="mt-2 mb-2 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-[90%] ">
                        {description}
                    </p>
                    <Tags tags={tags} />
                </div>
                <div className="cursor-grab active:cursor-grabbing hover:scale-110 lg:mr-16 transition-all items-center justify-center mx-auto">
                    {model &&
                        <ModelCanvas height="10rem" shadowPosition={shadowPosition}>
                            {model}
                        </ModelCanvas>
                    }
                </div>
            </div>
        </div>
    );
}
