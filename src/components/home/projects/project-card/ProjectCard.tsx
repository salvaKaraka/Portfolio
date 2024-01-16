"use client"
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ModelCanvas from '../ModelCanvas';
import { useEffect, useState } from 'react';

const Tags = dynamic(() => import('./Tags'), { ssr: false })

type props = {
    title: string;
    description: string;
    link?: string;
    github: string;
    model?: any;
    alt?: string;
    tags: string[];
    shadowPosition?: [number, number, number];
}

export default function PostCard({ title, description, link, github, model, tags, shadowPosition}: props) {

    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(rotation => rotation + 0.01)
        }, 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <Link href={github} className='w-full md:w-[90%] m-auto'>
            <div className='border backdrop-blur-2xl border-neutral-400 dark:border-neutral-700 p-2 rounded-xl flex flex-col justify-between hover:bg-black/5 hover:dark:bg-white/5 hover:scale-[.998] transition-all'>

                <div className='mb-2'>
                    <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-900 dark:text-gray-100 max-w-[90%]">
                        {description}
                    </p>
                </div>
                <div className={`md:absolute md:-right-32 md:-top-16`}>
                    {model &&
                        <ModelCanvas height="15rem" shadowPosition={shadowPosition}>
                            <mesh rotation={[0,rotation,0]}>
                                {model}
                            </mesh>
                        </ModelCanvas>
                    }
                </div>

                <Tags tags={tags} />
            </div>
        </Link>
    );
}
