import { useState } from "react";

import { ReactInTS } from "../ReactInTS";
import PracticeContext from "./PracticeContext";

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