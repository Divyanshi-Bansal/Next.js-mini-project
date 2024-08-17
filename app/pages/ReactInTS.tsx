"use client"; //use to tell them it is a UI level component

import { useContext, useState } from "react";
import PracticeContext from "./context/PracticeContext";

export function ReactInTS(){
    type USERTYPE = {
        name:string
    }

    const [user, setUser] = useState("Hello from typescript in react");
    const [usertype, setUserType] = useState<USERTYPE | null>(null);

    // const {getName} = useContext(PracticeContext);
    //need to check context in typescript

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        console.log("e.target.value in handle change: ", e.target.value);
        setUser(e.target.value);
        setUserType({
            name:"dnot"
        })
    }

    return(
        <div>
            <input onChange={(e) => handleChange(e)} type="text" value={user}></input>
            {usertype && <h1>{usertype.name}</h1>}
        </div>
    )
}