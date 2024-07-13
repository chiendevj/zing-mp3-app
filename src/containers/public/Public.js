import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Player, SidebarLeft, SidebarRight, Header } from '../../components';
import Scrollbars from 'react-custom-scrollbars-2';

function Public() {
    const [isSidebarRightVisible, setIsSidebarRightVisible] = useState(false);

    const toggleSidebarRight = () => {
        setIsSidebarRightVisible(!isSidebarRightVisible);
    }

    return (
        <div className='w-full min-h-screen flex flex-col bg-main-300 overflow-hidden'>
            <div className='flex flex-auto w-full '>
                <div className='w-[240px] flex-none '>
                    <SidebarLeft />
                </div>
                <div className='flex flex-col flex-auto relative'>
                    <div className={`fixed z-20 top-0 left-[240px] ${isSidebarRightVisible ? 'right-[330px]' : 'right-0'} h-[70px] px-14 flex items-center bg-main-300 shadow-lg transition-all duration-300`}>
                        <Header />
                    </div>
                    <Scrollbars style={{ width: '100%', height: '100%' }} autoHide>
                        <div className='flex-auto px-14 mt-[90px] mb-5 pb-[90px]'>
                            <Outlet />
                        </div>
                    </Scrollbars>
                    <div className={`fixed top-0 right-0 bottom-0 shadow-2xl w-[330px] bg-main-300 transition-transform duration-500
                                    ${isSidebarRightVisible ? 'transform-none' : 'transform translate-x-full'}`}>
                        <SidebarRight />
                    </div>
                </div>
            </div>
            <div className='fixed bottom-0 left-0 right-0 h-[90px] w-full z-10'>
                <Player toggleSidebarRight={toggleSidebarRight} isSidebarRightVisible={isSidebarRightVisible} />
            </div>
        </div>
    )
}

export default Public;
