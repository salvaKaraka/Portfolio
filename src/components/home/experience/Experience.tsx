"use client"
import HomeSectionContainer from "../../sections/HomeSectionContainer";
import ExperienceItem from "./ExperienceItem";
import { motion } from "framer-motion"

const EXPERIENCE = [
    {
        title: 'Software Engineer, AI Systems - Kleva',
        date: 'Sep 2025 - Present',
        description: 'Developing production conversational AI solutions for the lending and collections industry. Built the customer-facing analytics dashboard in Next.js and standardized agent development workflows, reducing development time and debugging effort significantly. Led the onboarding and technical mentoring of implementation engineers.',
    },
    {
        title: 'Data Engineer Intern - Club Estudiantes de La Plata',
        date: 'Apr 2025 - Dec 2025',
        description: 'Built an AI-ready data lakehouse unifying 4+ TB of heterogeneous organizational data to support analytics and LLM-powered applications. Developed ETL pipelines to transform and prepare high-volume datasets.',
    },
    {
        title: 'Software Engineer - Consulting Engagement',
        date: 'Jan 2024 - Apr 2025',
        description: 'Designed and built a production conversational SQL agent enabling 3,000+ employees to query HR information through WhatsApp and Slack using LLMs, RAG and FastAPI.',
    },
    {
        title: 'Freelance Web Development',
        date: 'Jan 2022 - Jan 2024',
        description: 'Engaged in freelance web development, designing and building custom web applications with a focus on optimized SEO, performance, and modern UI/UX.',
    }
] 

export default function Experience() {

    return (
        <HomeSectionContainer title="Experience">
                <ol className="relative border-s border-gray-500 dark:border-gray-200 ml-3">                  
    
                    {EXPERIENCE.map((experience, index) => (
                        <li key={index} className="mb-10 ms-4">
                            <ExperienceItem {...experience}/>    
                        </li>
                    ))}

                </ol>
        </HomeSectionContainer>
    )
}


