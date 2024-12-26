import WorkGalleryMobile from "@/components/works/workGalleryMobile";
import WorkGallery from "@/components/works/workGallery";

interface WorkBlockProps {
    workBlock: WorkBlockType
}

const WorkBlock = ({workBlock}: WorkBlockProps) => {
    return (
        <div className={"mt-14 md:mt-28 mb-14"}>
            <h1 className={"mb-4 text-xl md:hidden"}>{workBlock.title}</h1>
            <WorkGalleryMobile workBlock={workBlock}/>
            <WorkGallery workBlock={workBlock}/>
        </div>
    )
}

export default WorkBlock;