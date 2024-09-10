import React from 'react';

type ParamsType = {
    product_sec_id: string,
    review_id: number
}

const page = ({params} : {params:ParamsType}) => {
  return (
    <div>
      <h1>Review {params.review_id} for product sec {params.product_sec_id}</h1>
    </div>
  )
}

export default page
