import HomeSectionContainer from "../../sections/HomeSectionContainer";
import ProjectCard from "./project-card/ProjectCard";
import ProjectCard2 from "./project-card/ProjectCard2";
import dynamic from 'next/dynamic'

const Living3DModel = dynamic(() => import('@/../public/models/citybellverde/Living3DModel'), { ssr: false })
const Sphere3DModel = dynamic(() => import('@/../public/models/particle_simulation/Sphere3DModel'), { ssr: false })

const PROJECTS = [
    {
        title: "Particle simulation - Interactions between particles and with the environment",
        description:
            "My goal with this project was learning OpenGL basics. I used C++ to create a particle simulation",
        link: "https://salvadorkarakachoff.com/blog/Particle-simulation",
        model: <Sphere3DModel />,
        tags: ["C++","OpenGL"],
    },
    {
        title: "City Bell Verde - Cabin Rental",
        description:
            "Built from scratch using only HTML, CSS, JavaScript, and PHP. Featuring optimized SEO and excellent performance.",
        link: "https://citybellverde.com",
        model: <Living3DModel/>,
        shadowPosition: -1.3,
        tags: ["HTML", "CSS", "JavaScript", "PHP"],
    }, 
];

const PROJECTS_2 = [
    {
        title: "Personal Chatbot - Chat with Me",
        description:
            "A personalized chatbot to answer questions about my job. Developed using the Co:Here sorting API",
        link: "https://chatbot.salvadorkarakachoff.com",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS","Cohere's API" ],
    },
    {
        title: "QR Generator - Generate QR codes for your links", 
        description:
            "A simple way to generate QR codes for your links and download them as PNG images.",
        link: "https://qr.salvadorkarakachoff.com",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", ],
    },
];

export default function Projects() {
    
    return (
        <HomeSectionContainer title="Projects">

            <div className='flex flex-col gap-5 mt-16'>
                {PROJECTS.map(({ title, description, link, model, shadowPosition, tags }, index) => (
                    
                    <ProjectCard
                        key={index}
                        title={title}
                        description={description}
                        link={link}
                        model={model}
                        shadowPosition={shadowPosition? [0,shadowPosition,0] : [0,-2.5,0]}
                        tags={tags}
                    />

                    ))}
            </div>
            
            <div className='flex flex-col md:flex-row gap-5 mt-5'>
                {PROJECTS_2.map(({ title, description, link, tags }, index) => (
                    
                    <ProjectCard2
                        key={index}
                        title={title}
                        description={description}
                        link={link}
                        tags={tags}
                    />

                    ))}
            </div>

        </HomeSectionContainer>
    )
}