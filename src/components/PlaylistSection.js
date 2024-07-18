import React, { memo, useState, useEffect } from 'react';
import icons from '../untils/icons';
import PlaylistItem from './PlaylistItem';

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
        <div className='container px-14 mt-12'>
            <h3 className='flex justify-between items-center mb-5'>
                <span className='text-xl font-bold'>{item?.title}</span>
                <span className='flex gap-1 items-center text-xs font-medium cursor-pointer text-main-700 hover:text-main-500'>
                    TẤT CẢ {<icons.GoChevronRight size={20} />}
                </span>
            </h3>
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
