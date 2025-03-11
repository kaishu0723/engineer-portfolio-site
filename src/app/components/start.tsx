"use client"

import { useState, useEffect } from "react";

const Start = () => {
    const [show, setShow] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
        }, 3000);
        return () => clearTimeout(timer)
    }, []);
    return (
        <div className={`fixed z-50 w-screen h-screen bg-black mt-8 flex items-center ${show ? "block" : "hidden"}`}>
            <div className="w-[100%]">
                <h1 className="w-[100%] h-1/2 text-6xl text-center text-white">Kaishu.dev</h1>
                <div className="bg-white w-4/5 h-[10px] mx-auto flex items-center rounded-lg my-4">
                    <div className={`gBack w-[80%] h-[8px] ml-[1px] rounded-lg transition-all duration-[300ms]`}></div>
                </div>
            </div>
        </div>
    );
}

export default Start;