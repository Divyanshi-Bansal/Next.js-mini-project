"use client"

import { useReducer, useState } from "react";
import { ActionType, INITIAL_STATE, StateType, ThemeContext } from "./ThemeContext";

export const ThemeContextState = (props: {children:React.ReactNode}) => {

    // const [state, setState] = useState<StateType>(INITIAL_STATE);
    // const [dispatch, setDispatch] = useState<React.Dispatch<ActionType>>(()=>{});
    
    const reducer = (state : StateType, action : ActionType) :StateType  => {
        switch (action.type) {
            case "CHANGE_THEME":
                return {...state, theme: state.theme === "dark" ? "light" : "dark"}
            case "CHANGE_FONTSIZE":
                return {...state, fontSize: action.payload !== undefined ? action.payload : 16};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return(
        <ThemeContext.Provider value={{
            state,
            dispatch
        }}>
            {props.children}
        </ThemeContext.Provider>
        // <></>
    )
}