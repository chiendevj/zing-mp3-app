import React from 'react'
import moment from 'moment/moment';
import icons from '../untils/icons';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';
import { NavLink } from 'react-router-dom';


const RankingReleaseItem = ({ item, id }) => {
  const dispatch = useDispatch()

  return (
  <div className='bg-main-200 rounded-md p-[10px] flex cursor-pointer'>
    <div className='relative rounded-md overflow-hidden group w-[120px] h-[120px] flex-none'>
      <img
        src={item.thumbnailM}
        alt={item.title}
        title={item.title}
        className='w-full h-full transform transition-transform duration-500 group-hover:scale-110'
      />
      <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-opacity duration-300'>
        <button
          className='absolute z-10 text-white opacity-0 group-hover:opacity-100 p-1 rounded-full border border-white transition-opacity duration-300'
          onClick={() => {
            dispatch(actions.setCurSongId(item.encodeId))
          }}
        >
          <icons.MdPlayArrow size={35} />
        </button>
      </div>
    </div>
    <div className='flex flex-col justify-between ml-2 w-full'>
      <div>
        <span className='text-main-600 text-sm font-medium'>{item.title}</span>
        <div className='text-xs text-main-700 font-normal'>
        {item?.artists &&
                        item.artists.map((artist, index) => (
                            <NavLink
                                key={artist.id}
                                to={`/${artist.alias}`}
                                className="cursor-pointer hover:text-main-500 hover:underline"
                            >
                                {artist.name}{artist.spotlight && '★'}
                                {index !== item.artists.length - 1 && ', '}
                            </NavLink>
                        ))}
        </div>
      </div>
      <div className='flex justify-between items-baseline'>
        <span className='text-[40px] text-transparent leading-none opacity-40 font-black text-stroke'>#{id}</span>
        <span className='text-main-700 leading-none text-sm'>{moment.unix(item?.releaseDate).format('DD.MM.yyyy')}</span>
      </div>
    </div>
  </div>
  )
};

export default RankingReleaseItem