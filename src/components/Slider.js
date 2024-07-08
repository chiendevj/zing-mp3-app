import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Slider() {
    const { banner } = useSelector(state => state.app);
    const [cycleIndex, setCycleIndex] = useState(0);
    const itemsToShow = 3;
    const intervalTime = 3000; // Thời gian chuyển đổi giữa các chu kỳ (ms)

    useEffect(() => {
        const interval = setInterval(() => {
            setCycleIndex(prevIndex => (prevIndex + 1) % itemsToShow);
        }, intervalTime);

        return () => clearInterval(interval); // Dọn dẹp interval khi component bị xóa
    }, [itemsToShow]);

    const getVisibleItems = () => {
        let visibleItems = [];
        for (let i = 0; i < itemsToShow; i++) {
            visibleItems.push(banner[(cycleIndex + i) % banner.length]);
        }
        return visibleItems;
    };

    return (
        <div className='flex overflow-hidden w-full px-14 pt-8 pb-4'>
            {getVisibleItems().map((item, index) => (
                <img
                    key={item?.encodeId}
                    src={item?.banner}
                    className='flex-1 object-contain transition-transform duration-1000 rounded-lg w-1/3'
                    style={{
                        transform: `translateX(${index * 5}%)`
                    }}
                    alt={`Banner ${index + 1}`}
                />
            ))}
        </div>
    );
}

export default Slider;
