import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as apis from '../apis'
import icons from '../untils/icons'

const {
    AiOutlineHeart, AiFillHeart, RxDotsHorizontal,
    CiShuffle, CiRepeat, MdPlayArrow,
    BiSkipNext, BiSkipPrevious, SlVolume2,
    PiPlaylist
    } = icons

function Player() {

    const [songInfo, setSongInfo] = useState(null)

    const { curSongId } = useSelector(state => state.music);
    console.log(curSongId);

    useEffect(() => {
        const fetchDetail = async () => {
            const response = await apis.getDetailSong(curSongId)
            console.log(response);
            if (response.data.err === 0) {
                setSongInfo(response.data.data)
            }
        }
        fetchDetail()
    }, [curSongId])
    // console.log(songInfo);


    return (
        <div className='flex w-full px-5 h-full items-center bg-main-400'>
            <div className='w-[30%] flex-auto flex items-center gap-2'>
                <img src={songInfo?.thumbnail} alt={songInfo?.title} className='w-16 h-16 rounded-[4px] object-cover' />
                <div className='flex flex-col '>
                    <span className='text-sm text-[#32323d] font-medium'>{songInfo?.title}</span>
                    <span className='text-[12px] text-[#696969] font-normal'>
                        {songInfo?.artists && songInfo.artists.map((artist, index) => (
                            <span key={index}>{artist.name}{index !== songInfo.artists.length - 1 && ', '}</span>
                        ))}
                    </span>
                </div>
                <div className='flex gap-3 pl-2'>
                    <span><AiOutlineHeart size={16} /></span>
                    <span><RxDotsHorizontal size={16} /></span>
                </div>
            </div>
            <div className='w-2/5 flex-auto flex flex-col items-center justify-center gap-1'>
                <div className='flex items-center'>
                    <span className='p-[5px] mx-2 hover:text-main-500'><CiShuffle size={24}/></span>
                    <span className='p-[5px] mx-2 hover:text-main-500'><BiSkipPrevious size={24}/></span>
                    <span className='p-[5px] mx-2 hover:text-main-500 border border-black rounded-full hover:border-main-500'><MdPlayArrow size={24}/></span>
                    <span className='p-[5px] mx-2 hover:text-main-500'><BiSkipNext size={24} /></span>
                    <span className='p-[5px] mx-2 hover:text-main-500'><CiRepeat size={24} /></span>
                </div>
                <div>
                    Time
                </div>
            </div>
            <div className='w-[30%] flex-auto'>
                bf
            </div>
        </div>
    )
}

export default Player