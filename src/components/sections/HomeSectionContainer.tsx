import SectionContainer from "./SectionContainer";

type props = {
    title: string;
    children: React.ReactNode;
};

export default function Projects({title, children}: props) {
    
    return (
        <SectionContainer className="divide-neutral-700 my-5 md:my-20">
            <div className="flex flex-row items-center justify-evenly mb-14">
                <hr className="block w-1/2 my-4 border-neutral-700" />
                <h1 className="text-3xl md:text-5xl font-medium text-gray-900 dark:text-gray-100">
                    {title}
                </h1>
            </div>
            
            {children}

        </SectionContainer>
    )
}