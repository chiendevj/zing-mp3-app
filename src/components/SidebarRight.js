import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import icons from '../untils/icons'
function SidebarRight() {
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: '#0e8080', // Màu của thanh cuộn
      borderRadius: '4px'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <div className='h-full'>
      <div className='flex w-full h-full flex-col'>
        <div className='h-[70px] px-2 py-[14px] w-full flex-none text-sm flex items-center justify-between gap-1 text-main-700'>
          <div className='p-2 bg-main-200 rounded-full'><span className='rounded-full text-main-500 bg-main-100 p-1'>Danh sách phát</span></div>
          <div className='gap-2 flex mx-4'>
          <span className='p-2 rounded-full bg-main-200 hover:opacity-70'>{<icons.CiAlarmOn size={18} />}</span>
          <span className='p-2 rounded-full bg-main-200 hover:opacity-70'>{<icons.RxDotsHorizontal size={18} />}</span>
          </div>
        </div>
        <div className='w-full flex-auto h-full pb-[89px]'>
          <Scrollbars
            style={{ width: '100%', height: '100%' }}
            autoHide
            renderThumbHorizontal={renderThumb}
            renderThumbVertical={renderThumb}
          >
            <div className='p-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit, expedita voluptatem cupiditate quia ipsum maiores magni. Enim nisi rerum, deserunt laudantium iste vitae perspiciatis labore, tempore praesentium quos aut.
            </div>
          </Scrollbars>
        </div>
      </div>
    </div>
  )
}

export default SidebarRight
