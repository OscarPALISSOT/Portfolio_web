'use client';

import Link from "next/link";
import useCursorHandlers from "@/hooks/useCursorHandlers";

const Footer = () => {

    const currentYear = new Date().getFullYear();
    const cursorHandlers = useCursorHandlers();

    return (
        <footer className={'border-t border-background dark:border-text h-24 2xl:px-64 2xl:-mx-64 -mx-24 px-24 flex justify-end items-center'}>
            <div className={'h-full px-3 border-x-0 md:border-x border-x-background dark:border-x-text flex flex-col items-start justify-evenly'}>
                <div className={'relative before:content-[""] before:absolute before:w-px before:bottom-0 before:bg-background dark:before:bg-text before:transition-transform before:h-full before:-right-1 before:ease-out before:duration-300 before:origin-bottom-right before:scale-y-0 hover:before:scale-y-100 hover:before:origin-top-right'}>
                    <Link
                        href={'/mentions-legales'}
                        className={'text-base md:text-sm lg:text-lg font-extralight'}
                        {...cursorHandlers}
                    >
                        Mentions légales
                    </Link>
                </div>
                <p className={'text-base md:text-sm lg:text-lg font-extralight'}>{`© ${currentYear} Oscar PALISSOT. Tous droits réservés.`}</p>
            </div>
        </footer>
    )
}

export default Footer;