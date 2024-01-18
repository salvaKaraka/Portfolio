import HomeSectionContainer from "../../sections/HomeSectionContainer";
import ExperienceItem from "./ExperienceItem";

const EXPERIENCE = [
    {
        title: 'IT Support - Faculty of Engineering, National University of La Plata',
        date: '2022 - Now',
        description: 'Providing technical support to the entire administrative and teaching staff of the faculty involves implementing, maintaining, and configuring telephone and internet networks with over 2000 devices. Alongside this, I handle the repair of computers and electronic devices. Addressing each unique problem demands improvisation and on-the-fly learning, all while maintaining a professional approach.',
    },
    {
        title: 'Private Tutor',
        date: '2021 - Now',
        description: 'Offering private lessons to students across various academic levels, I specialize in mathematics, English, and computer science. This experience has significantly enhanced not only my communication and teaching skills but also my understanding of diverse learning needs.',
    },
    {
        title: 'Web Development - Freelance',
        date: '2016 - Now',
        description: 'Engaged in freelance web development, I am responsible for designing and developing web applications. Examples of my work can be explored on my GitHub or in the projects section, showcasing a range of projects and technical capabilities.',
        link: "https://github.com/salvaKaraka"
    }
] 



export default function Experience() {

    return (
        <HomeSectionContainer title="Experience">
                <ol className="relative border-s border-gray-500 dark:border-gray-200 ml-3">                  
    
                    {EXPERIENCE.map(experience => (
                        <li className="mb-10 ms-4">
                            <ExperienceItem {...experience}/>    
                        </li>
                    ))}

                </ol>
        </HomeSectionContainer>
    )
}


