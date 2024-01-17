import Image from 'next/image'

export default function SecretButton({onClick}: {onClick: any}){


    return (
        <a href="javascript:void(0)" rel="noopener noreferrer" onClick={onClick} id="secretBtn" className={`group hidden xs:block cursor-pointer border backdrop-blur-2xl border-violet-500/30  dark:border-violet-500/40 bg-black/5 dark:bg-white/10 rounded-full px-1 py-1 hover:scale-105 transition-all`}>
            <Image priority={true} width={44} height={44} className="size-11 object-cover rounded-full group-hover:saturate-50 transition" src="https://media.licdn.com/dms/image/C4D03AQGYL7JFtF0jqw/profile-displayphoto-shrink_200_200/0/1623854942026?e=2147483647&v=beta&t=GQKXz4d5CXjtcyH93g4LUl70PfX-EYiII_H3SqotDw8" alt="Salvador Karakachoff photo"/>
                <p id="secretTooltip" className="absolute text-center inline-block w-20 sm:w-32 dark:text-white/90 text-black/90 text-xs font-semibold bg-neutral-700 border border-neutral-800 scale-0 rounded-xl rounded-tl-none sm:rounded-tl-xl sm:rounded-tr-none px-3 py-2 z-10 translate-x-4 sm:translate-x-[-120px] sm:translate-y-[-15px] transition-all">😠 <br/>Don't do that!</p>
        </a>
    )
}