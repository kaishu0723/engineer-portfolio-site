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
    const products = [//I'll edit this
        {
            title: "Simple Task Note",
            description: "Next.jsフレームワークを利用した素早く記述できる。",
            media: "/images/to-do-list.png",
            link: "https://github.com/kaishu0723/to-do-list",
            tools: ["TypeScript", "Next.js"],
        },
        {
            title: "Character Counter",
            description: "文字数をカウントするサービスです。",
            media: "/images/character-counter.png",
            link: "https://character-counter-seven.vercel.app/",
            tools: ["TypeScript", "Next.js", "Tailwind CSS"],
        },
        {
            title: "Schedule",
            description: "友人間で空いてる日を共有するための簡易プラットフォーム",
            media: "/images/schedule.png",
            link: "https://schedule-sepia.vercel.app/",
            tools: ["TypeScript", "Next.js", "Tailwind CSS", "FireBase"],
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
        <div className="my-[100px]">
            <h2 className="text-6xl text-center gText mb-12">Products</h2>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex p-8"
                columnClassName="p-2"
                id="products"
            >
                {
                    products.map((product, index) => (
                        <div key={index} className="my-4 w-auto h-auto min-w-[320px] min-h-[350px] rounded-md shadow-lg relative overflow-hidden bg-white bottom-0 hover:bottom-4 trandition-all duration-300">
                            <a href={product.link}>
                                <div className="w-[100%] h-[120px] relative">
                                    <Image
                                        src={product.media}
                                        alt="media"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl p-4 font-medium text-black">{product.title}</h3>
                                <p className="text-gray-400 px-4">{product.description}</p>
                                <ul className="flex flex-wrap absolute bottom-4 w-4/5">
                                    {product.tools.map((tool, id) => (
                                        <li key={id} className="bg-gray-100 rounded-md shadow-sm p-2 ml-2 mt-2">{tool}</li>
                                    ))}
                                </ul>
                            </a>
                        </div>
                    ))
                }
            </Masonry>
        </div>
    );
}

export default products;