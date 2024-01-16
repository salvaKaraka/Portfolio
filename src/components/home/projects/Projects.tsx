import HomeSectionContainer from "../../sections/HomeSectionContainer";
import ProjectCard from "./project-card/ProjectCard";
import dynamic from 'next/dynamic'

const Robot3DModel = dynamic(() => import('@/../public/models/coherechatbot/Robot3DModel'), { ssr: false })
const Living3DModel = dynamic(() => import('@/../public/models/citybellverde/Living3DModel'), { ssr: false })
const Notepad3DModel = dynamic(() => import('@/../public/models/bgnotes/Notepad3DModel'), { ssr: false })

const PROJECTS = [
    {
        title: "Chatbot - Habla conmigo",
        description:
            "Un chatbot personalizado para responder preguntas acerca de mi trabajo. Desarrollado utilizando la API de Co:Here",
        link: "https://coherechatbot.vercel.app",
        github: "https://github.com/salvaKaraka/cohere-chatbot",
        model: <Robot3DModel />,
        tags: ["Next.js", "React", "TypeScript", "Tailwind", ],
    },
    {
        title: "City Bell Verde - Alquiler de Cabañas",
        description:
            "Creado desde cero utilizando únicamente HTML, CSS, JavaScript y PHP. Con un SEO optimizado y un buen rendimiento.",
        link: "https://citybellverde.com",
        github: "https://github.com/salvaKaraka/CityBellVerde",
        model: <Living3DModel/>,
        shadowPosition: -1.3,
        tags: ["HTML", "CSS", "JavaScript", "PHP"],
    },
    {
        title: "Background Notes - Tus notas como fondo de pantalla",
        description:
            "Desarrollé este sencillo programa en 2021, cuando no era capaz de recordar mis tareas. Hace que mis notas estén siempre presentes en mi fondo de pantalla. No sé si es realmente útil, pero fue divertido hacerlo! :D",
        github: "https://github.com/salvaKaraka/Background_Notes",
        model: <Notepad3DModel />,
        tags: ["Python"],
    },
];

export default function Projects() {
    
    return (
        <HomeSectionContainer title="Projects">

            <div className='grid grid-cols-1 gap-10'>
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