/* eslint-disable @next/next/no-img-element */
"use client";
import "./roadmap.scss";
import React, { useEffect } from "react";

export default function useRoadmap() {
    const [activeYear, setActiveYear] = React.useState(null);


    useEffect(() => {
        setActiveYear(1);
    }, []);

    const handleYearClick = (year) => {
        setActiveYear(year);
    };

    const renderContent = () => {
        switch (activeYear) {
            case 1:
                return (
                        <div className="bg-towers flex justify-center">
                            <img
                            className="invisible"
                            src="/bg-images/road-year1.png"
                            alt=""
                            >
                            </img>
                        </div>
                );
            case 2:
                return (
                    <div className='flex bg-towers justify-center'>
                       <img
                            className="invisible"
                            src="/bg-images/road-year2.png"
                            alt=""
                            ></img>
                    </div>
                );
            case 3:
                return (
                    <div className="flex bg-towers justify-center">
                        <img
                            className="invisible"
                            src="/bg-images/road-year3.png"
                            alt=""
                            ></img>
                    </div>
                );
            default:
                return null;
        }
    };
    return (
        <>
            <div className={`main ${activeYear === 1 ? "bg-road1" : ""} ${activeYear === 2 ? "bg-road2" : ""} ${activeYear === 3 ? "bg-road3" : ""} overflow-x-hidden`}>
                <div className="">
                    <div className="roadmap-title fmb text-4xl sm:text-7xl text-center mt-14 z-10">ROADMAP</div>
                    <div className="bg-blur mt-8">
                        <div className="flex justify-center gap-6 py-4">
                        <button
        className={`bg-transparent hover:bg-[#E26E5D] border-3 border-white hover:border-[#E26E5D] fmb p-2 w-32 text-sm sm:w-auto sm:text-base ${
          activeYear === 1 ? "active" : ""
        }`}
        style={{
          backgroundColor: activeYear === 1 ? "#E26E5D" : "transparent",
        }}
        onClick={() => handleYearClick(1)}
      >
        Year 1
      </button>
      <button
        className={`bg-transparent hover:bg-[#E26E5D] border-3 border-white hover:border-[#E26E5D] fmb p-2 w-32 text-sm sm:w-auto sm:text-base ${
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
        className={`bg-transparent hover:bg-[#E26E5D] border-3 border-white hover:border-[#E26E5D] fmb p-2 w-32 text-sm sm:w-auto sm:text-base ${
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
                    {renderContent()}
                </div>
            </div>
        </>
    );
}
