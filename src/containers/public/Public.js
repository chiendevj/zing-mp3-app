import React from 'react'
import { Outlet } from 'react-router-dom'
import { Player, SidebarLeft, SidebarRight } from '../../components'
function Public() {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <div className='h-full flex flex-auto'>
        <div className='w-[240px] flex-none bg-[#cce0e0]'>
          <SidebarLeft />
        </div>
        <div className='flex-auto bg-bgPrimary'>
          <Outlet />
        </div>
        <div className='w-[330px] flex-none bg-red-300'>
          <SidebarRight />

        </div>
      </div>
      <div className='flex-none h-[90px] bottom-0 left-0 bg-[#c0d8d8] w-full'>
        <Player/>
      </div>
    </div>
  )
}

export default Public