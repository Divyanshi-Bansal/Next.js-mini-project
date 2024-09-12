import React from 'react'
import Card from '../../cards/Card'
import Link from 'next/link'

const NotificationPage = () => {
  return (
    <Card>
      <p>Notification page</p>
      <div>
        <button>
            <Link href='/complex-dashboard/archived'>Archived</Link> 
            {/* you can't load this route url on browser, it'll show 404.
            hence it's a sub navigation within slots, achived folder is in slot until unless the unmatched components have their default page*/}
        </button>
      </div>
    </Card>
  )
}

export default NotificationPage
