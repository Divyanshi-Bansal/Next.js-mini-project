import React from 'react'

const page = ({params}:{
    params:{product_sec_id: string}
}) => {
  return (
    <div>
      <h1>Review list page for product {params.product_sec_id} </h1>
      <ol style={{display:"flex", flexDirection:"column"}}>
        <a href="">Review 1</a>
        <a href="">Review 2</a>
        <a href="">Review 3</a>
      </ol>
    </div>
  )
}

export default page
