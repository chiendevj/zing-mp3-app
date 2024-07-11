import React from 'react';
import icons from '../untils/icons';
const Search = () => {
  return (
    <div className='flex items-center justify-center gap-2 bg-slate-200 w-2/3 px-5 rounded-full'>
      <span>{<icons.TfiSearch size={20} className='text-main-600'/>}</span>
      <input
      type="text"
      placeholder="Tìm kiếm bài hát, nghệ sỹ, lời bài hát"
      className="p-2 outline-none bg-transparent text-sm w-full placeholder:text-main-700 text-main-600"
    />
    </div>
  );
};

export default Search;
