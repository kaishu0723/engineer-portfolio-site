//memo
//const products
//
"use client"
import Image from "next/image";
import React from "react";
import Masonry from "react-masonry-css";

const products = () => {
    const breakpointColumnsObj = {
        default: 4,
        1320: 3,
        1000: 2,
        680: 1,
    };
    const products = [
        {
            title: "Character Counter",
            description: "文字数をカウントするサービスです。",
            media: "/images/character-counter.png",
            link: "https://character-counter-seven.vercel.app/",
            tools: ["TypeScript", "Next.js", "Tailwind CSS"],
        },
        {
            title: "New Project",
            description: "製作中...",
            media: "/images/comingSoon.png",
            link: "https://github.com/kaishu0723/",
            tools: [],
        },
    ]
    return (
        <div className="py-[100px] bg-gray-100">
            <h2 className="text-6xl text-center gText mb-12">Products</h2>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex p-8"
                columnClassName="p-2"
                id="products"
            >
                {
                    products.map((product, index) => (
                        <div key={index} className="my-4 w-auto min-w-[320px] h-[180px] rounded-md shadow-lg relative overflow-hidden bg-black bottom-0 hover:bottom-4 hover:h-[280px] trandition-all duration-300">
                            <a href={product.link}>
                                <div className="w-[100%] h-[180px] relative">
                                    <Image
                                        src={product.media}
                                        alt="media"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="block p-4 text-white w-[100%] h-auto">
                                    <h3 className="text-2xl">{product.title}</h3>
                                    <p>{product.description}</p>
                                </span>
                            </a>
                        </div>
                    ))
                }
            </Masonry>
        </div>
    );
}

export default products;