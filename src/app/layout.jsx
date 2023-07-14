"use client";

import { useState, useEffect } from "react";

import Script from "next/script";

import LoadingComponent from "@/components/internal/loading-component/loading.component";
import Header from "./layout/header-layout";
import Footer from "./layout/footer-layout/footer.component";

import { ibm, ps2p } from "./fonts";

import "./layout/header-layout/header.scss";
import "@/scss/globals.scss";
import "@/scss/button.scss";

export const metadata = {
    title: "BDAO",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    const [delay, setDelay] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDelay(true);
        }, 3000);
    }, []);

    return (
        <html lang="en">
            <head>
                <Script
                    src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"
                    type="module"
                />
                {/* <link rel="icon" href="/favicon.ico" /> */}
                {/* <link rel="stylesheet" href="/font.scss" /> */}
            </head>

            <body className={`${ibm.variable} ${ps2p.variable}`}>
                <LoadingComponent />
                <Header />
                <div className="main-bg">
                    <div className="">
                        <section className="pt-[81px]"></section>
                        {children}
                    </div>
                </div>
                <span className={delay ? "hidden" : "hidden"}>
                    <Footer />
                </span>
            </body>
        </html>
    );
}
