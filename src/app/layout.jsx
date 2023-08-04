import Script from "next/script";

import LoadingComponent from "@/components/internal/loading-component/loading.component";

import { ibm, ps2p } from "./fonts";

import "@/layout/header-layout/header.scss";
import "@/scss/globals.scss";
import "@/scss/button.scss";

import "./page.scss";

export const metadata = {
    title: "BDAO",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <Script
                    src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"
                    type="module"
                />
            </head>

            <body className={`${ibm.variable} ${ps2p.variable}`}>
                <LoadingComponent />
                {/* <Header /> */}
                <div className="bg-[#FBBC99]">
                    <section className="pt-[81px]"></section>
                    {children}
                </div>

                {/* <Footer /> */}
            </body>
        </html>
    );
}
