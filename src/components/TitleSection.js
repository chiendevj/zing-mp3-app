import React from 'react'
import icons from '../untils/icons';

function TitleSection({ title, top100 }) {
  return (
    <h3 className='flex justify-between items-center mb-5'>
      <span className='text-xl font-bold'>{title}</span>
      {!top100 &&
        <span className='flex gap-1 items-center text-xs font-medium cursor-pointer text-main-700 hover:text-main-500'>
          TẤT CẢ {<icons.GoChevronRight size={20} />}
        </span>
      }
    </h3>
  )
}

export default TitleSection