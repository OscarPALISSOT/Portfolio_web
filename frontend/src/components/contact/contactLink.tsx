'use client';

import Link from "next/link";
import useCursorHandlers from "@/hooks/useCursorHandlers";
import {ReactNode} from "react";

interface ContactLinkProps {
    link: string;
    svgIcon: ReactNode;
    isFirst?: boolean;
    isNavbar?: boolean;
}

const ContactLink = ({link, svgIcon, isFirst = false, isNavbar = false}: ContactLinkProps) => {

    const cursorHandlers = useCursorHandlers();

    return (
        <Link
            href={link}
            target={'_blank'}
            rel={'noreferrer'}
        >
            <div
                className={`w-fit fill-background dark:fill-text text-base md:text-sm lg:text-lg font-extralight border border-background dark:border-text duration-500 ease-in-out bg-gradient-to-r from-background dark:from-primary from-50% to-primary dark:to-background to-50% bg-[length:200%_100%] bg-right hover:bg-left hover:fill-text dark:hover:fill-background overflow-hidden ${!isFirst && !isNavbar && 'border-l-0'} ${!isFirst && isNavbar && 'border-b-0'} ${isNavbar ? 'border-t-0 p-2 lg:p-3' : 'p-3 lg:p-4'}`}
                {...cursorHandlers}
            >
                {svgIcon}
            </div>
        </Link>

    )
}

export default ContactLink;