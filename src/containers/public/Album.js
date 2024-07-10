import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as apis from '../../apis'
import icons from '../../untils/icons'

const { MdPlayArrow } = icons
const Album = () => {
  const { title, pid } = useParams()
  const [albumDetails, setAlbumDetails] = useState(null)

  useEffect(() => {
    const fetchDetailAlbum = async () => {

      const response = await apis.apiGetDetailPlaylist(pid)
      console.log(response)

      if (response.data.err === 0) {
        setAlbumDetails(response.data.data)
      }

    }

    fetchDetailAlbum()
  }, [pid])

  function convertTimestampToDate(timestamp) {
    const date = new Date(timestamp * 1000);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className='px-14 w-full flex gap-6'>
      <div className='flex-none w-1/3'>
        <div className='flex flex-col items-center gap-1'>
          <div className='w-full overflow-hidden rounded-lg'>
            <img src={albumDetails?.thumbnailM} alt={albumDetails?.title} className='hover:scale-110 transition-transform' />
          </div>
          <h3 className='text-lg text-center font-bold text-main-600'>{albumDetails?.title}</h3>
          <span className='text-xs text-main-700'>Cập nhật: {convertTimestampToDate(albumDetails?.contentLastUpdate)}</span>
          <div className='text-xs text-[#696969] font-normal'>
            {albumDetails?.artists && albumDetails?.artists.map((artist, index) => (
              <span key={index}>{artist.name}{index !== albumDetails?.artists.length - 1 && ', '}</span>
            ))}
          </div>
          <span className='text-xs text-main-700'>
            {albumDetails?.like} người yêu thích
          </span>
          <div className='mt-4 bg-main-500 rounded-full flex text-sm text-white items-center px-6 py-[9px] hover:opacity-80 cursor-pointer'>{<icons.MdPlayArrow size={20}/>} PHÁT TẤT CẢ</div>
        </div>
      </div>
      <div className='flex-auto'>
        <p>
          <span className='text-sm text-main-700'>Lời tựa </span>
          <span className='text-sm text-main-600'>{albumDetails.description}</span>
        </p>
      </div>
    </div>
  )
}

export default Album
