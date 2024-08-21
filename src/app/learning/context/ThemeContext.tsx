"use client"

import { createContext, useReducer } from "react";
import PracticeContext from "./PracticeContext"

export type StateType = {
    theme: string, 
    fontSize: number
}
export type ActionType = {
    type : "CHANGE_THEME" | "CHANGE_FONTSIZE",
    payload ?: number
}

type PropsType = {
    state: StateType,
    dispatch: React.Dispatch<ActionType>
}

export const INITIAL_STATE :StateType= {
    theme: "dark",
    fontSize:16
}

// const reducer = (state : StateType, action : ActionType) => {
//     switch (action.type) {
//         case "CHANGE_THEME":
//             return {...state, theme: state.theme === "dark" ? "light" : "dark"}
//         case "CHANGE_FONTSIZE":
//             return {...state, fontSize: action.payload};
//         default:
//             return INITIAL_STATE;
//     }
// }

//// in this typescript, we need to specify the type of context, and the value type, which is gonna pass in provider state.
////but in js, we can pass without mentioning it before hand
export const ThemeContext = createContext<PropsType>({
    state:INITIAL_STATE,
    dispatch: () => {}
})

////second way: make provider in same class , first way is to have to diff file 

// export const ThemeContextState = (props:{children:React.ReactNode}) =>{
//     const [state, dispatch] = useReducer(reducer, INITIAL_STATE); //check about reducer again
// //we need to pass state, dispatch in reducer function, need to pass the action in dispatch which tells us that on what action we need to perform or update the state.
// //action is performed by the user, and it must be object, nd in this object we must have type variable to identify on which action we need to perform,
// // we can pass other parameters too for additional info.

//     return (
//         <ThemeContext.Provider value={{state, dispatch}}>
//             {props.children}
//         </ThemeContext.Provider>
//     )
// }