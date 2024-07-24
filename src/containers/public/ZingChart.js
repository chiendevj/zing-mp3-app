import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ChartBanner, SongItem, WeekChartItem } from '../../components';

const ZingChart = () => {
  const { chart, rank, promotes, weekCharts } = useSelector((state) => state.chart);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  document.title = '#zingchart | Xem bài hát, album, MV đang hot nhất hiện tại';

  useEffect(() => {
    if (promotes && promotes.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % promotes.length);
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [promotes]);

  const currentSong = promotes?.[currentIndex];

  const handleShowAllClick = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className='px-14'>
      <div className="w-full pt-14 h-auto">
        <h3
          className="text-[40px] cursor-pointer w-fit h-12 text-2xl font-bold bg-gradient-to-r from-purple-400 via-red-500 to-yellow-400 bg-clip-text text-transparent"
          title='24H'
        >
          #zingchart
        </h3>
      </div>
      <div className='w-full h-[350px] relative'>
        <ChartBanner rank={rank} chart={chart} main={true} />
      </div>
      <div className='mt-8'>
        {currentSong && <SongItem item={currentSong} display={true} />}
        {rank && (showAll ? (
          rank.map((item, index) => (
            <SongItem key={item.encodeId} item={item} index={index + 1} />
          ))
        ) : (
          rank.slice(0, 10).map((item, index) => (
            <SongItem key={item.encodeId} item={item} index={index + 1} />
          ))
        ))}
        <div className='flex justify-center my-3'>
          <button
            onClick={handleShowAllClick}
            className='font-medium px-5 py-2 border-2 border-main-500 hover:bg-[rgba(14,128,128,0.1)] rounded-full text-sm text-main-500'
          >
            {showAll ? 'Xem top 10' : 'Xem top 100'}
          </button>
        </div>
      </div>
      <div className='my-8'>
        <h1 className='text-4xl font-bold text-main-500 my-3'>
          Bảng Xếp Hạng Tuần
        </h1>
        <div className='w-full flex flex-col 1300:flex-row'>
          {weekCharts && weekCharts.map(item => (
            <WeekChartItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ZingChart);
