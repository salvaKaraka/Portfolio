"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
    svg: JSX.Element;
    href: string;
    label: string;
  }

export default function ActiveLink({ svg, href, label}:ActiveLinkProps) {
    const path = usePathname();

    return (
        <Link href={href}>
          <div className="relative">
            <span className={`flex justify-center items-center gap-[3px] hover:bg-black/10 dark:hover:bg-white/20 rounded-full py-1 px-4 transition ${ path === href || path.startsWith(`${href}/`) ? "bg-black/10 dark:bg-white/20" : ""}`}>
              {svg}
              {label}
            <div className={`rounded-full w-3 h-3 absolute top-[10px] right-[5px]`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-caret-down-filled ${path.startsWith(`${href}/`) ? "text-black/60 dark:text-white/60" : "text-transparent"}`} width="15" height="15" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" strokeWidth="0" fill="currentColor" /></svg>
            </div>
            </span>
          </div>
        </Link>
    );
}