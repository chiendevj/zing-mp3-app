import React from 'react'
import { useSelector } from 'react-redux'
import {SongItem} from '../../components'
const ReleaseNew = () => {
  const {newReleaseChart} = useSelector(state => state.chart)
  document.title = '#zingchart tuần, #zingchart Zing - Bài hát'
  return (
    <div className='px-14 my-12'>
      <div className="w-full pt-14 h-auto">
        <h3
          className="text-[40px] cursor-pointer w-fit h-12 text-2xl font-bold bg-gradient-to-r from-green-500 via-blue-500 to-gray-800 bg-clip-text text-transparent"
          title='BXH'
        >
          {newReleaseChart.title}
        </h3>
      </div>
      <div className='mt-8'>
        {newReleaseChart?.items && 
          newReleaseChart?.items?.map((item, index) => (
            <SongItem key={item.encodeId} item={item} index={index + 1} />
          
        ))}
    
      </div>
    </div>
  )
}

export default ReleaseNew