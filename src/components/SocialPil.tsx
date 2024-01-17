import { ReactNode } from "react";

type props ={
    children : ReactNode;
    className? : string;
    href : string;
}

export default function SocialTag({children, className, href}:props){
    return (
        <a target="_blank" rel="noopener noreferrer" href={href} className={`${className? className : ""} cursor-pointer rounded-full font-semibold flex justify-center items-center gap-x-1 md:gap-x-2 py-1 md:py-2 px-2 md:px-3 border border-black/10 bg-black/5 hover:bg-black/10 dark:border-white/5 dark:bg-white/10 dark:hover:bg-white/30 hover:scale-110 transition`}>
            {children}
        </a>
    )
}