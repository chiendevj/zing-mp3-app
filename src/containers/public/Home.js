import React from 'react';
import { PlaylistSection, RankingReleaseSection, ReleaseSection, Slider } from '../../components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { 
      hEditorThemes, releaseList, rankingReleaseList,
      zingchartBanners, top100, albumHot 
    } = useSelector(state => state.app);

  const navigate = useNavigate()
  
  const handleClickBannerChart = (link) => { 
    navigate(link.split('.')[0])
   }

  return (
    <div className='overflow-y-auto'>
      {/* Slider */}
      <Slider />
      {/* Danh sách mới phát hành */}
      <ReleaseSection releaseList={releaseList} />
      {/* Playlist */}
      {hEditorThemes.map((hEditorTheme) => (
        hEditorTheme?.items?.length > 0 && (
          <PlaylistSection item={hEditorTheme} key={hEditorTheme.sectionId} />
        )
      ))}
      {/* BXH mới */}
      <RankingReleaseSection rankingReleaseList={rankingReleaseList} />
      {/* zingchart */}

      <div className="px-14 w-full flex">
        {zingchartBanners?.map((item) => (
          <div className="w-1/3 px-2" onClick={() => {handleClickBannerChart(item.link)}}>
            <div className="w-full rounded overflow-hidden group cursor-pointer">
              <div className="transform transition-transform duration-300 group-hover:scale-110">
                <img src={item.cover} alt={item.link} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top 100 */}
      <PlaylistSection item={top100} />
    
      {/* Album hot */}
      <PlaylistSection item={albumHot} />

      {/* Radio */ }
        
      {/* Đối tác */}


    </div>
  );
}

export default Home;
