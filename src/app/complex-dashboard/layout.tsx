"use client";
import React from 'react'

const ComplexDashboardLayout = ({children, users, revenue, notification}: Readonly<{
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notification: React.ReactNode
}>) => {
    // by adding @before folder name, so basically we can't go to that folder's page by route url
    // but we can add these components in layout : parallel routes
  return (
    <div>
      <div>
        {children}
      </div>
      <div style={{display:"flex"}}>
        <div style={{display:"flex", flexDirection:"column"}}>
            <div>{users}</div>
            <div>{revenue}</div>
        </div>
        <div style={{display:"flex"}}>{notification}</div>
      </div>
    </div>
  )
}

export default ComplexDashboardLayout

