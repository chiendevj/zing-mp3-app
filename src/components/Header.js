import React from 'react';
import icons from '../untils/icons';
import { Search } from '/';
import { Tooltip } from 'react-tooltip';

const Header = () => {
  return (
    <div className='flex justify-between w-full'>
      <div className='flex gap-5 items-center w-full'>
        <div className='flex gap-3 text-xl'>
          <button className='p-2 bg-gray-100 rounded-full text-gray-300 hover:text-gray-500'>
            <icons.GoArrowLeft />
          </button>
          <button className='p-2 bg-gray-100 rounded-full text-gray-300 hover:text-gray-500'>
            <icons.GoArrowRight />
          </button>
        </div>
        <div className='w-full'>
          <Search />
        </div>
      </div>
    
      <img
        className='cursor-pointer rounded-full'
        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.10.36/static/media/user-default.3ff115bb.png"
        width={38}
        height={38}
        data-tooltip-id="login-tooltip"
      />
      <Tooltip id="login-tooltip" place="bottom" type="light" effect="solid">
        Đăng nhập
      </Tooltip>
    </div>
  );
};

export default Header;
