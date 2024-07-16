import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as apis from '../apis'
import * as actions from '../store/actions'
import icons from '../untils/icons'
import { toast } from 'react-toastify'
import Slider from 'rc-slider'

function Player({ toggleSidebarRight, isSidebarRightVisible }) {
    const audioEl = useRef(new Audio())
    const [songInfo, setSongInfo] = useState(null)
    const [isPremium, setIsPremium] = useState(false)
    const [source, setSource] = useState(null)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const { curSongId, isPlaying, songs } = useSelector(state => state.music)
    const [prevSongId, setPrevSongId] = useState(null)
    const [isFirst, setIsFirst] = useState(true)
    const [volume, setVolume] = useState(50)
    const [isMuted, setIsMuted] = useState(false)
    const [isShuffle, setIsShuffle] = useState(false)
    const [isRepeat, setIsRepeat] = useState(false)

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
                setIsPremium(true)
                toast.warn('🦄 Không thể phát bài hát này!')
            }
        }

        if (curSongId !== prevSongId) {
            fetchDetail()
            setPrevSongId(curSongId)
        }
    }, [curSongId, prevSongId])

    useEffect(() => {
        const handleTimeUpdate = () => {
            setCurrentTime(audioEl.current.currentTime)
        }

        const handleLoadedMetadata = () => {
            setDuration(audioEl.current.duration)
        }

        const handleEnded = () => {
            if (isRepeat) {
                audioEl.current.play()
            } else {
                handleNextSong()
            }
        }

        audioEl.current.addEventListener('timeupdate', handleTimeUpdate)
        audioEl.current.addEventListener('loadedmetadata', handleLoadedMetadata)
        audioEl.current.addEventListener('ended', handleEnded)

        if (source) {
            audioEl.current.src = source
            if (isFirst) {
                audioEl.current.pause()
                dispatch(actions.play(false))
            } else {
                audioEl.current.load()
                audioEl.current.play()
                dispatch(actions.play(true))
            }
        }

        return () => {
            audioEl.current.removeEventListener('timeupdate', handleTimeUpdate)
            audioEl.current.removeEventListener('loadedmetadata', handleLoadedMetadata)
            audioEl.current.removeEventListener('ended', handleEnded)
        }
    }, [source, dispatch, isFirst, isRepeat])

    useEffect(() => {
        audioEl.current.volume = isMuted ? 0 : volume / 100
    }, [volume, isMuted])

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

    const handleProgressChange = (value) => {
        audioEl.current.currentTime = value
        setCurrentTime(value)
    }

    const handleVolumeChange = (value) => {
        setVolume(value)
        setIsMuted(value === 0)
    }

    const handlePlaylistClick = () => {
        toggleSidebarRight();
    }

    const handleToggleMute = () => {
        setIsMuted(!isMuted)
    }

    const handleNextSong = () => {
        if (songs) {
            let currentSongIndex 
            songs?.items.forEach((item, index) => {
                if (item.encodeId === curSongId) currentSongIndex = index
            });
            if (isShuffle) {
                let nextSongIndex = Math.floor(Math.random() * songs.items.length)
                while (nextSongIndex === currentSongIndex) {
                    nextSongIndex = Math.floor(Math.random() * songs.items.length)
                }
                dispatch(actions.setCurSongId(songs.items[nextSongIndex].encodeId))
            } else {
                dispatch(actions.setCurSongId(songs.items[(currentSongIndex + 1) % songs.items.length].encodeId))
            }
        }
    }

    const handlePrevSong = () => {
        if (songs) {
            let currentSongIndex 
            songs?.items.forEach((item, index) => {
                if (item.encodeId === curSongId) currentSongIndex = index
            });
            if (isShuffle) {
                let prevSongIndex = Math.floor(Math.random() * songs.items.length)
                while (prevSongIndex === currentSongIndex) {
                    prevSongIndex = Math.floor(Math.random() * songs.items.length)
                }
                dispatch(actions.setCurSongId(songs.items[prevSongIndex].encodeId))
            } else {
                dispatch(actions.setCurSongId(songs.items[(currentSongIndex - 1 + songs.items.length) % songs.items.length].encodeId))
            }
        }
    }

    const handleToggleShuffle = () => {
        setIsShuffle(!isShuffle)
    }

    const handleToggleRepeat = () => {
        setIsRepeat(!isRepeat)
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
                    <span title='Bật phát ngẫu nhiên' onClick={handleToggleShuffle} className={`p-[5px] cursor-pointer mx-2 ${isShuffle ? 'text-main-500' : 'hover:text-main-500'}`}><icons.CiShuffle size={22} /></span>
                    <span onClick={handlePrevSong} className={`p-[5px] mx-2 ${!songs ? 'cursor-no-drop opacity-40' : 'hover:text-main-500 cursor-pointer'}`}><icons.BiSkipPrevious size={28} /></span>
                    <span
                        className='p-[5px] mx-2 hover:text-main-500 cursor-pointer border border-black rounded-full hover:border-main-500'
                        onClick={handleTogglePlayMusic}
                    >
                        {isPlaying ? <icons.MdPause size={28} /> : <icons.MdPlayArrow size={28} />}
                    </span>
                    <span onClick={handleNextSong} className={`p-[5px] mx-2 ${!songs ? 'cursor-no-drop opacity-40' : 'hover:text-main-500 cursor-pointer'}`}><icons.BiSkipNext size={28} /></span>
                    <span title='Bật phát lại tất cả' onClick={handleToggleRepeat} className={`p-[5px] mx-2 cursor-pointer ${isRepeat ? 'text-main-500' : 'hover:text-main-500'}`}><icons.CiRepeat size={22} /></span>
                </div>
                <div className='flex items-center justify-between w-full px-3 relative'>
                    <span className='text-xs text-main-700'>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</span>
                    <Slider
                        min={0}
                        max={duration}
                        value={currentTime}
                        onChange={handleProgressChange}
                        trackStyle={{ backgroundColor: '#0e8080', height: 4 }}
                        handleStyle={{ borderColor: '#0e8080', opacity:1 , top:'6px' , background: '#0e8080', height: 12, width: 12 }}
                        railStyle={{ backgroundColor: '#acc2c2', height: 4 }}
                        className='w-full mx-2'
                    />
                    <span className='text-xs font-medium'>{Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}</span>
                </div>
            </div>
            <div className='w-[30%] flex-auto flex items-center justify-end gap-3'>
                <div onClick={handleToggleMute} className='cursor-pointer px-1 py-[5px] bg-[#c6dcdc] rounded'>
                    {isMuted || volume === 0 ? <icons.SlVolumeOff size={16} className='font-normal' /> : (volume <= 70) ? <icons.SlVolume1 size={16} className='font-normal' /> : <icons.SlVolume2 size={16} className='font-normal' /> }
                </div>
                <div className='w-[70px]'>
                    <Slider
                        min={0}
                        max={100}
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        trackStyle={{ backgroundColor: '#0e8080', height: 4 }}
                        handleStyle={{ borderColor: '#0e8080', opacity:1 , top:'6px' , background: '#0e8080', height: 12, width: 12 }}
                        railStyle={{ backgroundColor: '#acc2c2', height: 4 }}
                    />
                </div>
                <div onClick={handlePlaylistClick} title='Danh sách phát' className={`cursor-pointer px-1 py-[5px] rounded transition-all duration-200 ${isSidebarRightVisible ? 'bg-main-500 text-main-100' : 'bg-[#c6dcdc] text-main-600'}`} >
                    <icons.PiPlaylist size={18} title='Danh sách phát' />
                </div>
            </div>
        </div>
    )
}

export default Player