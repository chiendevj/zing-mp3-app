import React from 'react';
import Slider from 'react-slick';
import RankingReleaseItem from './RankingReleaseItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TitleSection from './TitleSection';
const RankingReleaseSection = ({ rankingReleaseList }) => {
  const settings = {
    infinite: true,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };

  return (
    <div className='container px-14 my-12 overflow-hidden'>
      <TitleSection title = {rankingReleaseList?.title} />
      <div>
        <Slider {...settings}>
          {rankingReleaseList?.items?.map((item, index) => (
            <div key={index}>
              <div className='p-4'>
                <RankingReleaseItem item={item} id={index + 1} />
              </div>
            </div>
          ))}
          <div className='p-4'>
            <div className='bg-main-200 rounded-md p-[10px] flex w-full items-center justify-center h-[140px] group cursor-pointer'>
              <span className='text-main-500 text-lg font-bold transform transition-transform duration-500 group-hover:scale-110' >XEM TẤT CẢ</span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default RankingReleaseSection;
