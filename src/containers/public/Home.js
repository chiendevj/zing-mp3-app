import React, {useEffect} from 'react'
import Header from '../../components/Header'
import * as apis from '../../apis'

function Home() {

  useEffect(() => {
    const fetchHomeData = async () => {
      const response = await apis.getHome()
      console.log(response);
    }

    fetchHomeData()
  }, [])
  return (
    <div className='overflow-y-auto'>
      <div className='h-[70px] px-[60px] flex items-center '>
      <Header/>
      </div>
    </div>
  )
}

export default Home