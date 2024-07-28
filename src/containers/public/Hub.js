import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { toast } from 'react-toastify';
import { PlaylistSection, TitleSection } from '../../components';

const Hub = () => {
  const { banners, featured, nations, topTopic, hubPlaylists } = useSelector(state => state.hubhome)
  const [showAll, setShowAll] = useState(false)
  const [itemShow, setItemShow] = useState(8)
  const navigate = useNavigate()
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    waitForAnimate: false,
  };

  const handleShowAllTopic = () => {
    setShowAll((prev) => !prev);
  }

  useEffect(() => {
    if (showAll) {
      setItemShow(topTopic.length)
    } else {
      setItemShow(8)
    }
  
  }, [showAll, featured])
  
  console.log(hubPlaylists);

  return (
    <div className='px-14'>

      {/* Banners */}
      <div className='w-full max-h-96 my-4'>
        <Slider {...settings}>
          {banners.map((item) => (
            <div className='w-full h-full rounded-md overflow-hidden'>
              <img src={item.cover} alt={item.link} className='w-full h-full cursor-pointer' onClick={() => { toast.error('Bảo trì >_<') }} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Featured */}
      <div className='mt-12'>
        <div className='w-full text-xl text-main-600 font-bold my-4'>
          {featured?.title}
        </div>
        <div className='w-full'>
          <div className='grid 1300:grid-cols-4 grid-cols-3'>
            {featured?.items && featured?.items.map(item => (
              <div className='relative m-3 rounded-lg overflow-hidden group cursor-pointer'>
                <img src={item.thumbnail} alt={item.title} className='transform transition-transform duration-500 group-hover:scale-110' />
                <div className="absolute inset-0 text-2xl font-bold  bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-opacity duration-300">
                  <span className="absolute z-1 text-white p-1 transition-opacity duration-300">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nation */}
      <div className='mt-12'>
        <div className='w-full text-xl text-main-600 font-bold my-4'>
          Quốc Gia
        </div>
        <div className='w-full'>
          <div className='grid 1300:grid-cols-4 grid-cols-3'>
            {nations && nations?.map(item => (
              <div className='relative m-3 rounded-lg overflow-hidden group cursor-pointer'>
                <img src={item.thumbnail} alt={item.title} className='transform transition-transform duration-500 group-hover:scale-110' />
                <div className="absolute inset-0 text-2xl font-bold bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-opacity duration-300">
                  <span className="absolute z-1 text-white p-1 transition-opacity duration-300">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Topics */}
      <div className='mt-12'>
        <div className='w-full text-xl text-main-600 font-bold my-4'>
          Tâm Trạng Và Hoạt Động
        </div>
        <div className='w-full'>
          <div className='grid 1300:grid-cols-4 grid-cols-3'>
            {topTopic && topTopic?.slice(0, itemShow).map(item => (
              <div className='relative m-3 rounded-lg overflow-hidden group cursor-pointer'>
                <img src={item.thumbnail} alt={item.title} className='transform transition-transform duration-500 group-hover:scale-110' />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex pl-[15px] pb-[15px] items-end transition-opacity duration-300">
                  <div className='flex flex-col space-y-1'>
                    <span className="text-2xl font-bold text-white">
                      {item.title}
                    </span>
                    <div className="text-2xl font-bold text-white h-14 w-full flex gap-2">
                      {
                        item?.playlists && item?.playlists.slice(0,3).map(thumb => (
                      <div className='overflow-hidden w-14 h-full rounded-md'>
                        <img src={thumb.thumbnail} alt={thumb.title} />
                      </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center my-3'>
          <button
            onClick={handleShowAllTopic}
            className='font-medium px-5 py-2 border-2 border-main-500 hover:bg-[rgba(14,128,128,0.1)] rounded-full text-sm text-main-500'
          >
            {showAll ? 'Thu gọn' : 'Tất cả'}
          </button>
        </div>
      </div>

      {/* Hub Playlist */}
      <div className='my-12'>
          {
            hubPlaylists  && hubPlaylists.map(item=>(
              <>
              <PlaylistSection item={item} top100={false} hub={true}/>
              </>
            ))
          }
      </div>
    </div>
  )
}

export default Hub