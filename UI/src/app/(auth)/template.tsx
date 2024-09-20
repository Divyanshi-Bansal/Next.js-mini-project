"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import '../globals.css';

// reinitialize the state, child of layout file
// layout >> template >> page

const Template = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    const navLinks = [
        {name: "Login", href:"/login"},
        {name: "Register", href:"/register"},
        {name: "Forgot Password", href:"/forgot-pwd"}
    ];

    const pathname = usePathname();

    const [input, setInput] = useState("");

  return (
    <div>
        <h1>Template file</h1>
        <div>
            <input value={input} onChange={(e)=>{
                setInput(e.target.value);
            }}
            style={{border:"1px solid black", padding:"5px", margin:"9px"}}
            />
        </div>
        {navLinks.map((item, index) =>{
            const isActive = pathname.startsWith(item.href);
            return (
                <>
                    <button key={item.name + "btn"} >
                        <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} style={isActive ? {fontWeight:"bold", margin:"8px"}:{margin:"5px"}} key={item.name} href={item.href}>{item.name}</Link>
                    </button>
                </>
            )
        })}
      {children}
    </div>
  )
}

export default Template

