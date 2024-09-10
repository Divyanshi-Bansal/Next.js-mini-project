"use client"
import { useRouter } from 'next/navigation';
import React from 'react';


type ParamsType = {
    product_sec_id: string,
    review_id: number
}

const page = ({params} : {params:ParamsType}) => {
  const router = useRouter();
  return (
    <div>
      <h1>Review {params.review_id} for product sec {params.product_sec_id}</h1>
      <button onClick={()=>{
        router.replace('/order-product');
      }}>Order</button>
    </div>
  )
}

export default page
