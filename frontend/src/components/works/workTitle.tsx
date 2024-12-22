import useCursorHandlers from "@/hooks/useCursorHandlers";

interface WorkTitleProps {
    title: string;
}

const WorkTitle = ({title}: WorkTitleProps) => {

    const cursorHandlers = useCursorHandlers();

    return (
        <div
            className={"border border-text md:border-0 text-lg py-2 md:py-4 flex flex-row duration-500 ease-in-out bg-gradient-to-r from-text from-50% to-background to-50% bg-[length:200%_100%] bg-right hover:bg-left hover:text-background overflow-hidden"}
            {...cursorHandlers}
        >
            {[...Array(5)].map((_, index) => (
                <h1 key={index} className={"flex-shrink-0 animate-slideLeft"}>{title} -&nbsp;</h1>
            ))}
        </div>
    )
}

export default WorkTitle;