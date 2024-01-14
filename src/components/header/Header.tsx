import NavBar from "./NavBar";
import LanguageButton from "./LanguageButton";
import ThemeButton from "./ThemeButton";

export default function Header(){

    return (
        <header className="sticky top-0 z-10 font-semibold text-black/90 dark:text-white/90 flex gap-2 justify-center items-center mx-auto py-5 w-full xl:w-[1200px]">
            <LanguageButton/>
            <NavBar />
            <ThemeButton />
        </header>
    )
}