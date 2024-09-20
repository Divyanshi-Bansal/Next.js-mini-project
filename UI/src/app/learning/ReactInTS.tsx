"use client"; //use to tell them it is a UI level component

import { useContext, useState } from "react";
import PracticeContext from "./context/PracticeContext";
import { ThemeContext } from "./context/ThemeContext";

export function ReactInTS(){
    type USERTYPE = {
        name:string
    }

    const [user, setUser] = useState("Hello from typescript in react");
    const [usertype, setUserType] = useState<USERTYPE | null>(null);

    const {state, dispatch} = useContext(ThemeContext);

    console.log(state, dispatch);
    

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        console.log("e.target.value in handle change: ", e.target.value);
        setUser(e.target.value);
        setUserType({
            name:"dnot"
        })
    }

    const handleChangeThemeClick = () => {
        dispatch({
            type: "CHANGE_THEME"
        })
    }
    const handleChangeFontSizeClick = () => {
        dispatch({
            type: "CHANGE_FONTSIZE",
            payload:20
        })
    }

    return(
        <div>
            <input onChange={(e) => handleChange(e)} type="text" value={user} size={user.length} style={{padding:"5px", border:"1px solid black"}}/>
            <div>
                {usertype && <h1>{usertype.name}</h1>}
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
                <button onClick={handleChangeThemeClick} type="submit" style={{border:"1px solid black", color:"black", backgroundColor:"lightblue", padding:"5px", margin:"5px"}}>Change theme</button>
                <button onClick={handleChangeFontSizeClick} type="submit" style={{border:"1px solid black", color:"black", backgroundColor:"lightgreen", padding:"5px", margin:"5px"}}>Change font size</button>
            </div>
        </div>
    )
}