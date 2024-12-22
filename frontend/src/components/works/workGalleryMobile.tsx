import Work from "@/components/works/work";

interface WorkGalleryMobileProps {
    works: WorkType[];
}

const WorkGalleryMobile = ({works}:WorkGalleryMobileProps) => {
    return (
        <div className={"md:hidden"}>
            {works.map((work: WorkType, index) => (
                <Work key={index} work={work}/>
            ))}
        </div>
    )
}

export default WorkGalleryMobile;