import React, { useEffect } from 'react';
import { Partner, PlaylistSection, RankingReleaseSection, ReleaseSection, Slider } from '../../components';
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

  useEffect(() => {
    document.title = 'Zing MP3 - Nghe nhạc mới, HOT nhất | miễn phí';
  }, []);

  return (
    <div className='overflow-y-auto'>
      {/* Slider */}
      <Slider />
      {/* Danh sách mới phát hành */}
      <ReleaseSection releaseList={releaseList} />
      {/* Playlist */}
      {hEditorThemes.map((hEditorTheme) => (
        hEditorTheme?.items?.length > 0 && (
          <div className='px-14'>
            <PlaylistSection item={hEditorTheme} key={hEditorTheme.sectionId} />
          </div>
        )
      ))}
      {/* BXH mới */}
      <RankingReleaseSection rankingReleaseList={rankingReleaseList} />
      {/* zingchart */}

      <div className="px-14 w-full flex">
        {zingchartBanners?.map((item) => (
          <div className="w-1/3 px-2" onClick={() => { handleClickBannerChart(item.link) }}>
            <div className="w-full rounded overflow-hidden group cursor-pointer">
              <div className="transform transition-transform duration-300 group-hover:scale-110">
                <img src={item.cover} alt={item.link} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top 100 */}
      <div className='px-14'>
        <PlaylistSection item={top100} />
      </div>
      
      {/* Album hot */}
      <div className='px-14'>
        <PlaylistSection item={albumHot} />
      </div>

      {/* Radio */}

      {/* Đối tác */}
      <Partner />

    </div>
  );
}

export default Home;
