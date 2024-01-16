import Image from 'next/image'

export default function LanguageButton({onClick}: {onClick: any}){


    return (
        <button onClick={onClick} id="secretBtn" className={`group cursor-grab border backdrop-blur-2xl border-violet-500/30  dark:border-violet-500/40 bg-black/5 dark:bg-white/10 rounded-full px-1 py-1 hover:scale-105 transition-all`}>
            <Image width={44} height={0} className="size-11 object-cover rounded-full group-hover:saturate-50 transition" src="https://media.licdn.com/dms/image/C4D03AQGYL7JFtF0jqw/profile-displayphoto-shrink_200_200/0/1623854942026?e=2147483647&v=beta&t=GQKXz4d5CXjtcyH93g4LUl70PfX-EYiII_H3SqotDw8" alt="Salvador Karakachoff photo"/>
        </button>
    )
}