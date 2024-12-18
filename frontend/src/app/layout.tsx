import type {Metadata} from "next";
import "@/styles/globals.css";
import "@/styles/variable.css"
import {Geist_Mono} from 'next/font/google';
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

export const metadata: Metadata = {
    title: 'Oscar PALISSOT | Portfolio développeur',
};

export default async function RootLayout({children}: Readonly<{
    children: ReactNode;
}>) {

    const about = await client.request(
        readItems('about', {
            fields: ['*', {}],
        })
    ) as unknown as AboutType;

    const workBlock = await client.request(
        readItems('work_block', {
            fields: ['*', {}],
        })
    ) as unknown as WorkBlockType;

    const links = [about.link, workBlock.link];
    const logo = about.logo

    return (
        <html lang="en">
        <CursorContextProvider>
            <body className={`${geistMono.variable} bg-background px-8 md:px-24 2xl:px-64 h-fit min-h-[100vh]`}>
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
