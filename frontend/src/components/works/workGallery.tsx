'use client';

import Work from "@/components/works/work";
import {useEffect, useRef, useState} from "react";
import CvButton from "@/components/works/cvButton";
import WorkBlockType from "@/types/workBlockType";
import WorkType from "@/types/workType";
import {motion, useScroll, useTransform} from "motion/react";

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
    const [workHeight, setWorkHeight] = useState(0);
    const [leftWorksHeight, setLeftWorksHeight] = useState(0);

    useEffect(() => {
        if (titleRef.current && descriptionRef.current && borderRef.current) {
            titleRef.current.style.height = (Math.round(titleRef.current.clientWidth * 9 / 16) + 60) + 1 + 'px';
            descriptionRef.current.style.height = (Math.round(titleRef.current.clientWidth * 9 / 16) + 60) +  'px';
            borderRef.current.style.height = (Math.round(titleRef.current.clientWidth * 9 / 16) + 60) + 1 + 'px';
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: workGalleryRef,
        offset: ['start 0.33', 'end 0.66'],
    })

    useEffect(() => {
        if (titleRef.current){
            setWorkHeight(Math.round(titleRef.current.clientWidth * 9 / 16) + 60)
        }
        if (leftWorksRef.current){
            setLeftWorksHeight(leftWorksRef.current.clientHeight)
        }
    }, []);

    const y = useTransform(scrollYProgress, [0,1], [0, -workHeight])
    const paddingTop = useTransform(scrollYProgress, [0,1], [0, workHeight])
    const height = useTransform(scrollYProgress, [0, 1], [leftWorksHeight, leftWorksHeight + workHeight]);

    return (
        <motion.div className={"hidden md:flex flex-row overflow-hidden"} ref={workGalleryRef} style={{paddingTop, height}}>
            <div className={"w-1/2 h-fit"} ref={leftWorksRef}>
                <div className={"m-0 w-full overflow-hidden border-b border-transparent flex items-center justify-center"} ref={titleRef}>
                    <h1 className={"mb-4 text-2xl lg:text-3xl"}>{workBlock.title}</h1>
                </div>
                {oddWorks.map((work: WorkType, index) => (
                    <Work key={index} work={work} isOdd={true} isFirst={index === 0}/>
                ))}
            </div>
            <motion.div className={"w-1/2"} ref={rightWorksRef} style={{y}}>
                {evenWorks.map((work: WorkType, index) => (
                    <Work key={index} work={work} isFirst={index === 0}/>
                ))}
                <div className={"w-full px-5 border border-background dark:border-text border-t-0 flex flex-col items-center justify-evenly"} ref={descriptionRef}>
                    <p className={"text-sm lg:text-lg font-extralight"}>{workBlock.description}</p>
                    <CvButton cvLink={workBlock.cv}/>
                </div>
                <div className={'border-l border-background dark:border-text'} ref={borderRef}/>
            </motion.div>
        </motion.div>
    )
}

export default WorkGallery;