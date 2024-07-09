import React, { useEffect } from 'react'
import iconSong from '../assets/images/player_song.jpg'
import { useSelector } from 'react-redux'
import * as apis from '../apis'
function Player() {
    const { curSongId } = useSelector(state => state.music);
    console.log(curSongId);

    useEffect(() => {
        const fetchDetail = async () => {
            const response = await apis.getDetailSong(curSongId)
            console.log(response);
        }
        fetchDetail()
    },[curSongId])


    return (
        <div className='flex w-full px-5 h-full items-center bg-main-400'>
            <div className='w-[30%] flex items-center gap-2'>
                <img src={iconSong} alt="" className='w-16 rounded-[4px]' />
                <div className='flex flex-col'>
                    <span className='font-medium text-sm text-gray-700'>Cẩm Tú Cầu</span>
                    <span className='text-[12px] font-medium flex gap-1 text-gray-500'>
                        <a href="#">RyO,</a>
                        <a href="#">Huỳnh Văn</a>
                    </span>
                </div>
            </div>
            <div className='w-2/5'>
            </div>
            <div className='w-[30%]'>

            </div>
        </div>
    )
}

export default Player