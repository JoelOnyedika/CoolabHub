"use client"
import React, { useState } from 'react'
import SideMenu from '@/components/Sidebar'
import DashboardNavbar from '@/components/DashboardNavbar'
import TabContent from '@/components/tabs/tab'

const page = () => {
  const [activeTab, setActiveTab] = useState(null)
  return (
    <div className='flex'>
        <div>
            <SideMenu setActiveTab={setActiveTab}/>
        </div>
        <div>
            <DashboardNavbar modeId={activeTab}/>
            <TabContent activeTab={activeTab} />
        </div>
    </div>
  )
}

export default page