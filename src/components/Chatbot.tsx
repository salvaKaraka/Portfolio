"use client"

import { useState, type FormEvent, useRef, useEffect } from "react";
import { primaryStyle } from "@/styles/styles";

// Define el tipo de mensaje
type Message = {
    type: "bot" | "user";
    text: React.ReactNode;
    id: string;
};

const initialMessage="¡Hola! Estoy diseñado para responer algunas preguntas acerca de Salvador ¿Cómo puedo ayudarte en esta ocasión?";
const answers = {
    Introduction:(<p className="text-pretty">Hola, Soy Salvador! Tengo mas de 5 años de experiencia como desarrollador Web y mas de 2 como Soporte IT.
    Ademas de hacer web apps me gusta programar en Java, C, C++, Python, C#, entre otros lenguajes.
    Soy un estudiante avanzado en las carreras de Ingeniería en Computación y Data Science en la UNLP.
    Me recibí como Técnico Electrónico en 2021. Actualmente vivo en La Plata, Argentina.</p>),

    Contact:(<p>Podes contactarme enviandome un mensaje directo por LinkedIn <a target="_blank" rel="noopener noreferrer" href="https://Linkedin.com/in/salvador-karakachoff/" >@Salvador_Karakachoff</a>,
     Instagram <a target="_blank" rel="noopener noreferrer" href="https://Instagram.com/salva_karaka">@Salva_Karaka</a> o enviandome un correo electronico a <a target="_blank" rel="noopener noreferrer" href="mailto:salvador.karakachoff@gmail.com">salvador.karakachoff@gmail.com</a>.
     Si queres ver algunos de mis proyectos podes visitar mi GitHub <a target="_blank" rel="noopener noreferrer" href="https://Github.com/salvakaraka">@Salvakaraka</a>.</p>),
    
    Unknown:(<p>Como soy un bot hay preguntas que no estoy preparado para responder, si te resulta importante que te conteste podes escribirme por alguna de mis redes.</p>),
    Default:(<p>Lo siento, no entendi la pregunta, por favor reformulala.</p>),
};

function Chatbot() {

    const [messages, setMessages] = useState<Message[]>(() => initialMessage ? [
        {
            id: "1",
            type: "bot",
            text: initialMessage,
        },
    ] : []);

    // Estado y funciones para el formulario
    const [question, setQuestion] = useState<string>("");
    const [isLoading, toggleLoading] = useState<boolean>(false);
    const [isCollapsed, toggleCollapsed] = useState<boolean>(true)
    const container = useRef<HTMLDivElement>(null);

    // Maneja el envío del formulario
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (isLoading) return;

        toggleLoading(true);
        setMessages((messages) =>
            messages.concat({ id: String(Date.now()), type: "user", text: question })
        );
        setQuestion("");

        const cohereResponse = await fetch("/api/chatbot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                question: question,
            }),
        });

        const classifications = await cohereResponse.json();




        setMessages((messages) =>
            messages.concat({ id: String(Date.now()), type: "bot", text: answers[classifications[0].prediction as keyof typeof answers] || answers.Default })
        );

        toggleLoading(false);
        console.log(classifications);
    }

    // Hace que la scrollbar se mantenga abajo del todo cuando llegan nuevos mensajes
    useEffect(() => {
        if (container.current) {
            container.current.scrollTop = container.current.scrollHeight;
        }
    }, [messages, isCollapsed]);

    // Renderiza el componente
    return (
        <div id="chatbot" className="fixed bottom-4 right-4 max-w-[90%] w-[400px] z-10 text-black/90 dark:text-white/90">
            {isCollapsed ? (
                <button
                    className={`${primaryStyle} rounded-full p-1 absolute right-1 bottom-1 hover:scale-105 transition-all`}
                    onClick={() => toggleCollapsed(false)}
                >    
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-9 rounded-full hover:bg-black/10 dark:hover:bg-white/30 p-1 transition icon icon-tabler icon-tabler-robot" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M12 2v2" /><path d="M9 12v9" /><path d="M15 12v9" /><path d="M5 16l4 -2" /><path d="M15 14l4 2" /><path d="M9 18h6" /><path d="M10 8v.01" /><path d="M14 8v.01" /></svg>   
                </button>
            ) : (
                <div>
                    <button className={`${primaryStyle} rounded-full absolute -top-2 -left-2 cursor-pointer p-1 z-10 hover:scale-105 transition-all`} 
                    onClick={() => toggleCollapsed(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 rounded-full hover:bg-black/10 dark:hover:bg-white/30 p-[2px] transition icon icon-tabler icon-tabler-x" width="15" height="15" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </button>
                    <div className={`${primaryStyle} flex flex-col gap-4 max-w-xl m-auto border rounded-md p-6 pr-1 
                         border-violet-500/30  dark:border-violet-500/40 bg-black/5 dark:bg-white/10`}>
                        <div ref={container} className="flex flex-col gap-4 h-[50vh] overflow-y-auto ">
                            {messages.map(({ id, text, type }) => (
                                <div
                                    key={id}
                                    className={`rounded-xl p-2 mr-5 max-w-[80%] border border-black/10 dark:border-white/10 ${type === "bot"
                                        ? "bg-black/20 dark:bg-white/10 rounded-bl-none text-left self-start"
                                        : "bg-violet-500/50 dark:bg-violet-500 rounded-br-none text-right self-end"
                                        }`}
                                >
                                    {text}
                                </div>
                            ))}
                        </div>
                        <form
                            className="flex flex-row items-center mt-4 mr-5"
                            onSubmit={handleSubmit}
                        >
                            <input
                                required
                                value={question}
                                onChange={(event) => setQuestion(event.target.value)}
                                type="text"
                                className="outline-none flex-1 w-full rounded-l-md border border-violet-500/50 dark:border-violet-500 bg-black/10 dark:bg-white/10 focus:bg-black/5 focus:dark:bg-white/20 px-4 py-2"
                                placeholder="Preguntame algo..."
                                name="question"
                            />
                            <button
                                disabled={isLoading}
                                type="submit"
                                className={`rounded-r-md border border-violet-500/50 dark:border-violet-500 hover:border-violet-300 hover:dark:border-violet-700 px-4 py-2 font-bold ${isLoading ? "bg-black/10 dark:bg-white/10 cursor-wait" : "bg-violet-500/50 dark:bg-violet-500 hover:bg-violet-300 hover:dark:bg-violet-700 cursor-pointer"
                                    }`}
                            >
                                {isLoading ? <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin icon icon-tabler icon-tabler-robot" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M12 2v2" /><path d="M9 12v9" /><path d="M15 12v9" /><path d="M5 16l4 -2" /><path d="M15 14l4 2" /><path d="M9 18h6" /><path d="M10 8v.01" /><path d="M14 8v.01" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-robot" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M12 2v2" /><path d="M9 12v9" /><path d="M15 12v9" /><path d="M5 16l4 -2" /><path d="M15 14l4 2" /><path d="M9 18h6" /><path d="M10 8v.01" /><path d="M14 8v.01" /></svg>}
                            </button>
                        </form>
                    </div>
                </div>)}
        </div>);;
};

export default Chatbot;