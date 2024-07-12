import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as apis from '../../apis';
import icons from '../../untils/icons';
import moment from 'moment';
import 'moment-duration-format';
import { ListSong, SingerItem } from '../../components';

const Album = () => {
  const { title, pid } = useParams();
  const [playlistData, setPlaylistData] = useState(null);
  useEffect(() => {
    const fetchDetailAlbum = async () => {

      const response = await apis.apiGetDetailPlaylist(pid);
      if (response.data.err === 0) {
        setPlaylistData(response.data.data);
      }
    };

    fetchDetailAlbum();
  }, [pid]);

  return (
    
      <div className='w-full mt-5'>
      <div className='w-full flex 1300:flex-row flex-col gap-6'>
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
          {/* Playlist */}
          <ListSong songs={playlistData?.song} />
        </div>
      </div>
      <div className='w-full my-5 flex flex-col'>
          <h3 className='text-xl text-main-600 font-bold mb-5'>Nghệ Sĩ Tham Gia</h3>
          <div className='flex'>
          { playlistData?.artists?.map((artist) => (
              // Start item
              <SingerItem artist = {artist} />
              // End item
            ))}
          </div>
      </div>
    </div>
  );
};

export default Album;
