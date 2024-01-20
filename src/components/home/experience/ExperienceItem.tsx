

interface props {
    title: string;
    description: string;
    link?: string;
    date: string;
}

export default function ExperienceItem ({ title, description, link, date } : props){


    return (
        <>
    <div className="absolute w-3 h-3 dark:bg-gray-200 rounded-full mt-1.5 -start-1.5 border dark:border-white border-gray-900 bg-gray-700">
    </div>
    <time
        className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
        >{date}</time
    >
    <h3 className="text-lg font-semibold text-purple-800/90 dark:text-purple-400/90">
        {title}
    </h3>
    <p className="mb-4 text-base font-normal dark:text-gray-200 text-gray-800">
        {description}
    </p>
    {
        link && (
            <a
            href={link}
            className="border font-semibold border-black/10 bg-black/5 hover:bg-black/10 dark:border-white/5 dark:bg-white/10 dark:hover:bg-white/30 rounded-full
    inline-flex justify-center items-center
    py-1 px-2 md:py-2 md:px-4
    text-xs md:text-base
    transition"
            >See more ↗</a>
        )
    }
    </>
    )
}