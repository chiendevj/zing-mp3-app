import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as apis from '../apis'
import * as actions from '../store/actions'
import icons from '../untils/icons'

function Player() {
    const audioEl = useRef(new Audio())
    const [songInfo, setSongInfo] = useState(null)
    const [isPreminun, setIsPreminun] = useState(false)
    const [source, setSource] = useState(null)
    const { curSongId, isPlaying } = useSelector(state => state.music)
    const [prevSongId, setPrevSongId] = useState(null)
    const [isFirst, setIsFirst] = useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchDetail = async () => {
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(curSongId),
                apis.apiGetSong(curSongId)
            ])

            if (res2.data.err === 0) {
                if (res1.data.err === 0) {
                    setSongInfo(res1.data.data)
                }

                setSource(res2.data.data['128'])
            } else if (res2.data.err === -1150) {
                setIsPreminun(true)
            }
        }

        if (curSongId !== prevSongId) {
            fetchDetail()
            setPrevSongId(curSongId)
        }
    }, [curSongId, prevSongId])

    useEffect(() => {
        if (source) {
            audioEl.current.src = source
            if (isFirst) {
                audioEl.current.pause()
                dispatch(actions.play(false))
            } else {
                audioEl.current.play()
                dispatch(actions.play(true))
            }
        }
    }, [source, dispatch, isFirst])

    const handleTogglePlayMusic = () => {
        setIsFirst(false)
        if (isPlaying) {
            audioEl.current.pause()
            dispatch(actions.play(false))
        } else {
            audioEl.current.play()
            dispatch(actions.play(true))
        }
    }

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
                    <span className='cursor-pointer hover:text-main-500' title='Thêm vào danh sách yêu thích'><icons.AiOutlineHeart size={16} /></span>
                    <span className='cursor-pointer hover:text-main-500' title='Lựa chọn'><icons.RxDotsHorizontal size={16} /></span>
                </div>
            </div>
            <div className='w-2/5 flex-auto flex flex-col items-center justify-center gap-1'>
                <div className='flex items-center '>
                    <span title='Bật phát ngẫu nhiên' className='p-[5px] cursor-pointer mx-2 hover:text-main-500'><icons.CiShuffle size={22} /></span>
                    <span className='p-[5px] mx-2 hover:text-main-500 cursor-pointer'><icons.BiSkipPrevious size={28} /></span>
                    <span
                        className='p-[5px] mx-2 hover:text-main-500 cursor-pointer border border-black rounded-full hover:border-main-500'
                        onClick={handleTogglePlayMusic}
                    >
                        {isPlaying ? <icons.MdPause size={28} /> : <icons.MdPlayArrow size={28} />}
                    </span>
                    <span className='p-[5px] mx-2 hover:text-main-500 cursor-pointer'><icons.BiSkipNext size={28} /></span>
                    <span title='Bật phát lại tất cả' className='p-[5px] mx-2 hover:text-main-500 cursor-pointer'><icons.CiRepeat size={22} /></span>
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