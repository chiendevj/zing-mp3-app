import React, { memo } from 'react'
import icons from '../untils/icons'
import PlaylistItem from './PlaylistItem';

const Section = ({hEditorTheme}) => {
    return (
        <div className='container px-14 mt-12'>
            <h3 className='flex justify-between items-center mb-5'>
                <span className='text-xl font-bold'>{hEditorTheme?.title}</span>
                <span className='flex gap-1 items-center text-xs font-medium cursor-pointer text-main-700 hover:text-main-500'>TẤT CẢ {<icons.GoChevronRight size={20} />}</span>
            </h3>
            <div className='w-full my-5 flex flex-col'>
                <div className='relative overflow-hidden font-bold'>
                    <div className='flex overflow-hidden'>
                        {hEditorTheme?.items?.slice(0, 4).map((item) => (
                            <PlaylistItem item={item} key={item.encodeId} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Section)