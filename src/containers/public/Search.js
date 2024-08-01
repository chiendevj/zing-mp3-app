import React, { useEffect, useState } from 'react'
import * as apis from '../../apis'
import { useLocation } from 'react-router-dom';
import { TitleSection } from '../../components';
import icons from '../../untils/icons';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const query = useQuery();
  const keyword = query.get('q');
  const [searchData, setSearchData] = useState(null)
  const location = useLocation();
  const dispatch = useDispatch()

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');

    const fetchSearch = async () => {
      const response = await apis.apiGetSearchAll(keyword)
      if (response.data.err === 0) {
        setSearchData(response.data.data)
      }
    }
    fetchSearch()
    if (query) {
      fetchSearch()
    }

  }, [location.search]);

  const handleCLickSong = (sid) => {
    dispatch(actions.setCurSongId(sid))
    // dispatch(actions.setCurAlbumId(pid));
      dispatch(actions.play(true))
  }
  return (
    <>
      <div className='w-full border-b-[1px] border-[#b9c3c3] px-14'>
        <div className="container mx-auto flex items-center gap-5 ">
          <h3 className="text-2xl font-semibold pr-5 1300:flex hidden my-3 border-r-[1px] border-[#b9c3c3]">Kết Quả Tìm Kiếm</h3>
          <ul className="flex space-x-10 items-center text-sm">
            <li className='leading-8 border-b-2 border-main-500 py-3 text-main-500 font-medium'>
              <a href="/tim-kiem/tat-ca?q=Hieu%20thu%20bai">TẤT CẢ</a>
            </li>
            <li className='leading-8 border-b-2 hover:border-main-500 py-3 border-transparent'>
              <a className="text-gray-700 font-medium hover:text-main-500" href="#">BÀI HÁT</a>
            </li>
            <li className='leading-8 border-b-2 hover:border-main-500 py-3 border-transparent'>
              <a className="text-gray-700 font-medium hover:text-main-500" href="#">PLAYLIST/ALBUM</a>
            </li>
            <li className='leading-8 border-b-2 hover:border-main-500 py-3 border-transparent'>
              <a className="text-gray-700 font-medium hover:text-main-500" href="#">NGHỆ SĨ/OA</a>
            </li>
            <li className='leading-8 border-b-2 hover:border-main-500 py-3 border-transparent'>
              <a className="text-gray-700 font-medium hover:text-main-500" href="#">MV</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='px-14 my-6'>
        <TitleSection title='Nổi bật' top100={true} />
        <div className='grid grid-cols-3 gap-3'>
          <div className='flex gap-2 items-center p-[10px] bg-main-200 group rounded overflow-hidden'>
            <div className='relative rounded overflow-hidden w-[84px] h-[84px]'>
              <img
                src={searchData?.top?.thumbnail}
                alt={searchData?.top?.title}
                title={searchData?.top?.title}
                className='w-full h-auto transform transition-transform duration-500 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-opacity duration-300'>
                <button
                  onClick={() => { handleCLickSong(searchData?.top?.encodeId) }}
                  className='absolute z-10 text-white opacity-0 group-hover:opacity-100 p-1 transition-opacity duration-200'
                >
                  <icons.MdPlayArrow size={25} />
                </button>
              </div>
            </div>
            {/* <div className='flex flex-col mt-2 leading-none'>
              <span
                onClick={() => { handleCLickSong(item.encodeId) }}
                className={`text-main-600 text-sm font-medium`}>
                {item?.title}
              </span>
              <div className={`text-xs 'text-main-700 font-normal`}>
                {item?.artists.length > 0 ? (
                  <>
                    {item?.artists?.slice(0, 2).map((artist, index) => (
                      <NavLink
                        key={artist.id}
                        to={`/${artist.alias}`}
                        className="cursor-pointer hover:text-main-500 hover:underline"
                      >
                        {artist.name}{artist.spotlight && '★'}
                        {index < item.artists.length - 1 && ', '}
                      </NavLink>
                    ))}
                    {item.artists.length > 1 && '...'}
                  </>
                )
                  :
                  (item?.artists?.map((artist, index) => (
                    <NavLink
                      key={artist.id}
                      to={`/${artist.alias}`}
                      className="cursor-pointer hover:text-main-500 hover:underline"
                    >
                      {artist?.name}{artist?.spotlight && '★'}
                      {index < item?.artists?.length - 1 && ', '}
                    </NavLink>
                  )))
                }
              </div>
            </div> */}
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Search