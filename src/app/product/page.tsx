"use client"

import { Metadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

// export const metadata : Metadata = {
//   title:"Product" //it will replace %s in title of template in layout
// }

// export const metadata : Metadata = {
//   title:{
//     absolute:"Product" //title will be Product only
//   }
// }
const ProductPage = () => {
const router = useRouter();
  
  const productNo = 5;

  return (
    <div>
      <h1>Product home page</h1>
      <Link href="./">Home</Link>
      <p><Link href="product/1">Product sec 1</Link></p>
      <p><Link href="product/2">Product sec 2</Link></p>
      <p><Link href="product/3">Product sec 3</Link></p>
      <p><Link href={`product/${productNo}`}>Product sec {productNo}</Link></p>
      <button onClick={()=>{
        router.replace('/order-product');
      }}>Order</button>
    </div>
  )
}

export default ProductPage
