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
        <span className={`flex gap-1 py-1 px-2 rounded-md ${path === href ? "bg-blue-500 text-white" : ""}`}>
          {svg}
          {label}
        </span>
        </Link>
    );
}