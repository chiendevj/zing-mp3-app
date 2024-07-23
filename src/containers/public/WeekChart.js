import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { SongItem } from '../../components';
import Scrollbars from 'react-custom-scrollbars-2';

function WeekChart() {
  const { wid } = useParams();
  const { weekCharts } = useSelector(state => state.chart);

  const getCategoryLabel = (category) => {
    if (category === 'vn') return 'Việt Nam';
    if (category === 'us') return 'US - UK';
    if (category === 'korea') return 'K-POP';
    return category;
  };

  const getSongsOfCate = (selectedCategory) => {
    return weekCharts?.find(item => item?.link?.split('/').pop().split('.')[0] === wid)?.items || [];
  };

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: '#636e72',
      borderRadius: '4px'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <div className='px-14'>
      <div className="w-full h-auto pt-12">
        <h3
          className="text-[40px] cursor-pointer w-fit h-12 text-2xl font-bold bg-gradient-to-r from-green-600 via-red-500 to-yellow-400 bg-clip-text text-transparent"
          title='24H'
        >
          Bảng Xếp Hạng Tuần
        </h3>
      </div>
      <div className='flex justify-between items-center my-2 py-1'>
        <div className='flex space-x-6'>
          {weekCharts?.map((item) => {
            const linkId = item.link.split('/').pop().split('.')[0];
            const country = item.country
            return (

              <NavLink
                key={item?.chartId}
                to={`${item?.link?.split('.')[0]}`}
                className={`py-4 text-2xl font-bold ${wid === linkId ? 'text-main-500 border-b-4 border-main-500' : 'hover:text-main-500 text-main-600'}`}
              >
                {getCategoryLabel(country)}
              </NavLink>

            );
          })}
        </div>
      </div>
      <Scrollbars
            style={{ width: '100%', height: '350px' }}
            autoHide
            renderThumbHorizontal={renderThumb}
            renderThumbVertical={renderThumb}
          >

        {getSongsOfCate(wid) &&
          getSongsOfCate(wid).map((item, index) => (
            <SongItem key={item.encodeId} item={item} index={index + 1} />
          ))}
          </Scrollbars>
      </div>
   
  );
}

export default WeekChart;
