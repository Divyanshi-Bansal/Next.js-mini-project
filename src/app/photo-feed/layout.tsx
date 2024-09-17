"use client";
import React from 'react'

const PhotoLayout = (props:{
    children: React.ReactNode;
    modals: React.ReactNode;
}) => {
    const showModal = props.modals != undefined ? true : false;
  return (
    // <div>
    //     {
    //         showModal && 
    //         props.modals
    //     }
    //     {props.children}
    // </div>
    <>
    {props.modals}
    {props.children}
    </>
  )
}

export default PhotoLayout
