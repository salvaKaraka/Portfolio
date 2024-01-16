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
            <div className='w-full md:w-[90%] m-auto border backdrop-blur-2xl border-neutral-400 dark:border-neutral-700 p-2 rounded-xl flex flex-col justify-center align-center'>

                <div className='mb-2'>
                <Link href="/" className="group text-2xl hover:text-neutral-500 transition">
                        {title} <span className='group-hover:text-purple-500'>↗</span>
                </Link>
                    <p className="my-2 text-xl text-neutral-600 dark:text-neutral-400 max-w-[90%]">
                        {description}
                    </p>
                </div>
                <div className={`lg:absolute md:translate-x-[56rem] md:translate-y-[-0rem]  mx-auto`}>
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
    );
}
