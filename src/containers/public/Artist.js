import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import icons from '../../untils/icons';
import numeral from 'numeral';
import { Tooltip } from 'react-tooltip';
import { 
        AboutArtist, PlaylistSection, 
        SingerItem, SongItem, TitleSection, VideoSection 
      } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';

function Artist() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { 
    artistBasicInfo, topSongs, aAlbums, 
    aMV, aPlaylists, aReArtist } = useSelector((state) => state.artist);

  const [itemsToShow, setItemsToShow] = useState(5);

  useEffect(() => {
    dispatch(actions.getArtist(name));
  }, [name, dispatch]);

  useEffect(() => {
    if (artistBasicInfo) {
      document.title = `${artistBasicInfo.name} - Zing MP3 Official Account`;
    }
  }, [artistBasicInfo]);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1300) {
        setItemsToShow(4);
      } else {
        setItemsToShow(5);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='px-14'>

      {/* Basic Info */}
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
        {/* Spotlight */}
        {artistBasicInfo?.spotlight && (
          <span className='mr-10'>
            <icons.Spotlight />
          </span>
        )}
        {/* Awards */}
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
              <div className='w-full h-full rounded-md bg-main-600 p-4 flex items-center'>
                <div className="relative rounded-lg overflow-hidden group w-1/2 h-fit">
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
                    <span className='text-xs font-normal text-main-700'>
                    {artistBasicInfo.aNewRelease?.artists?.map((artist, index) => (
                      <NavLink
                        key={artist.id}
                        to={`/${artist.alias}`}
                        className="cursor-pointer hover:text-main-500 hover:underline"
                      >
                        {artist.name}{artist.spotlight && '★'}
                        {index < artistBasicInfo.aNewRelease?.artists?.length - 1 && ', '}
                      </NavLink>
                    ))}
                  </span>
                  </div>
                  <span className='font-normal text-xs text-main-700 '>{artistBasicInfo.aNewRelease?.releaseDate}</span>
                </div>
              </div>
            </div>
            <div className='w-2/3'>
              <TitleSection title={topSongs?.title} />
              <div className='grid grid-cols-2 gap-3'>
                {topSongs?.items?.slice(0, 6).map((item, index) => (
                  <SongItem item={item} key={index} hiddenAlbum={true} />
                ))}
              </div>
            </div>
          </>
        ) :
          <div className='w-full'>
            <TitleSection title={topSongs?.title} />
            <div className='grid grid-cols-2 gap-3'>
              {topSongs?.items?.slice(0, 6).map((item, index) => (
                <SongItem item={item} key={index} hiddenAlbum={true} />
              ))}
            </div>
          </div>
        }
      </div>

      {/* Playlist && Album */}
      {aAlbums?.length > 0 && (
        <div className='container my-10'>
          {aAlbums.map((item) => (
            <PlaylistSection item={item} key={item.sectionId} top100={false} />
          ))}
        </div>
      )}

      {/* MV */}
      <VideoSection videos={aMV?.items} artistThumbnail={artistBasicInfo.thumbnailM} />
  
      {/* Playlist */}
      {aPlaylists.map((aPlaylist) => (
        aPlaylist?.items?.length > 0 && (
          <PlaylistSection item={aPlaylist} key={aPlaylist.sectionId} />
        )
      ))}

      {/* aReArtist */}
      <div className="w-full my-5 flex flex-col">
        <h3 className="text-xl text-main-600 font-bold mb-5">
          {aReArtist?.title}
        </h3>
        <div className="relative overflow-hidden font-bold">
          <div className="flex overflow-hidden">
            {aReArtist?.items?.slice(0, itemsToShow)
              .map((artist) => (
                <SingerItem artist={artist} />
              ))}
          </div>
        </div>
      </div>

      {/* About Artist */}
      <AboutArtist artistBasicInfo={artistBasicInfo} />

    </div>
  );
}

export default Artist;
