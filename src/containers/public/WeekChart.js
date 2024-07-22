import React, { useState } from 'react'
import { CategoriesRelaseButton } from '../../components'
import { useSelector } from 'react-redux';

function WeekChart() {
  const { weekCharts } = useSelector(state => state.chart)
  const [selectedCategory, setSelectedCategory] = useState  ('all');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  console.log(weekCharts);
  return (
    <div className='px-14'>
      <div className="w-full pt-14 h-auto">
        <h3
          className="text-[40px] cursor-pointer w-fit h-12 text-2xl font-bold bg-gradient-to-r from-green-600 via-red-500 to-yellow-400 bg-clip-text text-transparent"
          title='24H'
        >
          Bảng Xếp Hạng Tuần
        </h3>
      </div>
      
    </div>
  )
}

export default WeekChart