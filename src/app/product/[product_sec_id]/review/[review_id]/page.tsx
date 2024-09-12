"use client"
import { useRouter } from 'next/navigation';
import React from 'react';


type ParamsType = {
    product_sec_id: BigInteger,
    review_id: number
}

const ReviewIdPage = ({params} : {params:ParamsType}) => {
  const router = useRouter();
  const errorfunc = () =>{
    throw new Error("reiew id error page");
  }
  errorfunc();
  return (
    <div>
      <h1>Review {params.review_id} for product sec {params.product_sec_id}</h1>
      <button onClick={()=>{
        router.replace('/order-product');
      }}>Order</button>
    </div>
  )
}

export default ReviewIdPage

// It 
