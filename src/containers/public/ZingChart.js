import React from 'react';
import { useSelector } from 'react-redux';
import { ChartBanner } from '../../components';

const ZingChart = () => {
  const { chart, rank } = useSelector(state => state.chart);
  console.log(chart, rank);
  document.title = '#zingchart | Xem bài hát, album, MV đang hot nhất hiện tại';
  return (
    <div className='px-14'>
      <div className="w-full pt-5 h-auto">
        <h3
          className="text-[40px] cursor-pointer w-fit h-12 text-2xl font-bold bg-gradient-to-r from-purple-400 via-red-500 to-yellow-400 bg-clip-text text-transparent"
          title='24H'
        >
          #zingchart
        </h3>
      </div>
      <div className='w-full h-full relative'>
        <ChartBanner rank={rank} chart={chart} />
      </div>
    </div>
  );
};

export default ZingChart;
