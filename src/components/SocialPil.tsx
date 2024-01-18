import { ReactNode } from "react";

type props ={
    children : ReactNode;
    className? : string;
    href : string;
}

export default function SocialTag({children, className, href}:props){
    return (
        <a target="_blank" rel="noopener noreferrer" href={href} className={`${className? className : ""} text-sm cursor-pointer rounded-full font-semibold flex justify-center items-center gap-x-1 md:gap-x-2 py-1 px-2 border border-black/10 hover:bg-black/10 dark:border-white/5 dark:hover:bg-white/5 transition`}>
            {children}
        </a>
    )
}