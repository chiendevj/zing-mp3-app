import React, { memo } from 'react';
import icons from '../untils/icons';
import { NavLink, useNavigate } from 'react-router-dom';

function PlaylistItem({ item }) {
    const navigate = useNavigate();

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
        const albumPath = item?.link.split('.')[0];
        navigate(albumPath);
    };

    return (
        <div className='flex flex-col 1300:w-1/5 w-1/4 px-3'>
            <div className='relative rounded-lg overflow-hidden group'>
                <img
                    src={item.thumbnailM}
                    alt={item.title}
                    title={item.title}
                    className='w-full h-auto transform transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-opacity duration-300'>
                    <button
                        className='absolute z-10 text-white opacity-0 group-hover:opacity-100 p-1 rounded-full border border-white transition-opacity duration-300'
                        onClick={() => handleClickPlaylistItem(item)}
                    >
                        <icons.MdPlayArrow size={35} />
                    </button>
                </div>
            </div>
            <span className='flex flex-col mt-2 gap-1'>
                <span className='text-sm text-main-600 font-bold'>
                    {truncateDescription(item.title, 30)}
                </span>
                <span className='text-sm text-main-700 font-medium'>
                    {item.sortDescription
                        ? truncateDescription(item.sortDescription, 50)
                        : item?.artists &&
                            item.artists.map((artist, index) => (
                                <NavLink
                                    key={artist.id}
                                    to={`/${artist.alias}`}
                                    className="cursor-pointer hover:text-main-500 hover:underline"
                                >
                                    {artist.name}
                                    {index !== item.artists.length - 1 && ', '}
                                </NavLink>
                            ))}
                </span>
            </span>
        </div>
    );
}

export default memo(PlaylistItem);
