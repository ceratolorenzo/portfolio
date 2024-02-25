import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

import Header from '@/components/header';
import Logo from '@/components/logo';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Lorenzo Cerato — Portfolio",
    description: "Explore my portfolio for expertly crafted websites optimized for seamless performance across platforms. With a focus on modern technologies, I blend creativity and functionality to deliver captivating digital experiences.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={inter.className}>
                <Header/>
                {children}
                <Analytics />
                <Logo/>
                <Footer/>
            </body>
        </html>
    );
}
