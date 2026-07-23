import SkillsMarquee from "./home/SkillsMarquee";

export default function Footer() {
  return (
    <div className="w-full mt-20 border-t border-orange-500/20 backdrop-blur-md bg-white/5 dark:bg-black/5">
    <SkillsMarquee />
    <footer className="py-8 px-6 w-full flex flex-col md:flex-row justify-center md:justify-around items-center text-sm text-black/70 dark:text-white/70">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <p className="font-semibold text-black/90 dark:text-white/90">
                © 2026 <a href="https://www.linkedin.com/in/salvador-karakachoff/" className="relative bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent decoration-orange-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-orange-400 after:to-orange-500 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100">Salvador Karakachoff</a>
            </p>
            <p className="mt-1 opacity-80">Crafting intelligent systems & robust software.</p>
        </div>
        
        <div className="flex gap-6 font-medium">
            <a href="https://github.com/salvakaraka/" target="_blank" rel="noreferrer" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">GitHub</a>
            <a href="https://Linkedin.com/in/salvador-karakachoff/" target="_blank" rel="noreferrer" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">LinkedIn</a>
            <a href="mailto:salvador.karakachoff@gmail.com" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Contact</a>
        </div>
    </footer>
    </div>
  )
}
