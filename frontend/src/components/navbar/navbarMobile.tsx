"use client";

import React, {useEffect, useState} from "react";
import Link from "next/link";
import useNavTo from "@/modules/navTo";
import ThemeSwitch from "@/components/navbar/themeSwitch";
import Logo from "@/components/navbar/logo";

interface NavbarProps {
    links: string[];
}

const NavbarMobile = ({links}: NavbarProps) => {

    const navTo = useNavTo();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.position = 'fixed';
        } else {
            document.body.style.position = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <div
                className={'lg:hidden border-b border-background dark:border-text text-2xl transition duration-300 font-bold bg-primary dark:bg-background font-geistMono sticky top-0 -mx-8 md:-mx-24 px-8 -left-8 flex flex-col justify-between w-screen z-40'}>
                <div className={'flex flex-row justify-between items-center h-20 w-full'}>
                    <div className={`flex justify-center items-center px-2 h-full border-x border-background dark:border-text duration-300 ${isMenuOpen && 'border-x-0'}`}>
                        <Link href="/">
                            <Logo/>
                        </Link>
                    </div>
                    <div
                        className={'cursor-pointer py-2 overflow-hidden'}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div
                            className={`h-0.5 w-8 bg-background dark:bg-text duration-300 ease-out transition-all before:content-[""] before:h-0.5 before:w-8 before:absolute before:bg-background dark:before:bg-text after:content-[""] after:h-0.5 after:w-8 after:absolute after:bg-background dark:after:bg-text before:-translate-y-2 after:translate-y-2 before:duration-300 before:transition-all before:ease-out after:duration-300 after:transition-all after:ease-out ${isMenuOpen && '-translate-x-8 bg-transparent before:translate-x-8 after:translate-x-8 before:rotate-45 before:translate-y-0 after:translate-y-[0] after:-rotate-45'}`}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`flex flex-row justify-start top-20 left-0 fixed h-screen w-screen bg-primary dark:bg-background scale-y-0 duration-500 ease-in-out transition-all origin-top p-6 z-40 ${isMenuOpen && 'scale-y-100 duration-500'}`}>
                <ul className={'flex flex-col ms-6'}>
                    {links.map((link, index) => {
                        return (
                            <li
                                key={index}
                                className={'mx-4 cursor-pointer relative mb-6'}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Link href={`/#${link}`}
                                      onClick={(e) => {
                                          navTo(e, link)
                                      }}
                                      className={'before:content-[""] before:absolute before:h-0.5 before:bottom-0.5 before:bg-text before:transition-transform before:w-full before:left-0 before:ease-out before:duration-300 before:origin-bottom-right before:scale-x-0 hover:before:scale-x-100 hover:before:origin-bottom-left text-4xl font-geistMono font-light'}>
                                    {link}
                                </Link>
                            </li>
                        )
                    })}
                    <ThemeSwitch/>
                </ul>
            </div>
        </>
    )
}
export default NavbarMobile