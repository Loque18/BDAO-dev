"use client";

import "./treasury.scss";
import Image from "next/image";

export default function Treasury() {
    const items = [
        {
            img: "/media/models/orcania.svg",
            company: "Orcania",
            name: "OCA",
            price: "$15,000",
            holdings: 100,
        },
        {
            img: "/media/models/orcania.svg",
            company: "Orcania",
            name: "OCA",
            price: "$15,000",
            holdings: 100,
        },
        {
            img: "/media/models/orcania.svg",
            company: "Orcania",
            name: "OCA",
            price: "$15,000",
            holdings: 100,
        },
        {
            img: "/media/models/orcania.svg",
            company: "Orcania",
            name: "OCA",
            price: "$15,000",
            holdings: 100,
        },
        {
            img: "/media/models/orcania.svg",
            company: "Orcania",
            name: "OCA",
            price: "$15,000",
            holdings: 100,
        },
        {
            img: "/media/models/orcania.svg",
            company: "Orcania",
            name: "OCA",
            price: "$15,000",
            holdings: 100,
        },
        {
            img: "/media/models/orcania.svg",
            company: "Orcania",
            name: "OCA",
            price: "$15,000",
            holdings: 100,
        },
        {
            img: "/media/models/orcania.svg",
            company: "Orcania",
            name: "OCA",
            price: "$15,000",
            holdings: 100,
        },
        {
            img: "/media/models/orcania.svg",
            company: "Orcania",
            name: "OCA",
            price: "$15,000",
            holdings: 100,
        },
    ];

    return (
        <div className="max-w-screen-xl flex flex-col gap-12 lg:mx-auto p-4 mt-12 pb-44">
            <h1 className="fmb text-[12px] font-normal">
                Total Value: <span className="fmb text-[12px] font-semibold">$150,000</span>
            </h1>
            <div>
                <div className="flex justify-center items-center fmb text-[12px] font-normal">
                    <div className="flex-1 flex justify-start items-center gap-20">
                        <h1 className="ml-5 text-start">#</h1>
                        <h1 className="text-start">Name</h1>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <h1 className="text-center">Price</h1>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <h1 className="text-end">Holdings</h1>
                    </div>
                </div>
                <hr
                    className="my-8"
                    style={{ strokeWidth: "1px", stroke: "rgba(255, 255, 255, 0.50)" }}
                />
                <div className="flex flex-col gap-10">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center bg-[#E78A74] py-5 text-[14px] font-semibold"
                            style={{ borderRadius: "5px", background: "rgba(231, 138, 116, 0.15)" }}
                        >
                            <div className="flex-1 flex justify-start items-center gap-20">
                                <h1 className="ml-5 text-start">{index + 1}</h1>
                                <div className="flex gap-2 justify-center items-center">
                                    <Image alt="" width={25} height={25} src={item.img} />
                                    <h1 className="font-semibold">{item.company}</h1>
                                    <h1 className="text-[#E26E5D] font-semibold">{item.name}</h1>
                                </div>
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                                <h1 className="text-center">{item.price}</h1>
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                                <h1 className="text-end">{item.holdings}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
