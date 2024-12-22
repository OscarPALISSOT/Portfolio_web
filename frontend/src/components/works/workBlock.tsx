import Work from "@/components/works/work";
import WorkGalleryMobile from "@/components/works/workGalleryMobile";

interface WorkBlockProps {
    workBlock: WorkBlockType
}

const WorkBlock = ({workBlock}: WorkBlockProps) => {
    return (
        <div className={"mt-14 md:mt-28 mb-6"}>
            <h1 className={"mb-4 text-xl md:text-2xl lg:text-3xl"}>{workBlock.title}</h1>
            <WorkGalleryMobile works={workBlock.works}/>
        </div>
    )
}

export default WorkBlock;