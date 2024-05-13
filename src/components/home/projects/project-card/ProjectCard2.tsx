import dynamic from 'next/dynamic';
import Link from 'next/link';

const Tags = dynamic(() => import('./Tags'), { ssr: false })

type props = {
    title: string;
    description: string;
    link: string;
    tags: string[];
}

export default function ProjectCard2({ title, description, link, tags}: props) {

    return (
        <div className='m-auto border border-neutral-400 dark:border-neutral-700 p-2 rounded-xl'>
                <div className='p-4'>
                    <Link href={link} target="_blank" rel="noopener noreferrer" className="group flex text-xl hover:text-purple-600 transition">
                        {title}
                        <div className=' group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-75'>
                            <span className='text-purple-500 group-hover:text-purple-600'>↗</span>
                        </div>
                    </Link>
                    <p className="mt-2 mb-2 text-lg text-neutral-600 dark:text-neutral-400 ">
                        {description}
                    </p>
                    <Tags tags={tags} />
                </div>
        </div>
    );
}
