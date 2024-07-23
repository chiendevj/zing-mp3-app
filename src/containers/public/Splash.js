import React from 'react';
import Lottie from 'react-lottie';
import welcomeAnimate from '../../assets/lotties/welcome.json';

function Splash() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: welcomeAnimate,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Lottie 
        options={defaultOptions}
        height={300}
        width={1400}
      />
    </div>
  );
}

export default Splash;
