import React, { ReactNode } from 'react'

const styles = {
       card:{
        border:"1px solid black",
        borderRadius:"10px",
        padding:"40px",
        margin:"20px",
        boxShadow:"0px 8px 8px 4px rgba(0,0,0,0.2)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
       } 
}

const Card = ({children}:{children: ReactNode}) => {
    
  return (
    <div style={styles.card}>
      {children}
    </div>
  )
}

export default Card
