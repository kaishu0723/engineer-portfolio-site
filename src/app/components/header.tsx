"use client";

import Image from "next/image";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [visid, setVisid] = useState(false);
    const handleChange = () => {
        setVisid(!visid);
    }
    return (
        <div className="fixed shadow-lg w-[100%] z-10 bg-white p-4 top-0">
            <nav className="flex items-center relative">
                <h2 className="text-4xl gText ml-6">Kaishu.dev</h2>
                <div className="trandition-all duration-300 hidden sm:block space-x-10 absolute right-24">
                    <a href="#home" className="hover:text-[#64FFFF] transition-all duration-[300ms]"><b>About</b></a>
                    <a href="#products" className="hover:text-[#64FFFF] transition-all duration-[300ms]"><b>Products</b></a>
                    <a href="#skills" className="hover:text-[#64FFFF] transition-all duration-[300ms]"><b>Skills</b></a>
                </div>
                <a href="https://github.com/" className="border-l-4 gBorder pl-4 absolute right-2">
                    <Image
                        src="/images/github_icon.png"
                        alt="github_icon"
                        width={30}
                        height={30}
                    />
                </a>
                <div onClick={handleChange} className={`${visid ? "block" : "hidden"} fixed w-[100%] h-[100%] bg-black/50 left-0 top-0 trandition-all duration-300`}></div>
                <div className={`bg-white w-[300px] min-h-screen trandition-all duration-300 fixed top-0 ${visid ? "right-0" : "right-[-300px]"}`}>
                    <a onClick={handleChange} href="#home" className="block text-center text-2xl my-[100px] hover:text-[#FF64FF] trandition-all duration-300"><b>About</b></a>
                    <a onClick={handleChange} href="#products" className="block text-center text-2xl my-[100px] hover:text-[#FF64FF] trandition-all duration-300"><b>Products</b></a>
                    <a onClick={handleChange} href="#skills" className="block text-center text-2xl my-[100px] hover:text-[#FF64FF] trandition-all duration-300"><b>Skills</b></a>
                </div>
                <button onClick={handleChange} className={`trandition-all duration-300 border-none sm:hidden absolute ${visid ? "right-0" : "right-20"}`}>
                    {
                        visid ?
                            <CloseIcon /> :
                            <MenuIcon />
                    }
                </button>
            </nav>
        </div>
    );
}

export default Header;