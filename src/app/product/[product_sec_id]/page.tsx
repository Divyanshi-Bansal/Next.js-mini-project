import React from 'react'

const page = ({params}:{
    params: {product_sec_id: string}
}) => {
  return (
    <div>
      <h1>product dynamic route page: {params.product_sec_id}</h1>
    </div>
  )
}

export default page
