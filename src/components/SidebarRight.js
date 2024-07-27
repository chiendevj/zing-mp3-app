import React, { useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import icons from '../untils/icons';

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: '#0e8080',
    borderRadius: '4px'
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

function SidebarRight() {
  const [activeTab, setActiveTab] = useState('playlist');

  const handleShowPlaylist = () => {
    setActiveTab('playlist');
  };

  const handleShowRecent = () => {
    setActiveTab('recent');
  };

  return (
    <div className='h-full'>
      <div className='flex w-full h-full flex-col'>
        <div className='h-[70px] px-2 py-[14px] w-full flex-none text-sm flex items-center justify-between text-main-700'>
          <div className='p-2 bg-main-200 rounded-full flex flex-nowrap gap-1'>
            <span
              className={`rounded-full p-1 text-xs cursor-pointer ${activeTab === 'playlist' ? 'bg-main-100 text-main-500' : 'text-main-600'}`}
              onClick={handleShowPlaylist}
            >
              Danh sách phát
            </span>
            <span
              className={`rounded-full p-1 text-xs cursor-pointer ${activeTab === 'recent' ? 'bg-main-100 text-main-500' : 'text-main-600'}`}
              onClick={handleShowRecent}
            >
              Nghe gần đây
            </span>
          </div>
          <div className='gap-1 flex mx-4'>
            <span className='p-2 rounded-full bg-main-200 hover:opacity-70'>{<icons.CiAlarmOn size={18} />}</span>
            <span className='p-2 rounded-full bg-main-200 hover:opacity-70'>{<icons.RxDotsHorizontal size={18} />}</span>
          </div>
        </div>
        <div className='w-full flex-auto h-full pb-[89px]'>
          <Scrollbars
            style={{ width: '100%', height: '100%' }}
            autoHide
            renderThumbHorizontal={renderThumb}
            renderThumbVertical={renderThumb}
          >
            <div className='p-2'>
              {activeTab === 'playlist' && (
                <div>
                  {/* Nội dung Danh sách phát */}
                  Danh sách phát
                </div>
              )}
              {activeTab === 'recent' && (
                <div>
                  {/* Nội dung Nghe gần đây */}
                  Nghe gần đây
                </div>
              )}
            </div>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
}

export default SidebarRight;
