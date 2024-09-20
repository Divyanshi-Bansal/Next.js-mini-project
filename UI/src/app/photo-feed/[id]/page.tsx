import React from 'react';
import wondersData from '../data';
import Image from 'next/image';

const Photo = ({params}:{params:{
    id:number
}}) => {
  return (
    <div>
      <h1>{wondersData[params.id-1].title}</h1>
      <div style={{
        display:"flex", flexDirection:"column", padding:"20px",margin:"30px",
        alignItems:"center",justifyContent:"center", textAlign:"center"
      }}>
        <Image src={wondersData[params.id-1].photo} alt='image' id={params.id+""} width={200} height={200} />
        <div style={{
            margin:"10px"
        }}>
            <span>{wondersData[params.id-1].description}</span>
        </div>
      </div>
    </div>
  )
}

export default Photo
