'use client';

import Image from "next/image";
import {useEffect, useRef} from "react";
import WorkTitle from "@/components/works/workTitle";
import WorkType from "@/types/workType";

interface WorkProps {
    work: WorkType;
    isOdd?: boolean;
    isFirst?: boolean;
    isLast?: boolean;
}

const Work = ({work, isOdd = false, isFirst = false, isLast = false}: WorkProps) => {

    const workWrapperRef = useRef<HTMLDivElement>(null);
    const workRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (workRef.current && workWrapperRef.current) {
            if (isOdd && isFirst) {
                workRef.current.style.height = Math.round(workWrapperRef.current.clientWidth * 9 / 16) - 1 + 'px';
            } else {
                workRef.current.style.height = Math.round(workWrapperRef.current.clientWidth * 9 / 16) + 'px';
            }

        }
    }, [isOdd, isFirst]);

    return (
        <div className={`mb-3 md:m-0 border border-background dark:border-text w-full overflow-hidden ${isOdd && !isLast && 'md:border-r-0'} ${isFirst ? 'md:border-t' : 'md:border-t-0'}`} ref={workWrapperRef}>
            <div ref={workRef}>
                <Image
                    className={'h-full w-full object-cover'}
                    src={process.env.NEXT_PUBLIC_ASSETS_URL + work.thumbnail}
                    width={1920}
                    height={1080}
                    alt={work.title}
                />
            </div>
            <WorkTitle title={work.title} />
        </div>
    )
}

export default Work;