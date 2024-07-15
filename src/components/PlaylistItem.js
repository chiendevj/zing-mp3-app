import React, { memo } from 'react';
import icons from '../untils/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PlaylistItem({ item }) {
    const navigate = useNavigate()


    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) return description;
        const words = description.split(' ');
        let truncated = words[0];
        for (let i = 1; i < words.length; i++) {
            if ((truncated + ' ' + words[i]).length > maxLength) break;
            truncated += ' ' + words[i];
        }
        return truncated + '...';
    };
     
    const handleClickPlaylistItem = (item) => {
        const albumPath = item?.link.split('.')[0]
        navigate(albumPath)
    }

    return (
        <div className='flex flex-col w-1/4 px-3'>
            <div className='relative rounded-lg overflow-hidden group'>
                <img src={item.thumbnailM} alt={item.title} title={item.title} className='w-full h-auto border' />
                <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-opacity duration-300'>
                    <button className='absolute z-10 text-white opacity-0 group-hover:opacity-100 p-1 rounded-full border border-t-white'  
                    onClick={() => handleClickPlaylistItem(item)} >
                        <icons.MdPlayArrow size={35} />
                    </button>
                </div>
            </div>
            <span className='text-sm text-main-700 font-medium mt-3'>
                {truncateDescription(item.sortDescription, 50)}
            </span>
        </div>
    );
}

export default memo(PlaylistItem);
