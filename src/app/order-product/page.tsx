"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

const OrderProductPage = () => {
    const router = useRouter();
    const handleClick = () =>{
        console.log("Order is placed successfully");
        // router.push('/');
        router.back(); //from where this component called
        // router.replace('/');
    }
  return (
    <div>
      <h1>Order Product Page</h1>
      <button onClick={handleClick}>Place Order</button>
      <button onClick={()=>{
        router.push("/product");
      }}>Product</button>
    </div>
  )
}

export default OrderProductPage
