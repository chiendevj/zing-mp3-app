import React, { memo } from 'react';
import moment from 'moment';
import 'moment-duration-format';
import SongItem from './SongItem';
import { useSelector } from 'react-redux';

function ListSong() {
  const { songs } = useSelector((state) => state.music);

  return (
    <div className='flex flex-col w-full mt-1'>
      {/* Header */}
      <div className='flex w-full text-xs text-main-700 font-semibold items-center gap-1 p-[10px] border-b-[1px] border-[#c4cece]'>
        <div className='w-full flex-auto text-start text-nowrap'>BÀI HÁT</div>
        <div className='w-1/3 text-start text-nowrap'>ALBUM</div>
        <div className='flex-auto text-end text-nowrap'>THỜI GIAN</div>
      </div>
      {/* Body */}
      <div className='w-full overscroll-y-auto'>
        {songs && songs?.items?.map((item, index) => (
          <SongItem item={item} key={index} />
        ))}
      </div>
      <div className='w-full flex gap-2 text-main-700 text-[13px] mt-4'>
        <span>{songs?.total} bài hát</span>
        &#8226;
        <span>{moment.duration(songs?.totalDuration, 'seconds').format('h [giờ] m [phút]')}</span>
      </div>
    </div>
  );
}

export default memo(ListSong);
