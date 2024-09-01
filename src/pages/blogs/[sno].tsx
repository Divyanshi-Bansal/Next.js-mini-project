import { useRouter } from 'next/router'
import React from 'react'

const Blog = () => {
    const router = useRouter();
    const {sno} = router.query;
  return (
    <div>
      <p>Dynamic route: sno: {sno}, is passed in route.</p>
      <p>by creating file with [QUERY_PARAM], this query param passed through route url</p>
      <p>Its dynamic nested routes</p>
    </div>
  )
}

export default Blog
