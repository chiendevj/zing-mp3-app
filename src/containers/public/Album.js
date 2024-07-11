import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as apis from '../../apis';
import icons from '../../untils/icons';
import moment from 'moment';
import 'moment-duration-format';
import { useNavigate } from 'react-router-dom';

const Album = () => {
  const { title, pid } = useParams();
  const [playlistData, setPlaylistData] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchDetailAlbum = async () => {

      const response = await apis.apiGetDetailPlaylist(pid);
      if (response.data.err === 0) {
        setPlaylistData(response.data.data);
      }
    };

    fetchDetailAlbum();
  }, [pid]);

  const handleClickAlbum = (item) => {
      const albumPath = item?.link.split('.')[0]
      navigate(albumPath)
  }


  return (
    <div className='px-14 w-full flex 1300:flex-row flex-col gap-6'>
      <div className='flex-none 1300:w-[30%] w-full flex-col'>
        <div className='flex 1300:flex-col items-center gap-5'>
          <div className='overflow-hidden rounded-lg shadow-md'>
            <img
              src={playlistData?.thumbnailM}
              alt={playlistData?.title}
              className='hover:scale-110 transition-transform w-full'
            />
          </div>
          <div className='w-full flex flex-col justify-between gap-4'>
            <div className='w-full 1300:text-center text-start'>
              <h3 className='text-xl font-bold text-main-600'>{playlistData?.title}</h3>
              <span className='text-xs text-main-700'>
                Cập nhật: {moment.unix(playlistData?.contentLastUpdate).format('DD/MM/yyyy')}
              </span>
              <div className='text-xs text-main-700 font-normal'>
                {playlistData?.artists &&
                  playlistData.artists.map((artist, index) => (
                    <span key={artist.id}>
                      {artist.name}
                      {index !== playlistData.artists.length - 1 && ', '}
                    </span>
                  ))}
              </div>
              <span className='text-xs text-main-700'>{playlistData?.like} người yêu thích</span>
            </div>
            <div className='w-full flex items-center 1300:flex-col gap-4'>
              <div className='bg-main-500 rounded-full flex text-sm text-white text-center px-6 py-[9px] hover:opacity-80 cursor-pointer'>
                {<icons.MdPlayArrow size={20} />} PHÁT TẤT CẢ
              </div>
              <div className='flex gap-4 items-center'>
                <span className='p-2 bg-main-200 cursor-pointer rounded-full border-2 border-main-200 hover:bg-main-300'>
                  {<icons.AiOutlineHeart />}
                </span>
                <span className='p-2 bg-main-200 cursor-pointer rounded-full border-2 border-main-200 hover:bg-main-300'>
                  {<icons.RxDotsHorizontal />}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-auto'>
        <p>
          <span className='text-sm text-main-700'>Lời tựa </span>
          <span className='text-sm text-main-600'>{playlistData?.description}</span>
        </p>
        <div className='flex flex-col w-full mt-1'>
          {/* Header */}
          <div className='flex w-full text-xs text-main-700 font-semibold items-center gap-1 p-[10px] border-b-[1px] border-[#c4cece]'>
            <div className='w-1/2 flex-none text-start'>BÀI HÁT</div>
            <div className='w-1/3 flex-none text-start'>ALBUM</div>
            <div className='flex-auto text-end'>THỜI GIAN</div>
          </div>
          {/* Body */}
          <div className='w-full overscroll-y-auto'>
            {playlistData?.song &&
              playlistData.song?.items.map((item, index) => (
                <div key={item.encodeId} className='flex w-full gap-1 text-xs text-main-700 font-semibold items-center p-[10px] border-b border-[#c4cece] rounded hover:bg-main-200 hover:border-main-200 cursor-pointer'>
                  <div className='w-1/2 flex-none text-start flex items-center gap-3'>
                    <img src={item?.thumbnailM} alt='logo' className='rounded w-10 h-10' />
                    <div className='flex flex-col'>
                      <span className='text-sm text-[#32323d] font-medium'>{item?.title}</span>
                      <div className='text-xs text-main-700 font-normal'>
                        {item?.artists &&
                          item.artists.map((artist, index) => (
                            <span key={artist.id}>
                              {artist.name}
                              {index !== item.artists.length - 1 && ', '}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className='w-1/3 flex-none text-start'>
                    <span className='text-main-700 font-normal hover:underline hover:text-main-500' onClick={() => handleClickAlbum(item?.album)}>
                      {item?.album?.title || 'UnKnown'}
                    </span>
                  </div>
                  <div className='flex-auto text-end text-main-700 font-normal '>{moment.duration(item?.duration, 'seconds').format('hh:mm:ss')}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
