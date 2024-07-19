import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import icons from '../../untils/icons';
import numeral from 'numeral';
import { Tooltip } from 'react-tooltip';
import { PlaylistSection, SongItem, TitleSection } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';

function Artist() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { artistBasicInfo, topSongs, aAlbums, aMV } = useSelector((state) => state.artist);

  useEffect(() => {
    dispatch(actions.getArtist(name));
  }, [name, dispatch]);

  useEffect(() => {
    if (artistBasicInfo) {
      document.title = `${artistBasicInfo.name} - Zing MP3 Official Account`;
    }
  }, [artistBasicInfo]);

  console.log(aMV);

  return (
    <div className='px-14'>
      <div className='pt-[70px] mb-5 flex w-full justify-between items-end'>
        <div className='flex w-full'>
          <figure className='overflow-hidden rounded-full w-[140px] h-[140px] mr-10'>
            <img src={artistBasicInfo?.thumbnail} alt={artistBasicInfo?.name} />
          </figure>
          <div className='flex flex-col gap-3'>
            <div className='flex w-full items-center gap-10 mb-4'>
              <span className='text-6xl font-bold'>{artistBasicInfo?.name}</span>
              <span className='bg-main-500 p-2 text-main-100 rounded-full'>
                <icons.MdPlayArrow size={40} />
              </span>
            </div>
            <div className='flex w-full items-center gap-5'>
              <span className='mr-6 text-sm text-main-600 font-medium'>
                {numeral(artistBasicInfo?.totalFollow).format('0,0').replace(/,/g, '.')} người quan tâm
              </span>
              <span className='flex items-center gap-2 font-light text-main-100 text-sm px-6 cursor-pointer py-1 bg-main-500 rounded-full'>
                <icons.RiUserAddLine size={16} /> QUAN TÂM
              </span>
            </div>
          </div>
        </div>
        {artistBasicInfo?.awards && (
          <span className='mr-5 cursor-pointer' data-tooltip-id="award">
            <icons.Award />
            <Tooltip id="award" place="top" type="dark" effect="solid">
              {artistBasicInfo.awards.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </Tooltip>
          </span>
        )}
      </div>
      {/* Top Songs */}
      <div className='container my-10 flex'>
        {artistBasicInfo.aNewRelease?.length !== 0 ? (
          <>
            <div className='w-1/3 flex flex-col mr-5'>
              <h3 className='flex justify-between items-center mb-5'>
                <span className='text-xl font-bold'>Mới phát hành</span>
              </h3>
              <div className='w-full h-full rounded-md bg-main-600 p-4 flex'>
                <div className="relative rounded-lg overflow-hidden group w-1/2 h-auto">
                  <img
                    src={artistBasicInfo.aNewRelease?.thumbnailM}
                    alt={artistBasicInfo.aNewRelease?.title}
                    title={artistBasicInfo.aNewRelease?.title}
                    className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-opacity duration-300">
                    <button className="absolute z-10 text-white opacity-0 group-hover:opacity-100 p-1 rounded-full border border-white transition-opacity duration-300">
                      <icons.MdPlayArrow size={35} />
                    </button>
                  </div>
                </div>
                <div className='w-1/2 my-[6px] ml-4'>
                  <span className='text-xs font-normal text-main-700'>{artistBasicInfo.aNewRelease?.textType}</span>
                  <div className='flex flex-col gap-1 my-3'>
                    <span className='text-sm font-bold text-main-600'>{artistBasicInfo.aNewRelease?.title}</span>
                    <span className='text-xs font-normal text-main-700'>{artistBasicInfo.aNewRelease?.artistsNames}</span>
                  </div>
                  <span className='font-normal text-xs text-main-700 '>{artistBasicInfo.aNewRelease?.releaseDate}</span>
                </div>
              </div>
            </div>
            <div className='w-2/3'>
              <TitleSection title={topSongs?.title} />
              <div className='grid grid-cols-1'>
                {topSongs?.items?.slice(0, 3).map((item, index) => (
                  <SongItem item={item} key={index} />
                ))}
              </div>
            </div>
          </>
        ) :
          <div className='w-full'>
            <TitleSection title={topSongs?.title} />
            <div className='grid grid-cols-2 gap-4'>
              {topSongs?.items?.slice(0, 6).map((item, index) => (
                <SongItem item={item} key={index} />
              ))}
            </div>
          </div>
        }
      </div>
      {/* Playlist && Album */}
      {aAlbums?.length > 0 && (
        <div className='container my-10'>
          {aAlbums.map((item) => (
            <PlaylistSection item={item} key={item.sectionId} />
          ))}
        </div>
      )}

      {/* MV */}
      
        <div className='container my-10'>
          <TitleSection title="MV" />
          <div className='grid grid-cols-3 gap-4'>
            {aMV?.items.slice(0, 3).map((item, index) => (
              <div key={index} className='flex flex-col'>
                <div className="relative rounded-lg overflow-hidden group">
                  <img
                    src={item.thumbnailM}
                    alt={item.title}
                    title={item.title}
                    className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-opacity duration-300">
                    <button className="absolute z-10 text-white opacity-0 group-hover:opacity-100 p-1 rounded-full border border-white transition-opacity duration-300">
                      <icons.MdPlayArrow size={35} />
                    </button>
                  </div>
                </div>
                <div className='mt-2'>
                  <span className='text-sm font-bold text-main-600'>{item.title}</span>
                  <span className='text-xs font-normal text-main-700'>{item.artistsNames}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      
    </div>
  );
}

export default Artist;
