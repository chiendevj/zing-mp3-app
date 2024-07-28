import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as apis from '../apis'
import SongSidebarRight from './SongSidebarRight'
import { NavLink } from 'react-router-dom'

const BroadcastList = () => {

    const { curSongId, curAlbumId } = useSelector(state => state.music)
    const [songCurData, setSongCurData] = useState(null)
    const [albumCurData, setAlbumCurData] = useState(null)
    useEffect(() => {
        const fetchCurSong = async () => {
            const response = await apis.apiGetDetailSong(curSongId)
            if (response.data.err === 0) {
                setSongCurData(response.data.data)
            }
        }
        const fetchCurAlbum = async () => {
            const response = await apis.apiGetDetailPlaylist(curAlbumId)
            if (response.data.err === 0) {
                setAlbumCurData(response.data.data)
            }
        }
        fetchCurSong()
        fetchCurAlbum()

    }, [curSongId, curAlbumId])

    console.log(albumCurData);
    return (
        <div>
            {/* Song Current */}
            <SongSidebarRight item={songCurData} isCurrent={true} />

            {/* From Playlist */}
            <div className='pt-[15px] pb-2 px-[5px] flex flex-col gap-1'>
                <span className='text-sm text-main-600 font-semibold'>Tiếp theo</span>
                <span className='flex gap-1'>
                    <span className='text-xs text-main-700'>
                        Từ playlist
                    </span>
                    <NavLink
                        to={`${albumCurData?.link?.split('.')[0]}`}
                        className='text-main-500 font-medium text-xs hover:underline cursor-pointer'
                    >
                        {albumCurData?.title}
                    </NavLink>

                </span>
            </div>

            {/* List Song from playlist */}
            {
                albumCurData?.song.items &&
                albumCurData?.song?.items.map((item, index) => (
                    <SongSidebarRight item={item} key={index} isCurrent={false} />
                ))
            }

        </div>
    )
}

export default BroadcastList