import React, { memo } from 'react'
import icons from '../untils/icons';
import { NavLink } from 'react-router-dom';

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

                <span className='text-xs text-main-700 font-normal mt-1'>{(artist.totalFollow / 1000 > 0) ? `${Math.round(artist.totalFollow / 1000)}K` : artist.totalFollow} quan tâm</span>
                <div className='text-main-100 mt-4 flex bg-main-500 rounded-full py-[6px] px-[20px] text-xs items-center gap-1'>
                    {<icons.RiUserAddLine size={16} className='font-medium text-sm' />} QUAN TÂM
                </div>
            </div>
        </>
    )
}

export default memo(SingerItem)