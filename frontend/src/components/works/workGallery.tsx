'use client';

import Work from "@/components/works/work";
import {useEffect, useRef} from "react";
import CvButton from "@/components/works/cvButton";

interface WorkGalleryProps {
    workBlock: WorkBlockType
}

const WorkGallery = ({workBlock}:WorkGalleryProps) => {

    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const rightWorksRef = useRef<HTMLDivElement>(null);
    const evenWorks = workBlock.works.filter((_, index) => index % 2 === 0);
    const oddWorks = workBlock.works.filter((_, index) => index % 2 !== 0);

    useEffect(() => {
        if (titleRef.current && descriptionRef.current) {
            titleRef.current.style.height = (Math.round(titleRef.current.clientWidth * 9 / 16) + 60) +  'px';
            descriptionRef.current.style.height = (Math.round(titleRef.current.clientWidth * 9 / 16) + 60) +  'px';
        }
    }, []);

    useEffect(() => {
        const handleScrolling = () => {
            const workGallery = document.getElementById("workGallery");
            if (workGallery && titleRef.current) {
                const rect = workGallery.getBoundingClientRect();
                const workHeight = (Math.round(titleRef.current.clientWidth * 9 / 16) + 60);
                const scrollProgress = (workGallery.clientHeight - (rect.bottom - (window.innerHeight / 3))) / workGallery.clientHeight;
                if (rect.top <= window.innerHeight / 3 && rightWorksRef.current) {
                    rightWorksRef.current.style.transform = `translate3d(0, ${-workHeight * scrollProgress +  'px'}, 0)`;
                } else if (rightWorksRef.current){
                    rightWorksRef.current.style.transform = `translate3d(0, 0, 0)`;
                }
            }
        }
        window.addEventListener("scroll", handleScrolling);
        handleScrolling();

        return () => {
            window.removeEventListener("scroll", handleScrolling);
        };
    }, []);

    return (
        <div className={"hidden md:flex flex-row"} id={"workGallery"}>
            <div className={"w-1/2"}>
                <div className={"m-0 w-full overflow-hidden border-b border-transparent flex items-center justify-center"} ref={titleRef}>
                    <h1 className={"mb-4 text-2xl lg:text-3xl"}>{workBlock.title}</h1>
                </div>
                {oddWorks.map((work: WorkType, index) => (
                    <Work key={index} work={work} isOdd={true} isFirst={index === 0} isLast={index === oddWorks.length - 1 && workBlock.works.length % 2 === 0}/>
                ))}
            </div>
            <div className={"w-1/2"} ref={rightWorksRef}>
                {evenWorks.map((work: WorkType, index) => (
                    <Work key={index} work={work} isFirst={index === 0}/>
                ))}
                <div className={"w-full px-5 border border-text border-t-0 flex flex-col items-center justify-evenly"} ref={descriptionRef}>
                    <p className={"text-sm lg:text-lg font-extralight"}>{workBlock.description}</p>
                    <CvButton cvLink={workBlock.cv}/>
                </div>
            </div>
        </div>
    )
}

export default WorkGallery;