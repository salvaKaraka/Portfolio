import { primaryStyle } from "@/styles/styles";

type props = {
    onClick: any;
    className?: string;
    svg?: any;
}

export default function IconButton({onClick, className, svg}: props) {
    return (
        <button
        className={`${primaryStyle} className`}
        onClick={onClick}
    >   
    <span className="size-0 rounded-full hover:size-9 hover:bg-black/10 dark:hover:bg-white/30 p-1 transition-all duration-500>" >
        {svg}   
    </span>
    </button>
    )

}