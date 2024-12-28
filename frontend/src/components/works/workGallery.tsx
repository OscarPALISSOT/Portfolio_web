'use client';

import Work from "@/components/works/work";
import {useEffect, useRef} from "react";
import CvButton from "@/components/works/cvButton";
import WorkBlockType from "@/types/workBlockType";
import WorkType from "@/types/workType";

interface WorkGalleryProps {
    workBlock: WorkBlockType;
}

const WorkGallery = ({workBlock}:WorkGalleryProps) => {

    const workGalleryRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const leftWorksRef = useRef<HTMLDivElement>(null);
    const rightWorksRef = useRef<HTMLDivElement>(null);
    const borderRef = useRef<HTMLDivElement>(null);
    const evenWorks = workBlock.works.filter((_, index) => index % 2 === 0);
    const oddWorks = workBlock.works.filter((_, index) => index % 2 !== 0);

    useEffect(() => {
        if (titleRef.current && descriptionRef.current && borderRef.current) {
            titleRef.current.style.height = (Math.round(titleRef.current.clientWidth * 9 / 16) + 60) + 1 + 'px';
            descriptionRef.current.style.height = (Math.round(titleRef.current.clientWidth * 9 / 16) + 60) +  'px';
            borderRef.current.style.height = (Math.round(titleRef.current.clientWidth * 9 / 16) + 60) +  'px';
        }
        if (leftWorksRef.current && workGalleryRef.current){
            workGalleryRef.current.style.height = leftWorksRef.current.clientHeight + 'px';
        }
    }, []);

    useEffect(() => {
        const handleScrolling = () => {
            if (workGalleryRef.current && titleRef.current && leftWorksRef.current) {
                const rect = workGalleryRef.current.getBoundingClientRect();
                const workHeight = (Math.round(titleRef.current.clientWidth * 9 / 16) + 60);
                const scrollProgress = Math.min(1, Math.max(0, (workGalleryRef.current.clientHeight - (rect.bottom - (window.innerHeight / 3))) / workGalleryRef.current.clientHeight));
                if (rightWorksRef.current) {
                    rightWorksRef.current.style.transform = `translate3d(0, ${-workHeight * scrollProgress +  'px'}, 0)`;
                }
                workGalleryRef.current.style.paddingTop = `${workHeight * scrollProgress +  'px'}`;
                workGalleryRef.current.style.height = leftWorksRef.current.clientHeight + (workHeight * scrollProgress) + 'px';
            }
        }
        window.addEventListener("scroll", handleScrolling);
        handleScrolling();

        return () => {
            window.removeEventListener("scroll", handleScrolling);
        };
    }, []);

    return (
        <div className={"hidden md:flex flex-row overflow-hidden"} ref={workGalleryRef}>
            <div className={"w-1/2 h-fit"} ref={leftWorksRef}>
                <div className={"m-0 w-full overflow-hidden border-b border-transparent flex items-center justify-center"} ref={titleRef}>
                    <h1 className={"mb-4 text-2xl lg:text-3xl"}>{workBlock.title}</h1>
                </div>
                {oddWorks.map((work: WorkType, index) => (
                    <Work key={index} work={work} isOdd={true} isFirst={index === 0} isLast={index === oddWorks.length}/>
                ))}
            </div>
            <div className={"w-1/2"} ref={rightWorksRef}>
                {evenWorks.map((work: WorkType, index) => (
                    <Work key={index} work={work} isFirst={index === 0}/>
                ))}
                <div className={"w-full px-5 border border-background dark:border-text border-t-0 flex flex-col items-center justify-evenly"} ref={descriptionRef}>
                    <p className={"text-sm lg:text-lg font-extralight"}>{workBlock.description}</p>
                    <CvButton cvLink={workBlock.cv}/>
                </div>
                <div className={'border-l border-background dark:border-text'} ref={borderRef}/>
            </div>
        </div>
    )
}

export default WorkGallery;