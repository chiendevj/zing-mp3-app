import React, { memo } from 'react';
import icons from '../untils/icons';
import moment from 'moment';
import 'moment/locale/vi';

import * as actions from '../store/actions';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

function SongReleaseItem({ item }) {
    const dispatch = useDispatch();
    const handleCLickSong = (sid) => {
        dispatch(actions.setCurSongId(sid));
        dispatch(actions.playAlbum(true));
        dispatch(actions.play(true));
    }

    moment.locale('vi')
    return (
        <div className='group flex gap-2 p-[10px] rounded hover:bg-main-200 hover:border-main-200 cursor-pointer'>
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
                    className='text-sm text-[#32323d] font-medium'>
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
                                {artist.name}
                                {index !== item.artists.length - 1 && ', '}
                            </NavLink>
                        ))}
                </div>
                <div className='text-xs text-main-700'>
                    {moment.unix(item.releaseDate).fromNow()}
                </div>
            </div>
        </div>
    );
}

export default memo(SongReleaseItem);
