import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Player, SidebarLeft, SidebarRight, Header } from '../../components';
import Scrollbars from 'react-custom-scrollbars-2';

function Public() {
    const renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
            backgroundColor: '#0e8080',
            borderRadius: '4px'
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
    };

    const [isSidebarRightVisible, setIsSidebarRightVisible] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const scrollbarRef = useRef(null);

    const toggleSidebarRight = () => {
        setIsSidebarRightVisible(!isSidebarRightVisible);
    }

    const handleScroll = () => {
        if (scrollbarRef.current) {
            setScrollTop(scrollbarRef.current.getScrollTop());
        }
    };

    useEffect(() => {
        if (scrollbarRef.current) {
            scrollbarRef.current.view.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (scrollbarRef.current) {
                scrollbarRef.current.view.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className='w-full min-h-screen flex flex-col bg-main-300 overflow-hidden'>
            <div className='flex flex-auto w-full'>
                
                <div className='w-[70px] 1300:w-[240px] flex-none '>
                    <SidebarLeft />
                </div>
                <div className='flex flex-col flex-auto relative my-[90px]'>
                    <div 
                    className={`fixed z-20 top-0 1300:left-[240px] left-[70px] ${isSidebarRightVisible ? 'right-[330px]' : 'right-0'} 
                                h-[70px] px-14 flex items-center bg-main-300 transition-all duration-300 
                                ${scrollTop > 0 ? 'shadow-lg' : ''}`}>
                        <Header />
                    </div>
                    <Scrollbars
                        style={{ width: '100%', height: '100%' }}
                        autoHide
                        renderThumbHorizontal={renderThumb}
                        renderThumbVertical={renderThumb}
                        className="scrollbar-container"
                        ref={scrollbarRef}
                    >
                        <div className='flex-auto mb-5'>
                            <Outlet />
                        </div>
                    </Scrollbars>
                    <div className={`fixed top-0 right-0 bottom-0 shadow-lg w-[330px] bg-main-300 transition-transform duration-500
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
