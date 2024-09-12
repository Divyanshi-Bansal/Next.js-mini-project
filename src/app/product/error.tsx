"use client"

// import Error from 'next/error';
import React from 'react';

const ErrorPage = ({error, reset } : {error:Error; reset: () => void}) => { 
  //the reset functionality of error page: on click on reset func, It tries to reload the client component which gives error
    
  return (
    <div style={{color:"red"}}>
      <p >Error Page of product</p>
      <span>Something went wrong with the route url</span>
      <span><br/>{error.message}</span> 
      <button onClick={()=>reset()}>Try Again</button>
      {/* for this uncomment main page code (if block ) */}
    </div>
  )
}

export default ErrorPage
