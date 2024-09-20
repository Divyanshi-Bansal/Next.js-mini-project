"use client";

import React from 'react';
import wondersData from './data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const PhotoFeedPage = () => {
    const router = useRouter();
    const handleImageClick = (id:number) =>{
      console.log("route url after clicking on image");
        router.push(`/photo-feed/${id}`);
    }
  return (
    <div>
      <h1>Photo feed page</h1>
      <div style={{
            display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px,1fr))",
            gap:"20px",padding:"20px",border:"1px solid black"
        }}>
        {wondersData.map((item, index)=>{
            return <div key={index} style={{
                cursor:"pointer",display:"flex",flexDirection:"column", alignItems:"center",
                border:"1px solid yellow",width:"200px", height:"250px"
            }} onClick={()=>handleImageClick(item.id)}>
                {/* <Link href={`/photo-feed/${item.id}`}> */}
                <Image src={item.photo} alt='image' id={index+""} width={150} height={150}/>
                {/* </Link> */}
                    <p>{item.title}</p>
            </div>
        }
        )}
      </div>
    </div>
  )
}

export default PhotoFeedPage
