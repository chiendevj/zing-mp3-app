import React, { memo } from 'react';
import icons from '../untils/icons';
import moment from 'moment';
import 'moment/locale/vi';

import * as actions from '../store/actions';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

function SongReleaseItem({ item, order, percent }) {
    moment.locale('vi')
    const dispatch = useDispatch();
    const handleCLickSong = (sid) => {
        dispatch(actions.setCurSongId(sid));
        dispatch(actions.playAlbum(true));
        dispatch(actions.play(true));
    }
    const textOrders = [
        '#4a90e2', '#27bd9c', '#e35050'
    ]
    return (
        <div className={` ${order ? 'bg-[rgba(239,216,255,0.7)]' : 'hover:bg-main-200 hover:border-main-200'} group flex gap-2 p-[10px] rounded cursor-pointer items-center justify-between w-full`}>
            <div className='flex gap-2 items-center'>
            {order &&
                <span
                    style={{
                        '-webkit-text-stroke': `1px ${textOrders[order - 1]}`
                    }}
                    className='text-4xl mx-2 text-transparent'>
                    {order}
                </span>
            }
            <div className='relative rounded overflow-hidden w-[60px] h-[60px]'>
                <img
                    src={item?.thumbnailM}
                    alt={item?.title}
                    title={item?.title}
                    className='w-full h-auto transform transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-opacity duration-300'>
                    <button
                        onClick={() => { handleCLickSong(item.encodeId) }}
                        className='absolute z-10 text-white opacity-0 group-hover:opacity-100 p-1 transition-opacity duration-200'
                    >
                        <icons.MdPlayArrow size={25} />
                    </button>
                </div>
            </div>
            <div className='flex flex-col mt-2'>
                <span
                    onClick={() => { handleCLickSong(item.encodeId) }}
                    className={`${order ? 'text-[#a995b7]' : 'text-main-600'} text-sm font-medium`}>
                    {item?.title.length >= 30 ? `${item?.title.trim().slice(0, 30)}...` : item?.title}
                </span>
                <div className='text-xs text-main-700 font-normal'>
                    {item?.artists &&
                        item.artists.map((artist, index) => (
                            <NavLink
                                key={artist.id}
                                to={`/${artist.alias}`}
                                className="cursor-pointer hover:text-main-500 hover:underline"
                            >
                                {artist.name}{artist.spotlight && '★'}
                                {index !== item.artists.length - 1 && ', '}
                            </NavLink>
                        ))}
                </div>
                {!percent &&
                    <div className='text-xs text-main-700'>
                        {moment.unix(item.releaseDate).fromNow()}
                    </div>
                }
            </div>
            </div>
            {percent &&
                <span className={`text-2xl font-bold text-[${textOrders[order-1]}]`}>
                    {`${percent}%`}
                </span>
            }
        </div>
    );
}

export default memo(SongReleaseItem);
