import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center pt-20 pb-10 text-black/90 dark:text-white/90 text-sm">
        <p>© 2024 <Link href="/" className="text-purple-500">Salvador Karakachoff</Link></p>
        <p>Utilizando Astro y Tailwind CSS</p>
      </div>
    </footer>
  )
}
