import SectionContainer from "../sections/SectionContainer";

export default function Introduction() {
    return (
        <SectionContainer>
        <div className=" my-10 grid grid-cols-2 items-center justify-center">
        <div className='flex flex-col justify-center items-center text-center md:text-right'>
          <h1 className=" text-6xl lg:text-8xl font-medium text-gray-900 dark:text-gray-100">
            <span>Salvador</span> 
            <br />
            <span className="text-neutral-400">Karakachoff</span>
          </h1>
          <p className=" mt-5 text-gray-900 dark:text-gray-100 max-w-[90%]">
            I'm a software developer from Argentina. I'm currently studying Computer Science at the University of Buenos Aires.
            I'm interested in web development, machine learning and computer graphics.
          </p>
        </div>
          <img className=" hidden w-[20rem] md:block lg:w-96 h-auto rounded-lg" alt="Salvador Karakachoff" src='/images/salvador_karakachoff.jpg' />
          </div>
      </SectionContainer>
    )
}