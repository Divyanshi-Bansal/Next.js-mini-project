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
        </button>
      </div>
    </Card>
  )
}

export default NotificationPage
