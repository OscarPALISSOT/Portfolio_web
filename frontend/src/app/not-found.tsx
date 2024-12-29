'use client';

import Link from 'next/link'
import React from "react";
import useCursorHandlers from "@/hooks/useCursorHandlers";

export default function NotFound() {

    const cursorHandlers = useCursorHandlers();

    return (
        <div className={'min-h-[calc(100vh_-_225px)] lg:min-h-[calc(100vh_-_225px)]'}>
            <h1 className={"mt-8 mb-6 text-2xl md:text-3xl lg:text-4xl"}>404 - Not Found</h1>
            <p className={'mb-6'}>Page inexistante</p>
            <Link
                className={'w-fit text-base md:text-sm lg:text-lg font-extralight border border-background dark:border-text p-2 lg:p-3 duration-500 ease-in-out bg-gradient-to-r from-background dark:from-primary from-50% to-primary dark:to-background to-50% bg-[length:200%_100%] bg-right hover:bg-left hover:text-background overflow-hidden'}
                href={'/'}
                target={'_blank'}
                rel={'noreferrer'}
                {...cursorHandlers}
            >
                Retour à l&apos;accueil
            </Link>
        </div>
    )
}