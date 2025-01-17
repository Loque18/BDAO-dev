"use client";

import "./Ap.scss";

import { ap, available } from "@/constants/app";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Ap() {
    const [activeContent, setActiveContent] = useState("existing");
    const [copiedLink, setCopiedLink] = useState(null);

    const handleExistingClick = () => {
        setActiveContent("existing");
    };

    const handleAvailableClick = () => {
        setActiveContent("available");
    };

    const handleCopyLink = (link, event) => {
        // Prevent navigation to the link
        event.preventDefault();

        // Copy the link to the clipboard
        navigator.clipboard.writeText(link).then(() => {
            setCopiedLink(link);
            // Clear the copied link message after a short delay (e.g., 3 seconds)
            setTimeout(() => {
                setCopiedLink(null);
            }, 3000);
        });
    };
    return (
        <div className="bg-img">
            <div className="title text-center lg:text-[48px] sm:text-[30px] text-[25px] pt-10 bg-blur1">
                <p className="fmb">Active Participant</p>
                <p className="fmb">Positions</p>
            </div>

            <div
                className="max-w-screen-xl xl:mx-auto p-4 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-8 pb-56 bg-blur2"
                style={{
                    height: "80%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* Add buttons for switching content */}
                <div className="flex w-full md:justify-start justify-center md:gap-5 items-center gap-10">
                    <button
                        className={`bg-[#E26E5D] border-3 border-white ${
                            activeContent === "existing" ? "text-white" : "text-[#FEBA98]"
                        }  fmb p-3 text-[12px] sm:w-auto md:text-base ${
                            activeContent === "existing" ? "" : ""
                        }`}
                        onClick={handleExistingClick}
                    >
                        Existing
                    </button>
                    <button
                        className={`bg-[#E26E5D] border-3 border-white ${
                            activeContent === "available" ? "text-white" : "text-[#FEBA98]"
                        }  fmb p-3  text-[12px] sm:w-auto md:text-base ${
                            activeContent === "available" ? "" : ""
                        }`}
                        onClick={handleAvailableClick}
                    >
                        Available
                    </button>
                </div>

                <div className="">
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                        {activeContent === "available" &&
                            ap.map((item) => {
                                return (
                                    // Render content for "Existing" button
                                    // ...
                                    <div
                                        key={item.id}
                                        className="relative bg-[#E26E5D] bg-opacity-70 text-center border-3 border-[#a9a9a9] hover:border-white px-6 pb-7"
                                    >
                                        {item.frame && (
                                            <Image
                                                src={item.frame}
                                                alt=""
                                                className="absolute top-0 left-0 w-[146px] h-[146px]"
                                                width={146}
                                                height={146}
                                            />
                                        )}

                                        <div>{item.image()}</div>
                                        <h1 className="fmb sm:text-[24px] text-[19px]">
                                            {item.title}
                                        </h1>
                                        <div className="font-semibold mt-9">
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    {activeContent === "existing" && (
                        <div className="flex flex-col justify-center items-center text-center gap-14 bg-[#E26E5D] bg-opacity-70 border-[2px] border-border-white bg-with-image ">
                            <div className="">
                                <h1 className="fmb text-2xl font-[400] leading-6 text-center mt-16">
                                    Active Participants
                                </h1>
                            </div>
                            <div className="w-[85%]">
                                <p className="md:text-base font-semibold leading-normal text-justify text-sm">
                                    The APs provide managerial guidance that is essential to the
                                    success of Bricklayer. The collective APs are tasked with
                                    developing, enhancing, operating, and promoting the DAO. APs
                                    fulfill a managerial role and are expected to validate
                                    introductions and undertake tasks to improve the value of the
                                    Treasury. Furthermore, selected APs will be democratically voted
                                    in and reviewed annually by the DAO.
                                </p>
                            </div>
                            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 m-5 pb-20 ">
                                {available.map((item) => {
                                    return (
                                        // Render content for "Available" button
                                        // ...
                                        <div
                                            key={item.id}
                                            className="flex flex-row gap-2 justify-start items-center bg-gray-200 hover:bg-opacity-40 bg-opacity-20 px-6 py-4"
                                        >
                                            <div className="flex items-start justify-end h-full mb-1">
                                                <div className="relative">
                                                    <Link href={item.profileLink}>
                                                        <Image
                                                            src={item.img}
                                                            alt=""
                                                            width={24}
                                                            height={24}
                                                            onClick={(event) =>
                                                                item.img ===
                                                                "/media/models/discord.svg"
                                                                    ? handleCopyLink(
                                                                          item.profileLink,
                                                                          event
                                                                      )
                                                                    : null
                                                            }
                                                            style={{ cursor: "pointer" }}
                                                        />
                                                    </Link>
                                                    {copiedLink &&
                                                        item.img ===
                                                            "/media/models/discord.svg" && (
                                                            <div className="absolute bg-white p-2 shadow rounded">
                                                                <p className="text-[#E26E5D] font-semibold">
                                                                    Copied!
                                                                </p>
                                                            </div>
                                                        )}
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <h1 className="fmb text-[12px] font-normal">
                                                    {item.name}
                                                </h1>
                                                <h1 className="text-[#FFD3C8] text-[12px] font-semibold">
                                                    {item.title}
                                                </h1>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
                <div className="mt-8">
                    <div
                        style={{
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center",
                            marginBottom: "20px",
                        }}
                    >
                        <h1 className="fmb sm:text-[24px] text-[19px]">Interested?</h1>
                    </div>
                    <div className="flex md:order-2 md:flex-1 md:justify-end">
                        <a className="button3D" href="mailto:inquiries@bricklayerdao.xyz">
                            <div className="flex">
                                <span className="text-white font-medium">
                                    Apply and Learn more here
                                </span>
                                <Image
                                    width={18}
                                    height={18}
                                    className="ml-3 mt-1"
                                    src="/Arrow 1.svg"
                                    alt=""
                                ></Image>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
