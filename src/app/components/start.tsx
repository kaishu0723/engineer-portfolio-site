"use client"

import { useState , useEffect } from "react";

const Start = () => {
    const [show,setShow]=useState(true);
    useEffect(()=>{
        const timer=setTimeout(() => {
            setShow(false)
        }, 3000);
        return ()=> clearTimeout(timer)
    },[]);
    if(!show) return null
    return (
        <div className="fixed z-50 w-screen h-screen bg-cover bg-center bg-start-bg mt-8"></div>
    );
}

export default Start;