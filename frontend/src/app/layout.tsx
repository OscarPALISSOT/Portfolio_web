import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/variable.css"
import { Geist_Mono } from 'next/font/google';
import { Vazirmatn } from 'next/font/google';
import { ReactNode } from "react";
import NavbarMobile from "@/components/navbar/navbarMobile";
import Navbar from "@/components/navbar/navbar";
import Cursor from "@/components/cursor/cursor";
import CursorContextProvider from "@/components/cursor/cursorContext";
import Footer from "@/components/footer";
import ThemeProviderWrap from "@/components/themeProvider";
import SmoothScroll from "@/components/smoothScroll";
import { getAbout, getContact, getWorkBlock } from "@/lib/queries";

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
  description: 'Portfolio d’Oscar PALISSOT, développeur web et logiciel basé à Grenoble. Découvrez mes projets ainsi que mes expériences en création. Contactez-moi pour collaborer sur vos projets !'
};

export default async function RootLayout({ children }: Readonly<{
  children: ReactNode;
}>) {

  const [about, workBlock, contactBlock] = await Promise.all([
    getAbout(),
    getWorkBlock(),
    getContact(),
  ]);

  const links = [workBlock.link, about.link, contactBlock.link];

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <CursorContextProvider>
        <body
          className={`${geistMono.variable} ${vazirmatn.variable} font-light text-background dark:text-text font-geistMono dark:bg-background bg-primary px-8 md:px-24 2xl:px-64 h-fit min-h-[100vh]`}
        >
          <SmoothScroll>
            <ThemeProviderWrap>
              <Cursor />
              <NavbarMobile
                links={links}
              />
              <Navbar
                links={links}
                contact={contactBlock}
              />
              {children}
              <Footer />
            </ThemeProviderWrap>
          </SmoothScroll>
        </body>
      </CursorContextProvider>
    </html>
  );
}
