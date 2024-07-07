import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarLeft, SidebarRight } from '../../components'
function Public() {
  return (
    <div className='w-full flex'>
      <div className='w-[240px] flex-none  bg-[#cce0e0]'>
        <SidebarLeft />
      </div>
      <div className='flex-auto bg-bgPrimary'>
        <Outlet />
      </div>
      <div className='w-[330px] flex-none bg-red-300'>
        <SidebarRight />

      </div>
    </div>
  )
}

export default Public