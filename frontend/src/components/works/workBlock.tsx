import Work from "@/components/works/work";

interface WorkBlockProps {
    workBlock: WorkBlockType
}

const WorkBlock = ({workBlock}: WorkBlockProps) => {
    return (
        <div className={"mt-14 md:mt-28 mb-6"}>
            <h1 className={"mb-4 text-xl md:text-2xl lg:text-3xl"}>{workBlock.title}</h1>
            {workBlock.works.map((work: WorkType, index) => (
                <Work key={index} work={work}/>
            ))}
        </div>
    )
}

export default WorkBlock;