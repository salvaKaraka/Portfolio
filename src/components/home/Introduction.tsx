import Badge from "../Badge";
import SectionContainer from "../sections/SectionContainer";
import Image from 'next/image';

export default function Introduction() {
  return (
    <SectionContainer className="flex justify-center mt-20 mb-14">
      <div>
      <h1
				className="max-w-[700px]text-2xl md:text-3xl lg:text-5xl font-bold lg:gap-x-4 gap-x-2 pb-4 lg:pb-6 flex flex-wrap"
			>
				Hola, Soy Salvador! <a
					href="https://linkedin.com/in/salvador-karakachoff/"
					target="_blank"
					rel="noopener"
					className="flex justify-center items-center"
				>
					<Badge text="Disponible para trabajar"/></a
				>
			</h1>
			<h2 className="text-xl lg:text-2xl opacity-90 max-w-[700px]">
				<span className="text-purple-800/90 dark:text-purple-400/90">
					Desarrollador Web y Soporte IT</span
				>. Estudiante avanzado en las carreras de <span className="text-blue-800/90 dark:text-blue-400/90"
					>Ingeniería en Computación</span
				> y <span className="text-blue-800/90 dark:text-blue-400/90">Data Science</span>,
				recibido de <span className="text-blue-800/90 dark:text-blue-400/90"
					>Técnico Electrónico</span
				>.<br /><span> La Plata</span>,
				<span className="rounded-full bg-blue-900/70 px-2">
				<span className="text-blue-300/90">Ar</span><span className="text-white">ge</span><span
					className="text-yellow-300/90">n</span
				><span className="text-white">ti</span><span className="text-blue-300/90">na</span></span>.
			</h2>
      </div>
      <img src="https://avatars.githubusercontent.com/u/100873582?v=4" alt="Salvador Karakachoff" className="rounded-full w-40 h-40" />
    </SectionContainer>
  )
}