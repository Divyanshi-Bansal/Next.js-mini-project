"use client"

import Image from "next/image";
import { practiceTS } from "./app/learning/PracticeTS";
import { ThemeContextState } from "./app/learning/context/ThemeContextState";
import { ReactInTS } from "./app/learning/ReactInTS";
import { useEffect, useState } from "react";
// import { ThemeContextState } from "./pages/context/ThemeContext";

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
    "border-radius":"7px",
    "display":"flex",
    "align-items":"center",
    "font-weight":"bold"
  }
  
  // practiceTS();
  return (
    <main style={{border:"1px solid red"}}>
      <h1>HOME PAGE</h1>
      <ThemeContextState>
        <ReactInTS />
      </ThemeContextState>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center",margin:"10px"}}>
        <button style={TODO_BUTTON_STYLE}><a href={TODO_FULL_URL}>Check ToDo List</a></button>
      </div>
    </main>
  );
}
