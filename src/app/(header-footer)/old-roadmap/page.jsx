/* eslint-disable @next/next/no-img-element */
"use client";
import "./old-roadmap.scss";
import { useEffect, useState } from "react";

export default function useRoadmap() {
    const [activeYear, setActiveYear] = useState(null);
    const [currentCarPosition, setCurrentCarPosition] = useState();
    const [isCarMoving, setIsCarMoving] = useState(false);

    const carPositions = {
        year1: {
            desktop: 0,
            tablet: 70,
            mobile: 70,
        },
        year2: {
            desktop: 430,
            tablet: 430,
            mobile: 430,
        },
        year3: {
            desktop: 220,
            tablet: 220,
            mobile: 220,
        },
    };

    useEffect(() => {
        if (isCarMoving) {
            setCurrentCarPosition(carPositions[`year${activeYear}`][getScreenSize()]);
            const timeoutId = setTimeout(() => {
                setIsCarMoving(false);
            }, 7000);
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [isCarMoving, activeYear]);

    useEffect(() => {
        setCurrentCarPosition(-300);
        setIsCarMoving(true);
    }, []);

    useEffect(() => {
        setActiveYear(1);
    }, []);

    useEffect(() => {
        // Update car position on window resize
        const handleResize = () => {
            setCurrentCarPosition(carPositions[`year${activeYear}`][getScreenSize()]);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [activeYear, carPositions]);

    const handleYearClick = (year) => {
        setIsCarMoving(false); // Stop car animation
        setCurrentCarPosition(carPositions[`year${year}`][getScreenSize()]); // Update car position
        setIsCarMoving(true); // Start car animation
        setActiveYear(year); // Set active year
    };

    const getScreenSize = () => {
        if (window.innerWidth <= 690) {
            return "mobile";
        } else if (window.innerWidth <= 1024) {
            return "tablet";
        } else {
            return "desktop";
        }
    };

    const renderContent = () => {
        switch (activeYear) {
            case 1:
                return (
                    <div className="flex justify-center ">
                        <img className="invisible " src="/bg-images/road-year1.png" alt=""></img>
                    </div>
                );
            case 2:
                return (
                    <div className="flex justify-center">
                        <img className="invisible" src="/bg-images/road-year2.png" alt=""></img>
                    </div>
                );
            case 3:
                return (
                    <div className="flex justify-center">
                        <img className="invisible" src="/bg-images/road-year3.png" alt=""></img>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-frame">
            <div
                className={`main ${activeYear === 1 ? "bg-road1" : ""} ${
                    activeYear === 2 ? "bg-road2" : ""
                } ${activeYear === 3 ? "bg-road3" : ""} overflow-x-hidden min-[500px]:pb-0 pb-72`}
            >
                <div className="">
                    <div className="roadmap-title fmb text-5xl sm:text-7xl text-center text-shadow sm:mt-12 mt-[45px]  z-10">
                        ROADMAP
                    </div>
                    <div className="sm:mt-[80px] mt-[calc(10px+10vw)] min-[400px]:mt-[calc(15px+12vw)]">
                        <div className="flex justify-center md:gap-6 gap-4 py-4 mx-5 text-[10px] md:text-xs ">
                            <button
                                className={`bg-transparent hover:bg-[#E26E5D] border-3 border-white hover:border-[#E26E5D] fmb p-2 w-32 text-[10px] sm:w-auto sm:text-base
                                ${activeYear === 1 ? "active" : ""}`}
                                style={{
                                    backgroundColor: activeYear === 1 ? "#E26E5D" : "transparent",
                                }}
                                onClick={() => handleYearClick(1)}
                            >
                                Year 1
                            </button>
                            <button
                                className={`bg-transparent hover:bg-[#E26E5D] border-3 border-white hover:border-[#E26E5D] fmb p-2 w-32 text-[10px] sm:w-auto sm:text-base  ${
                                    activeYear === 2 ? "active" : ""
                                }`}
                                style={{
                                    backgroundColor: activeYear === 2 ? "#E26E5D" : "transparent",
                                }}
                                onClick={() => handleYearClick(2)}
                            >
                                Year 2
                            </button>
                            <button
                                className={`bg-transparent hover:bg-[#E26E5D] border-3 border-white hover:border-[#E26E5D] fmb p-2 w-32 text-[10px] sm:w-auto sm:text-base  ${
                                    activeYear === 3 ? "active" : ""
                                }`}
                                style={{
                                    backgroundColor: activeYear === 3 ? "#E26E5D" : "transparent",
                                }}
                                onClick={() => handleYearClick(3)}
                            >
                                Year 3
                            </button>
                        </div>
                    </div>
                    <br />
                    {activeYear === 1 && (
                        <>
                            <div
                                className="absolute inset-0 min-[680px]:top-[450px] top-[280px] flex items-start justify-center h-[200px]"
                                style={{
                                    transform: `translateY(${currentCarPosition}px)`,
                                    transition: isCarMoving ? "transform 7s" : "none",
                                }}
                            >
                                <div className="relative">
                                    <img
                                        src="/car.png"
                                        className="car md:mr-[250px] mr-[220px]"
                                        alt="Car"
                                        size={30}
                                    />
                                </div>
                            </div>
                            <div className="absolute inset-0 min-[680px]:top-[400px] top-[400px] h-[100px] md:mt-[300px] mt-[300px]  min-[680px]:mt-[900px] items-center justify-center mr-[220px] md:mr-[250px] flex gap-24 min-[680px]:gap-36 overflow-hidden z-10">
                                <img src="/traffic-barrier-1.png" alt="Traffic Barrier 1" />
                            </div>
                        </>
                    )}
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
