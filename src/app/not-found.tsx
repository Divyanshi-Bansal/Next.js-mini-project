import React from 'react'

//when route is not found, then the pre not found page is displayed to show the message "page route is not found"
// to override the pre defined file, we can make it own  must named as not-found
const notFound = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid black"}}>
      <h1>Page not found</h1>
      <p>Could not find requested resource</p>
    </div>
  )
}

export default notFound
