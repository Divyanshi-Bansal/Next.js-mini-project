import React from 'react'

const page = ({params}:{
    params:{
        multiParams: string[]
    }
}) => {
  return (
    <div>
      <h1>multiple params in single folder structure</h1>
      {params.multiParams.map((item, index) =>
      <>
      <h1>Param {index}: {item}</h1>
      </>
        )}
    </div>
  )
}

export default page
