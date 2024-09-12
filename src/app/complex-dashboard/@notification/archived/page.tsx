import Card from '@/src/app/cards/Card'
import Link from 'next/link'
import React from 'react'

const ArchivedNotificationPage = () => {
  return (
    <Card>
      <p>Archived Notification page</p>
      <div>
        <button>
            <Link href='/complex-dashboard'>Default</Link>
        </button>
      </div>
    </Card>
  )
}

export default ArchivedNotificationPage
