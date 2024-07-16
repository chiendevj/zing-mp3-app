import React, { memo, useState } from 'react'
import CategoriesRelaseButton from './CategoriesRelaseButton';
import { toast } from 'react-toastify';
import SongReleaseItem from './SongReleaseItem';

const ReleaseSection = ({ releaseList }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

     if (!releaseList || !releaseList.items) {
        return toast.warn('Đang tải ...');
    }
    return (
        <div className='container px-14 mt-12'>
            <h3 className='mb-5'>
                <span className='text-xl font-bold'>{releaseList?.title}</span>
            </h3>
            <CategoriesRelaseButton
                categories={Object.keys(releaseList?.items)}
                selectedCategory={selectedCategory}
                onSelectCategory={handleSelectCategory}
            />
            <div className='grid 1300:grid-cols-3 grid-cols-2'>
                {releaseList?.items[selectedCategory].slice(0,12).map((item, index) => (
                    <SongReleaseItem item = {item} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default memo(ReleaseSection)