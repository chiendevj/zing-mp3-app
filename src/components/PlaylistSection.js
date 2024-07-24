import React, { memo, useState, useEffect } from 'react';
import PlaylistItem from './PlaylistItem';
import TitleSection from './TitleSection';

const PlaylistSection = ({ item, top100 }) => {
    const [itemsToShow, setItemsToShow] = useState(5);
    const [playlistsHub, setPlaylistsHub] = useState(item?.items || item?.playlists);

    document.title = 'Chủ Đề Nhạc Hot | Tuyển tập nhạc hay chọn lọc'
    useEffect(() => {
        const handleResize = () => {
            setItemsToShow(window.innerWidth < 1300 ? 4 : 5);
        };

        if (!top100) {
            handleResize(); 
            window.addEventListener('resize', handleResize); 
            return () => {
                window.removeEventListener('resize', handleResize); 
            };
        } else {
            setItemsToShow(item?.items?.length || 0);
        }

    }, [top100, item]);

    return (
        <div className='container mt-12'>
            {item?.title && (
                <TitleSection title={item?.title} top100={top100} />
            )}
            <div className='w-full my-5 flex flex-wrap'>
                {playlistsHub?.slice(0, itemsToShow).map((playlistItem) => (
                    <PlaylistItem item={playlistItem} key={playlistItem?.encodeId} />
                ))}
            </div>
        </div>
    );
};

export default memo(PlaylistSection);
