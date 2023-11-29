"use client"
import React, { useState } from 'react'
import SideMenu from '@/components/dashboard/Sidebar'
import DashboardNavbar from '@/components/dashboard/DashboardNavbar'
import TabContent from '@/components/dashboard/Tab'

const page = () => {
  const [activeTab, setActiveTab] = useState(null)
  return (
    <div className='flex'>
        <div>
            <SideMenu setActiveTab={setActiveTab}/>
        </div>
        <div className='w-full'>
            <DashboardNavbar modeId={activeTab}/>
            <TabContent activeTab={activeTab} />
        </div>
    </div>
  )
}

export default page