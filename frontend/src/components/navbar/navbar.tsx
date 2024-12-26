"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import useCurrentSection from "@/hooks/useCurrentSection";
import useNavTo from "@/modules/navTo";
import useCursorHandlers from "@/hooks/useCursorHandlers";
import ContactLink from "@/components/contact/contactLink";

interface NavbarProps {
    links: string[];
    logo: string;
    contact: ContactType;
}

const Navbar = ({links, logo, contact}: NavbarProps) => {

    const currentSection = useCurrentSection(links);
    const navTo = useNavTo();
    const cursorHandlers = useCursorHandlers();

    return (
        <>
            <div
                className={'hidden lg:flex transition duration-300 border-b border-text font-extralight bg-background font-geistMono sticky top-0 2xl:px-64 2xl:-mx-64 -mx-24 px-24 flex-col justify-between z-50'}>
                <div className={'flex flex-row justify-between items-center h-24'}>
                    <div className={'h-full border-x border-x-text'}>
                        <Link
                            href="/"
                            className={'px-4 w-full h-full flex items-center justify-center'}
                            {...cursorHandlers}
                        >
                            <Image
                                className={'h-12 w-auto hover:scale-105 duration-300 ease-out transition-all'}
                                src={process.env.NEXT_PUBLIC_ASSETS_URL + logo + '?key=logo'} alt="logo" width={128}
                                height={128}/>
                        </Link>
                    </div>
                    <div className={'h-full flex'}>
                        <div className={'h-full border-l border-text flex items-center'}>
                            <ul className={'flex flex-row'}>
                                {links.map((link, index) => {
                                    return (
                                        <li key={index}
                                            className={`mx-4 relative h-8 before:content-[""] before:absolute before:w-px before:bottom-0 before:bg-primary before:transition-transform before:h-full before:-right-1 before:ease-out before:duration-300 before:origin-bottom-right before:scale-y-0 hover:before:scale-y-100 hover:before:origin-top-right ${currentSection === link && 'before:scale-y-100 before:origin-top-right'}`}>
                                            <div className={"overflow-hidden h-full"}>
                                                <div
                                                    className={`h-full hover:-translate-y-full duration-500 text-2xl ${currentSection === link && '-translate-y-full'}`}
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
                        <div className={'flex'}>
                            <ContactLink
                                isFirst={true}
                                isNavbar={true}
                                link={contact.github}
                                svgIcon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 496 512"
                                        className={'h-16 w-auto'}
                                    >
                                        <path
                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                    </svg>
                                }
                            />
                            <ContactLink
                                isNavbar={true}
                                link={contact.linkedin}
                                svgIcon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className={'h-16 w-auto'}
                                    >
                                        <path
                                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                    </svg>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar