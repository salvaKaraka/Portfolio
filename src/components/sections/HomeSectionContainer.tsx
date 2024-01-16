import SectionContainer from "./SectionContainer";

type props = {
    title: string;
    children: React.ReactNode;
};

export default function Projects({title, children}: props) {
    
    return (
        <SectionContainer className="divide-slate-300 my-10 dark:divide-neutral-700">
            <div className="flex flex-row items-center justify-evenly mb-14">
                <hr className="w-1/2 my-4 border-gray-900 dark:border-gray-100" />
                <h1 className="text-6xl font-medium text-gray-900 dark:text-gray-100">
                    {title}
                </h1>
            </div>
            
            {children}

        </SectionContainer>
    )
}