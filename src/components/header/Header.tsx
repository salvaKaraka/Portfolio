"use client"
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import SecretButton from "./SecretButton";
import ThemeButton from "./ThemeButton";
import { delay } from "framer-motion";

export default function Header() {

    const [secretCounter, setSecretCounter] = useState(3);

    function addClasses(element: any, classes: any) {
        element?.classList.add(...classes);
    }

    function removeClasses(element: any, classes: any) {
        element?.classList.remove(...classes);
    }

    var isCompleted = false;   

    function animateElements() {
        const secretBtn = document.getElementById("secretBtn");
        const nav = document.getElementById("nav");
        const themeBtn = document.getElementById("themeBtn");
        const selector = document.getElementById("nav-selector");
        const selected = document.getElementById("nav-selected");
        const robotBtn = document.getElementById("robotBtn");
        const home = document.getElementById("nav-home");
        const blog = document.getElementById("nav-blog");

        addClasses(home, ["duration-[3500ms]", "translate-x-[6000px]"]);
        addClasses(blog, ["duration-[4000ms]", "translate-x-[6000px]"]);
        addClasses(selected, ["duration-[3000ms]"]);
        addClasses(selector, ["duration-[3500ms]"]);
        var selectedTranslate = selected!.style.transform;
        var selectorTranslate = selector!.style.transform;
        selected!.style.transform = "translateX(6000px)";
        selector!.style.transform = "translateX(6000px)";

        removeClasses(selector, ["duration-100"]);
        removeClasses(selected, ["duration-300"]);
        addClasses(robotBtn, ["animate-spin"]);
        addClasses(themeBtn, ["duration-[3000ms]", "translate-y-[6000px]", "rotate-[1800deg]"]);
        addClasses(nav, ["duration-1000", "rotate-12"]);
        addClasses(secretBtn, ["animate-bounce"]);

        setTimeout(() => {
            selected!.style.transform = selectedTranslate;
            selector!.style.transform = selectorTranslate;
            removeClasses(home, ["translate-x-[6000px]"]);
            removeClasses(blog, ["translate-x-[6000px]"]);
            removeClasses(themeBtn, ["translate-y-[6000px]", "rotate-[1800deg]"]);

            setTimeout(() => {
                removeClasses(themeBtn, ["duration-[3000ms]"]);
                removeClasses(home, ["duration-[3500ms]"]);
                removeClasses(blog, ["duration-[4000ms]"]);
                removeClasses(selector, ["duration-[3500ms]"]);
                removeClasses(selected, ["duration-[3000ms]"]);
                addClasses(selected, ["duration-300"]);
                addClasses(selector, ["duration-100"]);
                
                removeClasses(robotBtn, ["animate-spin"]);
            
            }, 1500);

            removeClasses(secretBtn, ["animate-bounce"]);
            removeClasses(nav, ["rotate-12", "duration-1000"]);
            
        }, 2500);
    
    }

    function secretEvent() {
        const secretBtn = document.getElementById("secretBtn") as HTMLAnchorElement;
        setSecretCounter(secretCounter - 1);
        const secretTooltip = document.getElementById("secretTooltip");
        secretTooltip?.classList.remove("scale-0");
        secretTooltip?.classList.add("scale-100");
    
        setTimeout(() => {
            secretTooltip?.classList.remove("scale-100");
            secretTooltip?.classList.add("scale-0");
        }, 1500);

        if (secretCounter === 2) {
            secretTooltip!.classList.add("bg-yellow-500")
            secretTooltip!.classList.remove("bg-neutral-700")
            secretTooltip!.innerHTML = "😤 <br/>Don't you hear me?!"
        }else if (secretCounter === 1) {
            secretTooltip!.classList.add("bg-orange-500")
            secretTooltip!.classList.remove("bg-yellow-500")
            secretTooltip!.innerHTML = "😡 <br/>I AM WARNING YOW!"
        }else if (secretCounter === 0) {
            secretTooltip!.classList.add("bg-red-500")
            secretTooltip!.classList.remove("bg-orange-500")
            secretTooltip!.innerHTML = "🤬 <br/>*&#$%!"
        }else if (secretCounter <= -1) {
            secretBtn!.href  = "https://www.linkedin.com/in/salvador-karakachoff/";
            secretBtn!.target = "_blank";
        }

        console.log(secretCounter);
        if (secretCounter === 0) {
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