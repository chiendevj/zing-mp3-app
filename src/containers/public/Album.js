import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import * as apis from '../../apis';
import icons from '../../untils/icons';
import moment from 'moment';
import 'moment-duration-format';
import numeral from 'numeral';
import { ListSong, SingerItem } from '../../components';
import { useDispatch } from 'react-redux';
import actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions'

const Album = () => {
  const [playlistData, setPlaylistData] = useState(null);
  const dispatch = useDispatch();
  const { pid } = useParams();
  
  useEffect(() => {
    const fetchDetailAlbum = async () => {
      const response = await apis.apiGetDetailPlaylist(pid);
      if (response.data.err === 0) {
        setPlaylistData(response.data.data);
        dispatch({
          type: actionTypes.PLAYLIST,
          songs: response.data.data.song,
        });
      }
    };

    fetchDetailAlbum();
  }, [pid, dispatch]);

  useEffect(() => {
    if (playlistData) {
      document.title = `${playlistData.title} | Album 320 lossless `;
    }
  }, [playlistData]);


  return (
    <div className="w-full mt-5 px-14">
      <div className="w-full flex 1300:flex-row flex-col gap-6">
        {/* Left section with album details */}
        <div className="flex-none 1300:w-[30%] w-full flex-col pt-0 1300:pt-24">
          <div className="flex 1300:flex-col items-center gap-5">
            {/* Album thumbnail */}
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src={playlistData?.thumbnailM}
                alt={playlistData?.title}
                title={playlistData?.title}
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-opacity duration-300">
                <button className="absolute z-10 text-white opacity-0 group-hover:opacity-100 p-1 rounded-full border border-white transition-opacity duration-300">
                  <icons.MdPlayArrow size={35} />
                </button>
              </div>
            </div>
            {/* Album information */}
            <div className="w-full flex flex-col justify-between gap-4">
              <div className="w-full 1300:text-center text-start">
                <h3 className="text-xl font-bold text-main-600">
                  {playlistData?.title}
                </h3>
                <span className="text-xs text-main-700">
                  Cập nhật:{' '}
                  {moment
                    .unix(playlistData?.contentLastUpdate)
                    .format('DD/MM/yyyy')}
                </span>
                <div className="text-xs text-main-700 font-normal">
                  {playlistData?.artists &&
                    playlistData.artists.map((artist, index) => (
                      <NavLink
                        key={artist.id}
                        to={`/${artist.alias}`}
                        className="cursor-pointer hover:text-main-500 hover:underline"
                      >
                        {artist.name}
                        {index !== playlistData.artists.length - 1 && ', '}
                      </NavLink>
                    ))}
                </div>
                <span className="text-xs text-main-700">
                  {numeral(playlistData?.like).format('0a').toUpperCase() +' người yêu thích'}
                </span>
              </div>
              {/* Play all button and options */}
              <div className="w-full flex items-center 1300:flex-col gap-4">
                <div className="bg-main-500 rounded-full flex gap-1 text-sm font-semibold text-white text-center px-6 py-[9px] hover:opacity-80 cursor-pointer">
                  <icons.MdPlayArrow size={20} /> PHÁT TẤT CẢ
                </div>
                <div className="flex gap-4 items-center">
                  <span className="p-3 bg-main-200 cursor-pointer rounded-full hover:opacity-70">
                    <icons.AiOutlineHeart />
                  </span>
                  <span className="p-3 bg-main-200 cursor-pointer rounded-full hover:opacity-70">
                    <icons.RxDotsHorizontal />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right section with album description and song list */}
        <div className="flex-auto">
          <p>
            <span className="text-sm text-main-700">Lời tựa </span>
            <span className="text-sm text-main-600">
              {playlistData?.description}
            </span>
          </p>
          {/* Playlist */}
          <ListSong />
        </div>
      </div>
      {/* Artists section with carousel */}
      {playlistData?.artists?.length > 0 && (
        <div className="w-full my-5 flex flex-col">
          <h3 className="text-xl text-main-600 font-bold mb-5">
            Nghệ Sĩ Tham Gia
          </h3>
          <div className="relative overflow-hidden font-bold">
            <div className="flex overflow-hidden">
              {playlistData?.artists
                ?.slice(0, 4)
                .map((artist) => (
                  <SingerItem artist={artist} key={artist.id} />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Album;
