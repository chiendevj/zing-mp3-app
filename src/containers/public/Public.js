import React from 'react'
import { Outlet } from 'react-router-dom'
import { Player, SidebarLeft, SidebarRight, Header } from '../../components'
import Scrollbars from 'react-custom-scrollbars-2';

function Public() {
  return (
    <div className='w-full min-h-screen flex flex-col bg-main-300 overflow-hidden'>
      <div className='flex flex-auto w-full '>
        <div className='w-[240px] flex-none '>
          <SidebarLeft />
        </div>
        <div className='flex flex-col flex-auto '>
          <div className='fixed z-20 top-0 left-[240px] right-0 1300:right-[330px] h-[70px] px-14 flex items-center bg-main-300 shadow-lg'>
            <Header />
          </div>
          <Scrollbars style={{width:'100%', height:'100%',}} autoHide >
          <div className='flex-auto px-14 mt-[90px] mb-5 pb-[90px]'>
            <Outlet />
          </div>
          </Scrollbars>
        </div>
        <div className='w-[330px] hidden 1300:flex flex-none animate-slide-left'>
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
