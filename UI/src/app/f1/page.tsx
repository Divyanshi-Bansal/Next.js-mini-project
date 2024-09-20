import Link from 'next/link'
import React from 'react'

const F1 = () => {
  return (
    <div>
      <h1>F1 page</h1>
      <div>
        <Link href="/f1/f2">F2 button</Link>
      </div>
    </div>
  )
}

export default F1
