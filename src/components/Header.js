import React from 'react';
import icons from '../untils/icons';
import { Search } from '/';
const Header = () => {
  return (
    <div className='flex justify-between w-full'>
      <div className='flex gap-5 items-center w-full'>
        <div className='flex gap-3 text-xl'>
          <button className='p-2 bg-gray-100 rounded-full text-gray-300 hover:text-gray-500'><icons.GoArrowLeft /></button>
          <button className='p-2 bg-gray-100 rounded-full text-gray-300 hover:text-gray-500'><icons.GoArrowRight /></button>
        </div>
        <div className='w-full'>
          <Search />
        </div>
      </div>
      <button className='bg-main-500 p-2 rounded-full text-white opacity-70 hover:opacity-100'>{<icons.GoPerson size={24} />}</button>
    </div>
  );
};

export default Header;
