import { useState } from "react";
import PracticeContext from "./practiceContext";
import { ReactInTS } from "../ReactInTS";

export function HelperFunction(props:any){
    const [num, setNum] = useState(1);
    function getName(){
        return "name";
    }
    return (
        <PracticeContext.provider value={{
            num, setNum, getName
        }}>
            <ReactInTS/>
        </PracticeContext.provider>
    )
}