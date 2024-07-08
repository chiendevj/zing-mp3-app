import React from 'react'
import { Slider, Header } from '../../components'

function Home() {

  return (
    <div className='overflow-y-auto'>
      <div className='h-[70px] px-14 flex items-center '>
      <Header/>
      </div>
      <Slider/>
    </div>
  )
}

export default Home