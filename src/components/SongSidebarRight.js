import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions'
import icons from '../untils/icons'
function SongSidebarRight({item, isCurrent}) {
    const dispatch = useDispatch()
    
    const handleCLickSong = (sid) => {
        dispatch(actions.setCurSongId(sid));
        dispatch(actions.playAlbum(true));
        dispatch(actions.play(true));
    };
    
    return (
        <div
            className={`${isCurrent ? 'bg-main-500' : 'bg-transparent hover:bg-main-200' } p-2 rounded-md`}
        >
            <div className='flex gap-2 items-center'>
                <div className='relative rounded overflow-hidden w-10 h-10 group'>
                    <img
                        src={item?.thumbnailM}
                        alt={item?.title}
                        title={item?.title}
                        className='w-full h-auto transform transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute z-20 inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-opacity duration-300'>
                        <button
                            onClick={() => { handleCLickSong(item.encodeId) }}
                            className='absolute z-30 text-white opacity-0 group-hover:opacity-100 p-1 transition-opacity duration-200'
                        >
                            <icons.MdPlayArrow size={20} />
                        </button>
                    </div>
                </div>
                <div className='flex flex-col leading-none'>
                    <span
                        onClick={() => { handleCLickSong(item.encodeId) }}
                        className={`${isCurrent ? 'text-white' : 'text-main-600'} text-sm font-medium`}>
                        {item?.title?.length >= 30 ? `${item?.title.trim().slice(0, 30)}...` : item?.title}
                    </span>
                    <div className={`text-xs ${isCurrent ? 'text-[#ffffff99]' : 'text-main-700'} font-normal`}>
                    {item?.artists.length > 0 ? (
                                <>
                                    {item?.artists?.slice(0, 2).map((artist, index) => (
                                        <NavLink
                                            key={artist.id}
                                            to={`/${artist.alias}`}
                                            className="cursor-pointer hover:underline"
                                        >
                                            {artist.name}{artist.spotlight && '★'}
                                            {index < item.artists.length - 1 && ', '}
                                        </NavLink>
                                    ))}
                                    {item.artists.length > 1 && '...'}
                                </>
                            )
                        :
                        (item?.artists?.map((artist, index) => (
                            <NavLink
                                key={artist.id}
                                to={`/${artist.alias}`}
                                className="cursor-pointer hover:text-main-500 hover:underline"
                            >
                                {artist?.name}{artist?.spotlight && '★'}
                                {index < item?.artists?.length - 1 && ', '}
                            </NavLink>
                        )))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SongSidebarRight