'use client';

import React, {useEffect, useState} from "react";
import useCursorHandlers from "@/hooks/useCursorHandlers";
import {useTheme} from "next-themes";

const ThemeSwitch = () => {

    const cursorHandlers = useCursorHandlers();
    const {resolvedTheme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const toggleTheme = () => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    };

    return (
        <div
            className={'lg:flex items-center w-fit fill-background dark:fill-text text-base md:text-sm lg:text-lg font-extralight md:border-r border-background dark:border-text border-l-0 border-y-0 p-2 lg:p-3 duration-500 ease-in-out md:bg-gradient-to-r from-background dark:from-primary from-50% to-primary dark:to-background to-50% bg-[length:200%_100%] bg-right hover:bg-left md:hover:fill-text md:dark:hover:fill-background overflow-hidden'}
            onClick={toggleTheme}
            {...cursorHandlers}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={'h-6 w-auto'}
            >
                <path
                    d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
            </svg>
        </div>
    )
}

export default ThemeSwitch;