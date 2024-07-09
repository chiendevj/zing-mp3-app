import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as apis from '../apis'
import icons from '../untils/icons'

const {
    AiOutlineHeart, AiFillHeart, RxDotsHorizontal,
    CiShuffle, CiRepeat, MdPlayArrow,
    BiSkipNext, BiSkipPrevious, SlVolume2,
    PiPlaylist, SlVolumeOff, MdPause
    } = icons

function Player() {
    const audioEl = new Audio()
    const [songInfo, setSongInfo] = useState(null)
    const [source, setSource] = useState(null)
    // const [isPlaying, setIsPlaying] = useState(false)

    const { curSongId, isPlaying } = useSelector(state => state.music);

    console.log(isPlaying);
    useEffect(() => {
        const fetchDetail = async () => {
            const[res1, res2] = await Promise.all([
                apis.getDetailSong(curSongId),
                apis.getSong(curSongId)
            ])

            if (res1.data.err === 0) {
                setSongInfo(res1.data.data)
            }

            if (res2.data.err === 0) {
                setSource(res2.data.data['128'])
            }
        }
        fetchDetail()
    }, [curSongId])

    useEffect(() => {

    },[])

    const handleTogglePlayMusic = () => { 
        // setIsPlaying(prev => !prev)
     }

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
                <div className='flex gap-5 pl-2'>
                    <span><AiOutlineHeart size={16} /></span>
                    <span><RxDotsHorizontal size={16} /></span>
                </div>
            </div>
            <div className='w-2/5 flex-auto flex flex-col items-center justify-center gap-1'>
                <div className='flex items-center '>
                    <span title='Bật phát ngẫu nhiên' className='p-[5px] cursor-pointer mx-2 hover:text-main-500'><CiShuffle size={22}/></span>
                    <span className='p-[5px] mx-2 hover:text-main-500 cursor-pointer'><BiSkipPrevious size={28}/></span>
                    <span 
                        className='p-[5px] mx-2 hover:text-main-500 cursor-pointer border border-black rounded-full hover:border-main-500'
                        onClick={handleTogglePlayMusic}                        
                    >
                        {isPlaying ? <MdPause size={28}/> : <MdPlayArrow size={28}/> }
                        
                    </span>
                    <span className='p-[5px] mx-2 hover:text-main-500 cursor-pointer'><BiSkipNext size={28} /></span>
                    <span title='Bật phát lại tất cả' className='p-[5px] mx-2 hover:text-main-500 cursor-pointer'><CiRepeat size={22} /></span>
                </div>
                <div>
                    progress bar
                </div>
            </div>
            <div className='w-[30%] flex-auto'>
                bf
            </div>
        </div>
    )
}

export default Player