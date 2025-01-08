'use client';

import Link from "next/link";
import React from "react";
import useCursorHandlers from "@/hooks/useCursorHandlers";


const BackBtn = () => {

    const cursorHandlers = useCursorHandlers();

    return (
        <Link
            href={'/'}
            className={'w-fit text-base md:text-sm lg:text-lg font-extralight border border-background dark:border-text p-2 lg:p-3 duration-500 ease-in-out bg-gradient-to-r from-background dark:from-primary from-50% to-primary dark:to-background to-50% bg-[length:200%_100%] bg-right hover:bg-left hover:text-text dark:hover:text-background overflow-hidden'}
            {...cursorHandlers}
        >
            {'< retour'}
        </Link>
    )
}

export default BackBtn;