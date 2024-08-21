import React from 'react'

const Animal = () => {
  return (
    <div>
      <p> example for Nested routes</p>
      <p>route must be /blog/animal</p>
      <p>only route /blog when no file specified and no file is present in this folder, then it will return 404</p>
    </div>
  )
}

export default Animal
