import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PlaylistSection } from '../../components';

function Top100() {
  const { top100 } = useSelector(state => state.top100);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['blue', 'red', 'violet', 'pink'];


  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentColor = colors[colorIndex];

  return (
    <div className='px-14'>
      <div className='flex justify-center items-center w-full -mt-5'>
        <div className='flex items-center'>
          <div 
            className={`w-full flex justify-between gap-5 h-auto text-3xl font-bold bg-gradient-to-r from-${currentColor}-800 via-${currentColor}-600 to-${currentColor}-400 bg-clip-text text-transparent transition-colors duration-500`}
          >
            <span className='font-serif'>T</span>
            <span className='font-serif'>O</span>
            <span className='font-serif'>P</span>
          </div>
          <div 
            className={`font-bold ml-auto flex-none text-[160px] bg-gradient-to-r from-${currentColor}-400 via-${currentColor}-600 to-${currentColor}-800 font-serif bg-clip-text text-transparent transition-colors duration-500`}
          >
            100
          </div>
        </div>
      </div>
      {top100.map((item) => (
        item?.items?.length > 0 && (
          <div className='px-14' key={item.sectionId}>
            <PlaylistSection item={item} top100={true} />
          </div>
        )
      ))}
    </div>
  );
}

export default Top100;
