"use client";

import "./roadmap.scss";
import { useState } from "react";

export default function useRoadmap() {
        const [selectedYear, setSelectedYear] = useState(1);
        const [showText, setShowText] = useState(false);
        const [selectedSvg2, setSelectedSvg2] = useState(false);
        const [selectedSvg3, setSelectedSvg3] = useState(false);

        const handleYearClick = (year) => {
            setSelectedYear(year); 
            setShowText(true);
            if(year === 2) setSelectedSvg2(true); 
            if(year === 3) setSelectedSvg3(true); 
        };
    return (
        <div className="overflow-hidden  bg-frame">
            <div className="max-w-screen-xl lg:flex gap-12 lg:mx-auto p-4 mt-12  flex justify-center items-center md:flex md:items-start md:justify-start">
                <h1 className="fmb text-white text-5xl font-normal">ROADMAP</h1>
            </div>
            <div className="hidden md:block">
                <div className=" flex flex-col gap-10 justify-center items-center mt-10 ">
                    <div className="flex justify-start items-center ">
                        <div className=" flex flex-row w-[80%]">
                            {/* SVG 1 */}
                            <div className="md:w-2/4 w-1/4">
                                <svg
                                    width="990"
                                    height="70"
                                    viewBox="0 0 990 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="z-30 relative"
                                >
                                    <path d="M0 0H947.151L990 35L947.151 70H0V0Z" fill="#E16E56" />

                                    <text
                                        x="700"
                                        y="35"
                                        dominantBaseline="middle"
                                        textAnchor="end"
                                        fill="white"
                                        fontSize="24"
                                        fontWeight="bold"
                                        className="fmb text-white text-sm font-normal"
                                    >
                                        Year 1
                                    </text>
                                </svg>
                            </div>
                            <div className="">
                                {/* SVG 2 */}
                                <svg
                                    width="583"
                                    height="70"
                                    viewBox="0 0 583 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="z-20  relative right-32"
                                >
                                    <path d="M0 0H542.708L583 35L542.708 70H0V0Z" fill="#F09A87" />

                                    <path d="M0 0H542.708L583 35L542.708 70H0V0Z" fill="#F09A87" />
                                    <text
                                        x="450"
                                        y="35"
                                        dominantBaseline="middle"
                                        textAnchor="end"
                                        fill="white"
                                        fontSize="24"
                                        fontWeight="bold"
                                        className="fmb text-white text-sm font-normal"
                                    >
                                        Year 2
                                    </text>
                                </svg>
                            </div>

                            {/* SVG 3 */}
                            <div className="">
                                <svg
                                    width="533"
                                    height="70"
                                    viewBox="0 0 533 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="z-10  relative right-96"
                                >
                                    <path d="M0 0H496.164L533 35L496.164 70H0V0Z" fill="#FFCEC3" />

                                    <path d="M0 0H496.164L533 35L496.164 70H0V0Z" fill="#FFCEC3" />
                                    <text
                                        x="450"
                                        y="35"
                                        dominantBaseline="middle"
                                        textAnchor="end"
                                        fill="white"
                                        fontSize="24"
                                        fontWeight="bold"
                                        className="fmb text-white text-sm font-normal"
                                    >
                                        Year 3
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-xl lg:flex gap-5 lg:mx-auto p-4 mb-44 md:space-y-0 space-y-10">
                        <div className="flex flex-col w-2/4 md:w-[45%]">
                            {/* Rest of your code... */}
                            <div className="flex md:flex-row flex-col gap-5 justify-center items-start">
                                <div className="">
                                    <ul className="list-disc list-inside space-y-10 text-[#F1775E] text-sm font-semibold">
                                        <li className=" px-6  py-2">
                                            Formation of UAE Legal Entity
                                        </li>
                                        <li className="  px-6  py-2">AI Integration</li>
                                        <li className="  px-6  py-2">
                                            Active Participant Formation, Vote, and Selection
                                        </li>
                                        <li
                                            // className={`px-6 py-2 ${
                                            //     isActive(0) ? "bg-[#E16E56] hover:border border-white" : ""
                                            // }`}
                                            className=" px-6 py-2"
                                        >
                                            BrickLayer Tenant Acquisition Service
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-sm font-semibold">
                                    <ul className="list-disc list-inside space-y-10 md:space-y-5 w-64 md:w-40  text-white text-sm font-semibold">
                                        <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent ">
                                            Release 1st Partner Occupier
                                        </li>
                                        <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                            $BRICKS Token Issuance
                                        </li>
                                        <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                            Launch Introduction Program
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-sm font-semibold">
                                    <ul className="list-disc list-inside space-y-10 md:space-y-5 w-40  text-white text-sm font-semibold">
                                        <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                            Launch Staking Program
                                        </li>
                                        <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                            Genesis acquisition complete
                                        </li>
                                        <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                            Release 2nd Parnter Occupier
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/4 md:w-1/4 flex flex-col justify-start items-start">
                            {/* Rest of your code... */}
                            <ul className="list-disc list-inside space-y-10 md:space-y-5 w-44 text-white text-sm font-semibold">
                                <li className="px-6 py-2 hover:bg-[#F09A87] hover:border hover:border-white border border-transparent ">
                                    Launch of Bricklayer Listing Portal
                                </li>
                                <li className="px-6 py-2 hover:bg-[#F09A87] hover:border hover:border-white border border-transparent ">
                                    Release 3rd Partner Occupier
                                </li>
                                <li className="px-6 py-2 hover:bg-[#F09A87] hover:border hover:border-white border border-transparent ">
                                    Launch the Brickworks Tapestry
                                </li>
                            </ul>
                        </div>
                        <div className="w-2/4 md:w-1/4 flex flex-col justify-start items-start">
                            {/* Rest of your code... */}
                            <ul className="list-disc list-inside space-y-10 md:space-y-5 w-56 text-white text-sm font-semibold">
                                <li className="px-6 py-2 hover:bg-[#FFCEC3] hover:border hover:border-white border border-transparent">
                                    Bricklayer Listing Portal to offer Asset Sales and Escrow
                                    Platform
                                </li>
                                <li className="px-6 py-2 hover:bg-[#FFCEC3] hover:border hover:border-white border border-transparent">
                                    Release 4th and 5th Partner Occupiers
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile view */}

            <div className="md:hidden block ">
                <div className="flex flex-row mb-10">
                    <svg
                        width="262"
                        height="63"
                        viewBox="0 0 262 63"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="z-30  relative "
                        onClick={() => handleYearClick(1)}
                    >
                        <path d="M0 0H223.694L262 31.5L223.694 63H0V0Z" fill="#E16E56" />
                        <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fill="white"
                            fontSize="24"
                            fontWeight="bold"
                            className="fmb text-white text-sm font-normal"
                        >
                            Year 1
                        </text>
                    </svg>
                    
                    <svg
                        width="262"
                        height="63"
                        viewBox="0 0 262 63"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`z-20  relative ${selectedSvg2 || selectedSvg3 ? '-left-12' : '-left-24'}`}
                        onClick={() => handleYearClick(2)}
                    >
                        <path d="M0 0H223.694L262 31.5L223.694 63H0V0Z" fill="#F09A87" />
                        {selectedSvg2  && (
                            <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fill="white"
                            fontSize="24"
                            fontWeight="bold"
                            className="fmb text-white text-sm font-normal"
                        >
                            Year 2
                        </text>
                        )}
                    </svg>

                    <svg
                        width="262"
                        height="63"
                        viewBox="0 0 262 63"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`z-10  relative ${selectedSvg3 ? '-left-20' : (selectedSvg2 ? '-left-36' : '-left-48')}`}

                        onClick={() => handleYearClick(3)}
                    >
                        <path d="M0 0H223.694L262 31.5L223.694 63H0V0Z" fill="#FFCEC3" />   

                        {selectedSvg3 && (
                            <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fill="white"
                            fontSize="24"
                            fontWeight="bold"
                            className="fmb text-white text-sm font-normal"
                        >
                            Year 3
                        </text>
                        )}
                    </svg>
                </div>

                {/* Render the content based on the selected year */}
                {selectedYear === 1 && (
                    <div className="flex md:flex-row flex-col gap-5 justify-center items-start mb-44">
                        <div className="">
                            <ul className="list-disc list-inside space-y-10 text-[#F1775E] text-sm font-semibold w-2/4">
                                <li className=" px-6  py-2">Formation of UAE Legal Entity</li>
                                <li className="  px-6  py-2">AI Integration</li>
                                <li className="  px-6  py-2">
                                    Active Participant Formation, Vote, and Selection
                                </li>
                                <li
                                    // className={`px-6 py-2 ${
                                    //     isActive(0) ? "bg-[#E16E56] hover:border border-white" : ""
                                    // }`}
                                    className=" px-6 py-2"
                                >
                                    BrickLayer Tenant Acquisition Service
                                </li>
                            </ul>
                        </div>
                        <div className="text-sm font-semibold">
                            <ul className="list-disc list-inside space-y-10 md:space-y-5 w-40  text-white text-sm font-semibold">
                                <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent ">
                                    Release 1st Partner Occupier
                                </li>
                                <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                    $BRICKS Token Issuance
                                </li>
                                <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                    Launch Introduction Program
                                </li>
                            </ul>
                        </div>
                        <div className="text-sm font-semibold">
                            <ul className="list-disc list-inside space-y-10 md:space-y-5 w-40  text-white text-sm font-semibold">
                                <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                    Launch Staking Program
                                </li>
                                <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                    Genesis acquisition complete
                                </li>
                                <li className="px-6 py-2 hover:bg-[#E16E56] hover:border hover:border-white border border-transparent">
                                    Release 2nd Parnter Occupier
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
                {selectedYear === 2 && (
                    <div className="w-2/4 md:w-1/4 flex flex-col justify-start items-start mb-64">
                        {/* Rest of your code... */}
                        <ul className="list-disc list-inside space-y-10 md:space-y-5 w-44 text-white text-sm font-semibold">
                            <li className="px-6 py-2 hover:bg-[#F09A87] hover:border hover:border-white border border-transparent ">
                                Launch of Bricklayer Listing Portal
                            </li>
                            <li className="px-6 py-2 hover:bg-[#F09A87] hover:border hover:border-white border border-transparent ">
                                Release 3rd Partner Occupier
                            </li>
                            <li className="px-6 py-2 hover:bg-[#F09A87] hover:border hover:border-white border border-transparent ">
                                Launch the Brickworks Tapestry
                            </li>
                        </ul>
                    </div>
                )}
                {selectedYear === 3 && (
                    <div className="w-2/4 md:w-1/4 flex flex-col justify-start items-start mb-72">
                        {/* Rest of your code... */}
                        <ul className="list-disc list-inside space-y-10 md:space-y-5 w-56 text-white text-sm font-semibold">
                            <li className="px-6 py-2 hover:bg-[#FFCEC3] hover:border hover:border-white border border-transparent">
                                Bricklayer Listing Portal to offer Asset Sales and Escrow Platform
                            </li>
                            <li className="px-6 py-2 hover:bg-[#FFCEC3] hover:border hover:border-white border border-transparent">
                                Release 4th and 5th Partner Occupiers
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
