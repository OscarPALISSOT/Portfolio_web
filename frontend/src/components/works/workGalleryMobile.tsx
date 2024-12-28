import Work from "@/components/works/work";
import CvButton from "@/components/works/cvButton";
import WorkType from "@/types/workType";
import WorkBlockType from "@/types/workBlockType";

interface WorkGalleryMobileProps {
    workBlock: WorkBlockType;
}

const WorkGalleryMobile = ({workBlock}:WorkGalleryMobileProps) => {
    return (
        <div className={"md:hidden"}>
            {workBlock.works.map((work: WorkType, index) => (
                <Work key={index} work={work}/>
            ))}
            <div className={'mt-6 flex flex-col gap-6 items-center'}>
                <p className={"text-base font-extralight"}>{workBlock.description}</p>
                <CvButton cvLink={workBlock.description}/>
            </div>
        </div>
    )
}

export default WorkGalleryMobile;