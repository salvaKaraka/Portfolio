import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-10 self-center font-semibold text-center text-black/90 dark:text-white/90 bg-neutral-300/30 dark:bg-neutral-950/30 w-full">
        <p>© 2024 <Link href="/" className="text-purple-500 hover:underline">Salvador Karakachoff</Link></p>
        <p>Using Next.js, React, Tailwind y TypeScript</p>
    </footer>
  )
}
