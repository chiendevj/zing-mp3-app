import React from 'react';
import { Section, Slider } from '../../components';
import { useSelector } from 'react-redux';

function Home() {
  const { hEditorThemes } = useSelector(state => state.app);

  return (
    <div className='overflow-y-auto'>
      <Slider />
      {hEditorThemes.map((hEditorTheme) => (
        hEditorTheme?.items?.length > 0 && (
          <Section hEditorTheme={hEditorTheme} key={hEditorTheme.sectionId} />
        )
      ))}
    </div>
  );
}

export default Home;
