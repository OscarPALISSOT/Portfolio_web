import type {Metadata} from "next";
import "@/styles/globals.css";
import "@/styles/variable.css"
import {Geist_Mono} from 'next/font/google';
import {Vazirmatn} from 'next/font/google';
import {ReactNode} from "react";
import {createDirectus, readItems, rest} from "@directus/sdk";
import NavbarMobile from "@/components/navbar/navbarMobile";
import Navbar from "@/components/navbar/navbar";
import Cursor from "@/components/cursor/cursor";
import CursorContextProvider from "@/components/cursor/cursorContext";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());

const geistMono = Geist_Mono({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--Geist-Mono',
})

const vazirmatn = Vazirmatn({
    subsets: ['latin'],
    display: 'swap',
    variable: '--Vazirmatn',
})

export const metadata: Metadata = {
    title: 'Oscar PALISSOT | Développeur web et logiciel',
};

export default async function RootLayout({children}: Readonly<{
    children: ReactNode;
}>) {

    const about = await client.request(
        readItems('about', {
            fields: ['link, logo', {}],
        })
    ) as unknown as AboutType;

    const workBlock = await client.request(
        readItems('work_block', {
            fields: ['link', {}],
        })
    ) as unknown as WorkBlockType;

    const links = [workBlock.link, about.link];
    const logo = about.logo

    return (
        <html lang="en">
        <CursorContextProvider>
            <body className={`${geistMono.variable} ${vazirmatn.variable} font-light font-geistMono bg-background px-8 md:px-24 2xl:px-64 h-fit min-h-[100vh]`}>
                <Cursor/>
                <NavbarMobile
                    links={links}
                    logo={logo}
                />
                <Navbar
                    links={links}
                    logo={logo}
                />
                {children}
            </body>
        </CursorContextProvider>
        </html>
    );
}
