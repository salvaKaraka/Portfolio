"use client"
import { useState, type FormEvent, useRef, useEffect } from "react";

// Define el tipo de mensaje
type Message = {
    type: "bot" | "user";
    text: React.ReactNode;
    id: string;
};

const initialMessage = "Hello! I am designed to answer some questions about Salvador. Keep in mind that my responses are pre-defined by Salvador to have greater control over what I say. The purpose of this chat is to respond to FAQs in a fancier way. How can I assist you on this occasion?";
const answers = {
    Introduction:(<p className="text-pretty">Hi, Salvador here. I hope you are doing great!</p>),

    Coding:(<p>Love coding, always have. My first experience was at the age of 10 on an old Windows computer. I stumbled upon a tutorial on YouTube where a guy talked about making web pages. It caught my eye, and since that moment, I&apos;ve been learning new technologies. Although I started with web development, I also have interests in robotics, AI, data science, and more. I understand that I can&apos;t be an expert in all these fields, but I enjoy having some knowledge about them - you never know when it can come in handy.</p>),

    Contact: (<p>You can contact me by sending a direct message on LinkedIn <a target="_blank" rel="noopener noreferrer" href="https://Linkedin.com/in/salvador-karakachoff/" >@Salvador_Karakachoff</a>,
    Instagram <a target="_blank" rel="noopener noreferrer" href="https://Instagram.com/salva_karaka">@Salva_Karaka</a>, or by sending an email to <a target="_blank" rel="noopener noreferrer" href="mailto:salvador.karakachoff@gmail.com">salvador.karakachoff@gmail.com</a>.
    If you want to check out some of my projects, you can visit my GitHub <a target="_blank" rel="noopener noreferrer" href="https://Github.com/salvakaraka">@Salvakaraka</a>.</p>),
    
    Dreams:(<p>I believe that when you tell your dreams to people, they don&apos;t come true. However, I can share that my main priority now is simply being happy.</p>),
    
    Fitness:(<p>I&apos;ve practiced a variety of sports throughout my life, including swimming, boxing, Taekwondo, football, among others. Nowadays, I do rock climbing, and I love it. The sensation of solving a problem and reaching the top of the wall is just fantastic.</p>),

    Foodie:(<p>I love cooking and eating; I would say it&apos;s my second passion, just before computers. When I&apos;m not programming, you&apos;ll find me in the kitchen making various dishes. While I enjoy preparing fancy, elaborate food, my absolute favorite is hamburgers.</p>),

    Movies:(<p>I enjoy movies, but I don&apos;t know much about them. On the other hand, my girlfriend loves movies and often makes me watch with her. I really enjoy it; the last movie we saw was &quot;Grand Turismo&quot;, and it was great!</p>),

    Music:(<p>Music is the soundtrack of life! I often listen to Eminem&apos;s songs, but my musical taste is diverse. I enjoy Argentine Rock, Pop, Cuarteto, and more.</p>),

    PersonalLife:(<p>Life is good, fortunately. I strive to keep up with studies and work harder every day. To maintain a clear mind, I play video games and engage in exercise - it helps me a lot. Balance is crucial, and I believe I&apos;ve found it.</p>),

    Travel:(<p>Haven&apos;t traveled a lot yet, but I would love to explore the world one day! My first destination would be Italy.</p>),

    Projects:(<p>I&apos;m currently working on two main projects. I can&apos;t reveal them yet, but both involve large databases and lots of backend development. Nonetheless, you can check out my latest projects on GitHub <a target="_blank" rel="noopener noreferrer" href="https://Github.com/salvakaraka">@Salvakaraka</a>.</p>),

    Work:(<p>I work as IT Support at &quot;Facultad de Ingenieria - Universidad Nacional de La Plata&quot;. Providing technical support to the entire administrative and teaching staff of the faculty involves implementing, maintaining, and configuring telephone and internet networks with over 2000 devices. Alongside this, I handle the repair of computers and electronic devices. <br/> Addressing each unique problem demands improvisation and on-the-fly learning, all while maintaining a professional approach.</p>),

    Goodbye: (<p>Even though it&apos;s not really me, I&apos;m sure it would have been a pleasure chatting with you. I hope you stay well. Goodbye!</p>),

    Unknown:(<p>As a bot, there are questions I&apos;m not prepared to answer. If it&apos;s important, feel free to reach out on my social media.</p>),
    
    Default:(<p>Sorry, I didn&apos;t understand the question. Please rephrase it for me.</p>),
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
                aria-label="Open chatbot"
                    id="robotBtn"
                    className={`group border backdrop-blur-2xl border-violet-500/30  dark:border-violet-500/40 bg-black/5 dark:bg-white/10 rounded-full p-1 absolute right-1 bottom-1 hover:scale-105 transition-all`}
                    onClick={() => toggleCollapsed(false)}
                >    
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-16 rounded-full group-hover:bg-black/10 dark:group-hover:bg-white/30 p-1 transition icon icon-tabler icon-tabler-robot" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M12 2v2" /><path d="M9 12v9" /><path d="M15 12v9" /><path d="M5 16l4 -2" /><path d="M15 14l4 2" /><path d="M9 18h6" /><path d="M10 8v.01" /><path d="M14 8v.01" /></svg>   
                </button>
            ) : (
                <div>
                    <button aria-label="Close chatbot" className={`group border backdrop-blur-2xl border-violet-500/30  dark:border-violet-500/40 bg-black/5 dark:bg-white/10 rounded-full absolute -top-2 -left-2 cursor-pointer p-1 z-10 hover:scale-105 transition-all`} 
                    onClick={() => toggleCollapsed(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 rounded-full group-hover:bg-black/10 dark:group-hover:bg-white/30 p-[2px] transition icon icon-tabler icon-tabler-x" width="15" height="15" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </button>
                    <div className={`border backdrop-blur-2xl flex flex-col gap-4 max-w-xl m-auto rounded-md p-6 pr-1 
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