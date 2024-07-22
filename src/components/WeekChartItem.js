import React from 'react'
import { NavLink } from 'react-router-dom';
import SongItem from './SongItem';

const WeekChartItem = ({ item }) => {


    return (
        <div className='1300:w-1/3 w-full  bg-main-100 mx-[15px] my-2 1300:my-0 p-6 1300:p-4 rounded-2xl'>
            <div className='w-full'>
                <NavLink
                    to={`${item?.link?.split('.')[0]}`}
                    className='w-full text-main-500 font-bold text-2xl'>
                    {item?.chartId === 1 ? 'Việt Nam' : item?.chartId === 50 ? 'US - UK' : 'K-Pop'}
                </NavLink>
                <div className='w-full my-2'>
                    {item?.items && item?.items?.slice(0, 5).map((item, index) => (
                        <SongItem item={item} hiddenAlbum={true} index={index + 1} />
                    ))}
                </div>
                <div className='flex justify-center mt-3'>
                    <NavLink
                        to={`${item?.link?.split('.')[0]}`}
                        className='font-medium px-5 py-2 border-2 border-main-500 hover:bg-[rgba(14,128,128,0.1)] rounded-full text-sm text-main-500'>
                        Xem tất cả
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default WeekChartItem