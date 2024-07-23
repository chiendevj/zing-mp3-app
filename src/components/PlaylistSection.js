import React, { memo, useState, useEffect } from 'react';
import PlaylistItem from './PlaylistItem';
import TitleSection from './TitleSection';

const PlaylistSection = ({ item, top100 }) => {
    const [itemsToShow, setItemsToShow] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1300) {
                setItemsToShow(4);
            } else {
                setItemsToShow(5);
            }
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
                {item?.items?.slice(0, itemsToShow).map((item) => (
                    <PlaylistItem item={item} key={item.encodeId} />
                ))}
            </div>
        </div>
    );
};

export default memo(PlaylistSection);
