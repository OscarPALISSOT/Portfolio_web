'use client';

import Link from "next/link";
import useCursorHandlers from "@/hooks/useCursorHandlers";

interface CvButtonProps {
    cvLink: string;
}

const CvButton = ({cvLink}: CvButtonProps) => {

    const cursorHandlers = useCursorHandlers();

    return (
        <Link
            className={'w-fit text-base md:text-sm lg:text-lg font-extralight border border-text p-2 lg:p-3 duration-500 ease-in-out bg-gradient-to-r from-text from-50% to-background to-50% bg-[length:200%_100%] bg-right hover:bg-left hover:text-background overflow-hidden'}
            href={process.env.NEXT_PUBLIC_ASSETS_URL + cvLink}
            target={'_blank'}
            {...cursorHandlers}
        >
            Voir mon cv
        </Link>
    )
}

export default CvButton;