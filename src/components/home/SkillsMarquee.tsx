"use client"
import React from 'react'
import { motion } from 'framer-motion'

const SKILLS = [
  "Next.js", "React", "TypeScript", "Python", "FastAPI", "LiveKit", "PostgreSQL", 
  "Tailwind CSS", "Three.js", "C++", "OpenGL", "Git", "Docker"
];

export default function SkillsMarquee() {
  return (
    <div className="w-full overflow-hidden py-2 relative flex flex-col items-center">
      
      <div className="flex w-[200%] md:w-[150%] xl:w-[120%] animate-marquee">
        {/* We render the list twice to create the infinite loop effect */}
        {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 mx-4 md:mx-8 text-sm font-medium text-neutral-400 dark:text-neutral-600 transition-colors hover:text-orange-500"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}
