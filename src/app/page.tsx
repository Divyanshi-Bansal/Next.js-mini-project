"use client"

import Image from "next/image";
import { practiceTS } from "./learning/PracticeTS";
import { ThemeContextState } from "./learning/context/ThemeContextState";
import { ReactInTS } from "./learning/ReactInTS";
import { useEffect, useState } from "react";
import Link from "next/link";
// import { ThemeContextState } from "./pages/context/ThemeContext";


// export const metadata = {
//   title:"main page metadata title",
//   content:"main page metadata content",
//   description:"main page metadata discription"
// };

export default function Home() {
  const [url, setUrl] = useState('');

  useEffect(()=>{
    const url = window.location.href;
    setUrl(url);
  },[])

  const TODO_FULL_URL = url + "/todos/ToDo";

  const TODO_BUTTON_STYLE = {
    "border":"1px solid black",
    "boxShadow": "0 0 10px rgba(0, 0, 0, 0.8)",
    "padding":"5px",
    "borderRadius":"7px",
    "display":"flex",
    "alignItems":"center",
    "fontWeight":"bold"
  }
  
  // practiceTS();
  return (
    <main>
      <h1>HOME PAGE</h1>
      <ThemeContextState>
        <ReactInTS />
      </ThemeContextState>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center",margin:"10px"}}>
        <button style={TODO_BUTTON_STYLE}><a href={TODO_FULL_URL}>Check ToDo List</a></button>
      </div>
      <Link href="/product">Product</Link>
    </main>
  );
}
