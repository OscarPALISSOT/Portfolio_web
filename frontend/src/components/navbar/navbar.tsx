"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import useCurrentSection from "@/hooks/useCurrentSection";
import useNavTo from "@/modules/navTo";
import useCursorHandlers from "@/hooks/useCursorHandlers";

interface NavbarProps {
    links: string[];
    logo: string;
}

const Navbar = ({links, logo}: NavbarProps) => {

    const currentSection = useCurrentSection(links);
    const navTo = useNavTo();
    const cursorHandlers = useCursorHandlers();

    return (
        <>
            <div
                className={'hidden lg:flex transition duration-300 border-b border-text font-extralight bg-background font-geistMono sticky top-0 2xl:px-64 2xl:-mx-64 -mx-24 px-24 flex-col justify-between z-50'}>
                <div className={'flex flex-row justify-between items-center h-24'}>
                    <span className={"flex items-center gap-6"}>
                        <Link
                            href="/"
                            {...cursorHandlers}
                        >
                            <Image
                                className={'h-12 w-auto hover:scale-105 duration-300 ease-out transition-all'}
                                src={process.env.NEXT_PUBLIC_ASSETS_URL + logo + '?key=logo'} alt="logo" width={128}
                                height={128}/>
                        </Link>
                    </span>
                    <div>
                        <ul className={'flex flex-row'}>
                            {links.map((link, index) => {
                                return (
                                    <li key={index}
                                        className={`mx-4 relative h-8 before:content-[""] before:absolute before:w-px before:bottom-0 before:bg-primary before:transition-transform before:h-full before:-right-1 before:ease-out before:duration-300 before:origin-bottom-right before:scale-y-0 hover:before:scale-y-100 hover:before:origin-top-right ${currentSection === link && 'before:scale-y-100 before:origin-top-right'}`}>
                                        <div className={"overflow-hidden h-full"}>
                                            <div
                                                className={`h-full hover:-translate-y-full duration-500 text-2xl `}
                                                onClick={(e) => {
                                                    navTo(e, link)
                                                }}
                                                {...cursorHandlers}
                                            >
                                                <p>{link}</p>
                                                <p>{link}</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar