import HomeSectionContainer from "../../sections/HomeSectionContainer";
import ProjectCard from "./project-card/ProjectCard";
import dynamic from 'next/dynamic'

const Robot3DModel = dynamic(() => import('@/../public/models/coherechatbot/Robot3DModel'), { ssr: false })
const Living3DModel = dynamic(() => import('@/../public/models/citybellverde/Living3DModel'), { ssr: false })
const Notepad3DModel = dynamic(() => import('@/../public/models/bgnotes/Notepad3DModel'), { ssr: false })

const PROJECTS = [
    {
        title: "Personal Chatbot - Chat with Me",
        description:
            "A personalized chatbot to answer questions about my job. Developed using the Co:Here sorting API",
        link: "https://coherechatbot.vercel.app",
        github: "https://github.com/salvaKaraka/cohere-chatbot",
        model: <Robot3DModel />,
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", ],
    },
    {
        title: "City Bell Verde - Cabin Rental",
        description:
            "Built from scratch using only HTML, CSS, JavaScript, and PHP. Featuring optimized SEO and excellent performance.",
        link: "https://citybellverde.com",
        github: "https://github.com/salvaKaraka/CityBellVerde",
        model: <Living3DModel/>,
        shadowPosition: -1.3,
        tags: ["HTML", "CSS", "JavaScript", "PHP"],
    },
  /*  {
        title: "Background Notes - Tus notas como fondo de pantalla",
        description:
            "Desarrollé este sencillo programa en 2021, cuando no era capaz de recordar mis tareas. Hace que mis notas estén siempre presentes en mi fondo de pantalla. No sé si es realmente útil, pero fue divertido hacerlo! :D",
        github: "https://github.com/salvaKaraka/Background_Notes",
        model: <Notepad3DModel />,
        tags: ["Python"],
    }, */
];

export default function Projects() {
    
    return (
        <HomeSectionContainer title="Projects">

            <div className='flex flex-col gap-5 mt-16'>
                {PROJECTS.map(({ title, description, link, github, model, shadowPosition, tags }, index) => (
                    
                    <ProjectCard
                        key={index}
                        title={title}
                        description={description}
                        link={link}
                        github={github}
                        model={model}
                        shadowPosition={shadowPosition? [0,shadowPosition,0] : [0,-2.5,0]}
                        tags={tags}
                    />

                    ))}
            </div>

        </HomeSectionContainer>
    )
}