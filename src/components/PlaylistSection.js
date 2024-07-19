import React, { memo, useState, useEffect } from 'react';
import PlaylistItem from './PlaylistItem';
import TitleSection from './TitleSection';

const PlaylistSection = ({ item }) => {
    const [itemsToShow, setItemsToShow] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1300) {
                setItemsToShow(4);
            } else {
                setItemsToShow(5);
            }
        };

        handleResize(); 

        window.addEventListener('resize', handleResize); 
        return () => {
            window.removeEventListener('resize', handleResize); 
        };
    }, []);

    return (
        <div className='container mt-12'>
            <TitleSection title = {item?.title} />
            <div className='w-full my-5 flex flex-col'>
                <div className='relative overflow-hidden font-bold'>
                    <div className='flex overflow-hidden'>
                        {item?.items?.slice(0, itemsToShow).map((item) => (
                            <PlaylistItem item={item} key={item.encodeId} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(PlaylistSection);
