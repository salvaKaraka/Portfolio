"use client"
import HomeSectionContainer from "../../sections/HomeSectionContainer";
import ProjectCard from "./project-card/ProjectCard";
import dynamic from 'next/dynamic'
import { motion } from "framer-motion"

const Sphere3DModel = dynamic(() => import('@/../public/models/particle_simulation/Sphere3DModel'), { ssr: false })
const Robot3DModel = dynamic(() => import('@/../public/models/meinlup/Robot3DModel'), { ssr: false })
const F1Car3DModel = dynamic(() => import('@/../public/models/f1/F1Car3DModel'), { ssr: false })

const PROJECTS = [
    {
        title: "Meinlup - AI Receptionist Platform",
        description:
            "Multi-tenant platform to operate custom omnichannel AI agents.",
        link: "https://meinlup.com",
        model: <Robot3DModel />,
        tags: ["Next.js", "LiveKit", "FastAPI", "Supabase"],
    },
    {
        title: "Formula 1 Machine Learning", 
        description:
            "Trained predictive models on historical F1 data, achieving ~90% accuracy.",
        link: "https://www.linkedin.com/in/salvador-karakachoff/overlay/Project/1814680863/treasury/?profileId=ACoAADZMpuoByscXbQmgV0i8abW8pvTlVLLWQCU&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B1yjVArXITrmESH4LN9gpUg%3D%3D",
        model: <F1Car3DModel />,
        tags: ["Python", "Machine Learning"],
    },
    {
        title: "Particle simulation - Interactions between particles and with the environment",
        description:
            "My goal with this project was learning OpenGL basics. I used C++ to create a particle simulation",
        link: "https://salvadorkarakachoff.com/blog/Particle-simulation",
        model: <Sphere3DModel />,
        tags: ["C++","OpenGL"],
    },
];

export default function Projects() {
    
    return (
        <HomeSectionContainer title="Featured projects">

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className='flex flex-col gap-5 mt-16'
            >
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
            </motion.div>

        </HomeSectionContainer>
    )
}