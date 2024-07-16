import React from 'react';
import logoFull from '../assets/logo.svg';
import logoSmall from '../assets/logo_mini.svg';
import { SidebarMenu } from '../untils/menu';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import path from '../untils/path';
import Scrollbars from 'react-custom-scrollbars-2';

const notActiveStyle = 'py-3 1300:px-[25px] 1300:w-full flex gap-2 1300:justify-start justify-center items-center font-semibold text-sm text-gray-500 hover:text-main-500';
const activeStyle = 'bg-main-100 py-3 1300:px-[25px] flex gap-2 1300:justify-start justify-center items-center font-semibold text-sm text-main-500 hover:text-main-500 border-l-4 border-main-500';

function SidebarLeft() {
    const navigate = useNavigate();

    const renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
            backgroundColor: '#0e8080', // Scrollbar color
            borderRadius: '4px',
            width: '4px', // Width of the scrollbar thumb
            right: 'auto', // Override default position to disable
            left: '0px', // Position scrollbar thumb on the left
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
    };

    const renderTrack = ({ style, ...props }) => {
        const trackStyle = {
            right: 'auto', // Override default position to disable
            left: '0px', // Position scrollbar track on the left
            top: '0px', // Position scrollbar track on top
            bottom: '0px', // Position scrollbar track on bottom
            width: '4px', // Width of the scrollbar track
        };
        return <div style={{ ...style, ...trackStyle }} {...props} />;
    };

    return (
        <div className='w-full flex-auto h-full relative bg-main-200'>
            <Scrollbars
                style={{ width: '100%', height: '100%' }}
                autoHide
                renderThumbHorizontal={renderThumb}
                renderThumbVertical={renderThumb}
                renderTrackVertical={renderTrack}
            >
                {/* Logo */}
                <div
                    onClick={() => navigate(path.HOME)}
                    className='h-[70px] w-full 1300:py-[15px] 1300:px-[25px] cursor-pointer flex 1300:justify-start justify-center items-center'
                >
                    {/* Full logo for screens >= 1300px */}
                    <img src={logoFull} alt="Zing MP3" className='hidden 1300:block w-[120px] h-10' />
                    {/* Small logo for screens < 1300px */}
                    <img src={logoSmall} alt="Zing MP3" className='block 1300:hidden w-[45px] h-[45px]' />
                </div>

                {/* Navigation */}
                <div className='flex flex-col mb-5'>
                    {SidebarMenu.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => isActive ? activeStyle : notActiveStyle}
                            title={item.text}
                        >
                            {item.icon}
                            <span className='hidden 1300:block font-medium'>{item.text}</span>
                        </NavLink>
                    ))}
                </div>

                {/* Option */}
                
            </Scrollbars>
        </div>
    );
}

export default SidebarLeft;
