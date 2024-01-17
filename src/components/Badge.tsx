
type props = {
    text: string;
}

export default function Badge({text}:props){
return(
    <span
    className="dark:bg-green-100 bg-green-200 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded hover:bg-green-900 dark:hover:bg-green-900 hover:text-green-300 transition"
>
    {text}
</span>
)
}