import React from 'react'
import { Outlet } from 'react-router-dom'
import { Player, SidebarLeft, SidebarRight, Header } from '../../components'
function Public() {
  return (
    <div className='w-full min-h-screen flex flex-col bg-main-300'>
      <div className='h-full flex flex-auto w-full'>
        <div className='w-[240px] flex-none min-h-screen'>
          <SidebarLeft />
        </div>
        <div className='flex-auto'>
          <div className='h-[70px] px-14 flex items-center mb-5'>
            <Header />
          </div>
          <Outlet />
        </div>
        <div className='w-[330px] hidden 1300:flex flex-none bg-red-300 animate-slide-left'>
          <SidebarRight />
        </div>
      </div>
      <div className='fixed bottom-0 left-0 right-0 h-[90px] w-full z-10'>
        <Player />
      </div>
    </div>
  )
}

export default Public