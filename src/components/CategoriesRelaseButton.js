import React from 'react';
import icons from '../untils/icons'

function CategoriesRelaseButton({ categories, selectedCategory, onSelectCategory }) {
    return (
        <div className='flex justify-between items-center mb-4'>
            <div className='flex space-x-3'>
                {categories?.map(category => (
                    <button
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className={`py-1 px-6 rounded-full text-xs border  ${selectedCategory === category ? 'bg-main-500 text-white border-main-500' : 'hover:border-main-700 bg-main-300 border-[#b9c3c3]'}`}
                    >
                        {category === 'all' ? 'TẤT CẢ' : category === 'vPop' ? 'VIỆT NAM' : 'QUỐC TẾ'}
                    </button>
                ))}
            </div>
            <span className='flex gap-1 items-center text-xs font-medium cursor-pointer text-main-700 hover:text-main-500'>TẤT CẢ {<icons.GoChevronRight size={20} />}</span>
        </div>
    );
}

export default CategoriesRelaseButton;
