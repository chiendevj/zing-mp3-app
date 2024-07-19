import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as apis from '../../apis';
import icons from '../../untils/icons';
import numeral from 'numeral';
import { Tooltip } from 'react-tooltip';
import { PlaylistSection, SongItem, TitleSection } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions'

function Artist() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { artistBasicInfo, topSongs, aAlbums } = useSelector((state) => state.artist);

  useEffect(() => {
    dispatch(actions.getArtist(name));
  }, [name, dispatch]);

  useEffect(() => {
    if (artistBasicInfo) {
      document.title = `${artistBasicInfo.name} | Zing MP3 Official Account`;
    }
  }, [artistBasicInfo]);

  console.log(aAlbums);

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
            <Tooltip id="award" place="top" type="dark" effect="solid" >
              {artistBasicInfo?.awards?.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </Tooltip>
          </span>
        )}
      </div>
      {/* Top Songs */}
      <div className='container my-10'>
        <TitleSection title={topSongs?.title} />
        <div className='grid grid-cols-2'>
          {topSongs?.items?.slice(0, 8).map((item, index) => (
            <SongItem item={item} key={index} />
          ))}
        </div>
      </div>
      {/* Playlist && Album */}
      <div className='container my-10'>
        {aAlbums.map((item) => (
          aAlbums?.length > 0 && (
            <PlaylistSection item={item} key={item.sectionId} />
          )
        ))}
      </div>
    </div>
  );
}

export default Artist;
