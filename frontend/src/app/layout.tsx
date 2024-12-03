import type {Metadata} from "next";
import "@/styles/globals.css";
import "@/styles/variable.css"
import {Roboto} from 'next/font/google';
import {ReactNode} from "react";
import {createDirectus, readItems, rest} from "@directus/sdk";
import NavbarMobile from "@/components/navbar/navbarMobile";
import Navbar from "@/components/navbar/navbar";

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest());


const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--Roboto'
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
            <body className={`${roboto.variable} bg-background px-8 md:px-24 2xl:px-64 h-fit min-h-[100vh]`}>
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
        </html>
    );
}
