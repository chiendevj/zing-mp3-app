import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as apis from '../apis'
import * as actions from '../store/actions'
import icons from '../untils/icons'


const {
    AiOutlineHeart, AiFillHeart, RxDotsHorizontal,
    CiShuffle, CiRepeat, MdPlayArrow,
    BiSkipNext, BiSkipPrevious, SlVolume2,
    PiPlaylist, SlVolumeOff, MdPause
} = icons

function Player() {
    const audioEl = useRef(new Audio())
    const [songInfo, setSongInfo] = useState(null)
    const [source, setSource] = useState(null)
    const { curSongId, isPlaying } = useSelector(state => state.music);
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchDetail = async () => {
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(curSongId),
                apis.apiGetSong(curSongId)
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

    console.log(source);
    useEffect(() => {
        audioEl.current.src = source
    }, [curSongId, source])

    const handleTogglePlayMusic = () => {
        if (isPlaying) {
            audioEl.current.pause()
            dispatch(actions.play(false))
        } else {
            audioEl.current.src = source
            audioEl.current.play()
            dispatch(actions.play(true))
        }
    }

    console.log(source);
    return (
        <div className='flex w-full px-5 h-full items-center bg-main-400'>
            <div className='w-[30%] flex-auto flex items-center gap-2'>
                <img src={songInfo?.thumbnailM} alt={songInfo?.title} className='w-16 h-16 rounded object-cover' />
                <div className='flex flex-col '>
                    <span className='text-sm text-[#32323d] font-medium'>{songInfo?.title}</span>
                    <div className='text-xs text-main-700 font-normal'>
                        {songInfo?.artists && songInfo.artists.map((artist, index) => (
                            <span key={index}>{artist.name}{index !== songInfo.artists.length - 1 && ', '}</span>
                        ))}
                    </div>
                </div>
                <div className='flex gap-5 pl-2'>
                    <span><AiOutlineHeart size={16} /></span>
                    <span><RxDotsHorizontal size={16} /></span>
                </div>
            </div>
            <div className='w-2/5 flex-auto flex flex-col items-center justify-center gap-1'>
                <div className='flex items-center '>
                    <span title='Bật phát ngẫu nhiên' className='p-[5px] cursor-pointer mx-2 hover:text-main-500'><CiShuffle size={22} /></span>
                    <span className='p-[5px] mx-2 hover:text-main-500 cursor-pointer'><BiSkipPrevious size={28} /></span>
                    <span
                        className='p-[5px] mx-2 hover:text-main-500 cursor-pointer border border-black rounded-full hover:border-main-500'
                        onClick={handleTogglePlayMusic}
                    >
                        {isPlaying ? <MdPause size={28} /> : <MdPlayArrow size={28} />}
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