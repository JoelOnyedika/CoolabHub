import React from 'react'
import SideMenu from '@/components/Sidebar'

const page = () => {
  return (
    <div className='flex'>
        <div>
            <SideMenu />
        </div>
        <div>
            page
        </div>
    </div>
  )
}

export default page