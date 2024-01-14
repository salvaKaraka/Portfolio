"use client"
import { useState } from "react";
import NavBar from "./NavBar";
import SecretButton from "./SecretButton";
import ThemeButton from "./ThemeButton";

export default function Header() {

    const [secretCounter, setSecretCounter] = useState(3);

    function addClasses(element: any, classes: any) {
        element?.classList.add(...classes);
    }

    function removeClasses(element: any, classes: any) {
        element?.classList.remove(...classes);
    }

    function animateElements() {
        const secretBtn = document.getElementById("secretBtn");
        const nav = document.getElementById("nav");
        const themeBtn = document.getElementById("themeBtn");
        const selector = document.getElementById("nav-selector");
        const selected = document.getElementById("nav-selected");
        const robotBtn = document.getElementById("robotBtn");
        const home = document.getElementById("nav-home");
        const blog = document.getElementById("nav-blog");

        addClasses(home, ["duration-[4000ms]", "translate-x-[6000px]"]);
        addClasses(blog, ["duration-[4000ms]", "translate-x-[6000px]"]);
        addClasses(selected, ["duration-[4000ms]", "translate-x-[6000px]"]);
        addClasses(selector, ["duration-[4000ms]", "translate-x-[6000px]"]);

        removeClasses(selector, ["duration-100"]);
        removeClasses(selected, ["duration-300"]);
        addClasses(robotBtn, ["animate-spin"]);
        addClasses(themeBtn, ["delay-1000", "translate-y-full"]);
        addClasses(nav, ["duration-1000", "rotate-12"]);
        addClasses(secretBtn, ["animate-bounce"]);

        setTimeout(() => {
            removeClasses(selector, ["translate-x-[6000px]"]);
            removeClasses(selected, ["translate-x-[6000px]"]);
            removeClasses(home, ["translate-x-[6000px]"]);
            removeClasses(blog, ["translate-x-[6000px]"]);

            setTimeout(() => {
                removeClasses(home, ["duration-[4000ms]"]);
                removeClasses(blog, ["duration-[4000ms]"]);
                removeClasses(selector, ["duration-[4000ms]"]);
                removeClasses(selected, ["duration-[4000ms]"]);
                addClasses(selected, ["duration-300"]);
                addClasses(selector, ["duration-100"]);
                removeClasses(themeBtn, ["translate-y-full"]);
                removeClasses(robotBtn, ["animate-spin"]);
            
            }, 500);

            removeClasses(secretBtn, ["animate-bounce"]);
            removeClasses(nav, ["rotate-12", "duration-1000"]);
            removeClasses(themeBtn, ["delay-1000"]);
        }, 1500);
    }

    function secretEvent() {
        setSecretCounter(secretCounter - 1);
        console.log(secretCounter);
        if (secretCounter === 0) {
            setSecretCounter(3);
            animateElements();
        }
    }

    return (
        <header className="sticky top-0 z-10 font-semibold text-black/90 dark:text-white/90 flex gap-2 justify-center items-center mx-auto py-5 w-full xl:w-[1200px]">
            <SecretButton onClick={secretEvent} />
            <NavBar />
            <ThemeButton />
        </header>
    )
}