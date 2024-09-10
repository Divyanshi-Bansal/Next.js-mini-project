"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import '../globals.css';

const Layout = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    const navLinks = [
        {name: "Login", href:"/login"},
        {name: "Register", href:"/register"},
        {name: "Forgot Password", href:"/forgot-pwd"}
    ];

    const pathname = usePathname();

  return (
    <div>
        {navLinks.map((item, index) =>{
            const isActive = pathname.startsWith(item.href);
            return (
                <>
                    <button key={item.name + "btn"} >
                        <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} key={item.name} href={item.href}>{item.name}</Link>
                    </button>
                </>
            )
        })}
      {children}
    </div>
  )
}

export default Layout

