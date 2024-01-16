import SectionContainer from "../sections/SectionContainer";
import Image from 'next/image';

export default function Introduction() {
  return (
    <SectionContainer>
      <div className="flex flex-col my-10 items-center justify-center">
        <div className='flex gap-10 justify-center items-center'>
        <Image placeholder="blur" blurDataURL="/images/salvador_karakachoff.jpg" width={350} height={350} className=" hidden md:block rounded-xl" alt="Salvador Karakachoff" src='/images/salvador_karakachoff.jpg' />
          <h1 className=" text-6xl lg:text-8xl font-medium text-gray-900 dark:text-gray-100">
            <span>Salvador</span>
            <br />
            <span className="text-neutral-400">Karakachoff</span>
          </h1>
        </div>
        <p className="text-lg font-semibold text-pretty mt-5 text-gray-900 dark:text-gray-100 max-w-[90%]">
          I&apos;m a software developer from Argentina. I&apos;m currently studying Computer Science at the University of Buenos Aires.
          I&apos;m interested in web development, machine learning and computer graphics.
        </p>
      </div>
    </SectionContainer>
  )
}