'use client';

import Image from "next/image";
import {useRef} from "react";
import WorkTitle from "@/components/works/workTitle";

interface WorkProps {
    work: WorkType
}

const Work = ({work}: WorkProps) => {

    const workRef = useRef<HTMLDivElement>(null);

    return (
        <div className={"mb-3 md:m-0 md:border md:border-text w-full md:w-1/2 overflow-hidden"} ref={workRef}>
            <div className={`h-[${workRef.current ? workRef.current.clientWidth * 9/16 + 'px' : '100px'}]`}>
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