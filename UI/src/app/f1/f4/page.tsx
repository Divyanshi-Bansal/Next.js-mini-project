import Link from 'next/link'
import React from 'react'

const F4 = () => {
  return (
    <div>
      <h1>F4 page</h1>
      <Link href="/f1/f3">F3 button</Link>
      <br/>
      <Link href="/interceptedFolder">Intercepted Folder Button</Link>
    </div>
  )
}

export default F4
