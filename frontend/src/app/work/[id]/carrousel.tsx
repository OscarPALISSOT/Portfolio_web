import Image from "next/image";
import React from "react";
import WorkType from "@/types/workType";

interface CarrouselProps {
    work: WorkType;
}

const Carrousel = ({work}: CarrouselProps) => {
    return (
        <div className={'border border-background dark:border-text'}>
            <Image
                className={'h-auto w-full object-cover'}
                src={process.env.NEXT_PUBLIC_ASSETS_URL + work.secondary_thumbnail}
                width={1920}
                height={1080}
                alt={work.title}
            />
        </div>
    )
}

export default Carrousel;