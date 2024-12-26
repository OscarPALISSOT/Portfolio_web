'use client';

import Link from "next/link";
import useCursorHandlers from "@/hooks/useCursorHandlers";
import {ReactNode} from "react";

interface ContactLinkProps {
    link: string;
    svgIcon: ReactNode;
    isFirst?: boolean;
}

const ContactLink = ({link, svgIcon, isFirst = false}: ContactLinkProps) => {

    const cursorHandlers = useCursorHandlers();

    return (
        <Link
            href={link}
            target={'_blank'}
            rel={'noreferrer'}
        >
            <div
                className={`w-fit fill-text text-base md:text-sm lg:text-lg font-extralight border border-text p-3 lg:p-4 duration-500 ease-in-out bg-gradient-to-r from-text from-50% to-background to-50% bg-[length:200%_100%] bg-right hover:bg-left hover:fill-background overflow-hidden ${!isFirst && 'border-l-0'}`}

                {...cursorHandlers}
            >
                {svgIcon}
            </div>
        </Link>

    )
}

export default ContactLink;