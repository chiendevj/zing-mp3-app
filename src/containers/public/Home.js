import React from 'react';
import { PlaylistSection, RankingReleaseSection, ReleaseSection, Slider } from '../../components';
import { useSelector } from 'react-redux';

function Home() {
  const { hEditorThemes, releaseList, rankingReleaseList  } = useSelector(state => state.app);

  return (
    <div className='overflow-y-auto'>
      {/* Slider */}
      <Slider />
      {/* Danh sách mới phát hành */}
      <ReleaseSection releaseList={releaseList}/>
      {/* Playlist */}
      {hEditorThemes.map((hEditorTheme) => (
        hEditorTheme?.items?.length > 0 && (
          <PlaylistSection hEditorTheme={hEditorTheme} key={hEditorTheme.sectionId} />
        )
      ))}
      {/* BXH mới */}
      <RankingReleaseSection rankingReleaseList={rankingReleaseList} />
      {/* zingchart */}

      {/* Top 100 */}

      {/* Album hot */}
    </div>
  );
}

export default Home;
