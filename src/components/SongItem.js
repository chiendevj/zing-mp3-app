import React, { memo } from 'react'
import icons from '../untils/icons'
import moment from 'moment';
import * as actions from '../store/actions'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function SongItem({ item, display, index, hiddenAlbum }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { pid } = useParams();

    const handleClickAlbum = (item) => {
        const albumPath = item?.link.split('.')[0]
        navigate(albumPath)
    }



    const handleCLickSong = (sid) => {
        dispatch(actions.setCurSongId(sid))
        dispatch(actions.setCurAlbumId(pid));
        // dispatch(actions.playAlbum(true))
        dispatch(actions.play(true))
    }
    const textOrders = ['#4a90e2', '#27bd9c', '#e35050'];

    return (
        <div className='group flex w-full gap-1 text-xs text-main-700 font-semibold justify-between items-center p-[10px] border-b border-[#c4cece] rounded hover:bg-main-200 hover:border-main-200 cursor-pointer'>
            <div className='flex w-full'>
                <div className={`w-full flex-auto text-start flex items-center gap-3`}>
                    {display ? (
                        <div className='flex items-center justify-center w-10 h-10 px-8'>
                            <span className='text-sm  font-normal px-8 text-nowrap'>Gợi ý</span>
                        </div>
                    ) : index ? (
                        <div className={`flex items-center justify-center w-10 h-10 ${hiddenAlbum ? 'px-2' : 'px-8'}`}>
                            <span
                                style={{
                                    '-webkit-text-stroke': `1px ${index === 1 ? textOrders[0] : index === 2 ? textOrders[1] : index === 3 ? textOrders[2] : '#32323d'}`
                                }}
                                className='text-3xl text-transparent text-center font-normal'>{index}</span>
                        </div>
                    ) : (
                        <span>{<icons.PiMusicNotes size={14} />}</span>
                    )}
                    <div className='relative rounded overflow-hidden w-10 h-10'>
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
                    <div className='flex flex-col'>
                        <span onClick={() => { handleCLickSong(item.encodeId) }} className='w-full text-sm text-[#32323d] font-medium'>{item?.title.length >= 20 ? `${item?.title.trim().slice(0, 20)}...` : item?.title} <span>{item?.err}</span> </span>
                        <div className='text-xs text-main-700 font-normal'>
                            {item?.artists && hiddenAlbum ? (
                                <>
                                    {item?.artists?.slice(0, 2).map((artist, index) => (
                                        <NavLink
                                            key={artist?.id}
                                            to={`/${artist?.alias}`}
                                            className="cursor-pointer hover:text-main-500 hover:underline"
                                        >
                                            {artist?.name}{artist?.spotlight && '★'}
                                            {index < item?.artists?.length - 1 && ', '}
                                        </NavLink>
                                    ))}
                                    {item?.artists?.length > 2 && '...'}
                                </>
                            )
                                :
                                (item?.artists?.map((artist, index) => (
                                    <NavLink
                                        key={artist?.id}
                                        to={`/${artist?.alias}`}
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
                {!hiddenAlbum &&
                    <div className='w-1/3 flex-none text-start flex items-center'>
                        <span className='text-main-700 font-normal hover:underline hover:text-main-500' onClick={() => handleClickAlbum(item?.album)}>
                            {item?.album?.title || 'UnKnown'}
                        </span>
                    </div>
                }
            </div>
            <div className='text-end text-main-700 font-normal '>{moment.duration(item?.duration, 'seconds').format('hh:mm:ss')}</div>
        </div>
    )
}

export default memo(SongItem)
