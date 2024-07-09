import React from 'react'
import { Outlet } from 'react-router-dom'
import { Player, SidebarLeft, SidebarRight } from '../../components'
function Public() {
  return (
    <div className='w-full min-h-screen flex flex-col bg-main-300'>
      <div className='h-full flex flex-auto w-full'>
        <div className='w-[240px] flex-none min-h-screen'>
          <SidebarLeft />
        </div>
        <div className='flex-auto'>
          <Outlet />
        </div>
        <div className='w-[330px] hidden 1200:flex flex-none bg-red-300 animate-slide-left'>
          <SidebarRight />
        </div>
      </div>
      <div className='flex-none h-[90px] fixed left-0 bottom-0 w-full'>
        <Player/>
      </div>
    </div>
  )
}

export default Public