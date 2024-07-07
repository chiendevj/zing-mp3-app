import React from 'react';
import logo from '../assets/logo.svg';
import { SidebarMenu } from '../untils/menu';
import { NavLink } from 'react-router-dom';

const notActiveStyle = 'py-2 px-[25px] flex gap-2 items-center font-bold text-[13px] text-[#32323d]'
const activeStyle = 'py-2 px-[25px] flex gap-2 items-center font-bold text-[13px] text-[#0f7070]'


function SidebarLeft() {
    return (
        <div className='flex flex-col'>
            <div className='max-h-[70px] w-full py-[15px] px-[25px] flex justify-start items-center'>
                <img src={logo} alt="Zing MP3" className='w-[120px] h-10' />
            </div>
            <div className='flex flex-col'>
                {SidebarMenu.map(item => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => isActive ? activeStyle : notActiveStyle}
                    >
                        {item.icon} <span>{item.text}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default SidebarLeft;
