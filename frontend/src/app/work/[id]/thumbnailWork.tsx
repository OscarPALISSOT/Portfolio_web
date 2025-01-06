'use client';

import Image from "next/image";
import {motion, useScroll, useTransform} from "motion/react";
import React, {useEffect, useRef, useState} from "react";
import WorkType from "@/types/workType";

interface ThumbnailWorkProps {
    work: WorkType;
}

const ThumbnailWork = ({work}: ThumbnailWorkProps) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const [imgHeight, setImgHeight] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    })

    useEffect(() => {
        if (imageRef.current && containerRef.current) {
            setImgHeight(imageRef.current.clientHeight)
            setContainerHeight(containerRef.current.clientHeight)
        }
    }, []);

    const y = useTransform(scrollYProgress, [0, 1], [0, containerHeight - imgHeight])

    return (
        <div
            className={'mb-8 md:mb-0 -mx-8 2xl:-mx-64 md:-mx-24 border-y border-background dark:border-text h-[30vh] lg:h-[70vh] overflow-hidden'}
            ref={containerRef}
        >
            <motion.div
                style={{y}}
                className={'w-full h-fit'}
            >
                <Image
                    ref={imageRef}
                    className={'h-auto w-full object-cover'}
                    src={process.env.NEXT_PUBLIC_ASSETS_URL + work.thumbnail}
                    width={1920}
                    height={1080}
                    alt={work.title}
                />
            </motion.div>
        </div>

    )
}

export default ThumbnailWork;