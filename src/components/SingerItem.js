import React, { memo } from 'react'
import icons from '../untils/icons';
import { NavLink } from 'react-router-dom';
import numeral from 'numeral';

function SingerItem({ artist }) {

    return (
        <>
            <div className='w-1/4 h-full px-[14px] flex flex-col items-center' key={artist.encodeId}>
                <img src={artist.thumbnailM} alt="" className='rounded-full' />
                <NavLink
                    key={artist.id}
                    to={`/${artist.alias}`}
                    className='text-sm text-main-600 font-medium mt-5 cursor-pointer hover:text-main-500 hover:underline'>

                    {artist.name}
                </NavLink>

                <span className='text-xs text-main-700 font-normal mt-1'>{numeral(artist?.totalFollow).format('0a').toUpperCase()} quan tâm</span>
                <div className='text-main-100 mt-4 flex bg-main-500 rounded-full py-[6px] px-[20px] text-xs items-center gap-1'>
                    {<icons.RiUserAddLine size={16} className='font-medium text-sm' />} QUAN TÂM
                </div>
            </div>
        </>
    )
}

export default memo(SingerItem)