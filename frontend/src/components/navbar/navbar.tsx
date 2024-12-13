"use client";

import React from "react";
import useScroll from "@/hooks/useScrool";
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

    const scrollY = useScroll();
    const currentSection = useCurrentSection(links);
    const navTo = useNavTo();
    const cursorHandlers = useCursorHandlers();

    return (
        <>
            <div
                className={`hidden lg:flex transition duration-300 font-extralight bg-background font-roboto sticky top-0 2xl:px-64 2xl:-mx-64 -mx-24 px-24 flex-col justify-between z-50 ${scrollY > 3 && 'shadow-[0_6px_12px_0_rgba(0,0,0,0.12)] '}`}>
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
                        <Link
                            href="/"
                            {...cursorHandlers}
                        >
                            <h1 className={"text-3xl hover:scale-105 duration-300 ease-out transition-all"}>Oscar PALISSOT</h1>
                        </Link>
                    </span>
                    <div>
                        <ul className={'flex flex-row'}>
                            {links.map((link, index) => {
                                return (
                                    <li key={index}
                                        className={`mx-4 relative h-8 before:content-[""] before:absolute before:w-px before:bottom-0 before:bg-primary before:transition-transform before:h-full before:-right-1 before:ease-out before:duration-300 before:origin-bottom-right before:scale-y-0 hover:before:scale-y-100 hover:before:origin-top-right ${currentSection === link && 'before:scale-y-100 before:origin-bottom-right'}`}>
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
                <div
                    className={`h-0-5 -mx-8 md:-mx-24 2xl:-mx-64 bg-black origin-right duration-500 scale-x-0 ease-in ${scrollY > 3 && 'scale-x-100'}`}/>
            </div>
        </>
    )
}
export default Navbar