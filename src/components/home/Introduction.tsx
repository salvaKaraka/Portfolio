import SectionContainer from "../sections/SectionContainer";

export default function Introduction() {
    return (
        <SectionContainer>
        <div className='flex flex-col md:flex-row mx-auto gap-10 my-8 justify-center items-center'>
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-medium text-center md:text-right text-gray-900 dark:text-gray-100">
            <span>Salvador</span> 
            <br />
            <span className="text-neutral-400">Karakachoff</span>
          </h1>
          <img className=" hidden w-[20rem] md:block lg:w-96 h-auto rounded-lg" alt="Salvador Karakachoff" src='/images/salvador_karakachoff.jpg' />
        </div>
      </SectionContainer>
    )
}