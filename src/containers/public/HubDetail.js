import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as apis from '../../apis'
import { PlaylistSection } from '../../components'
function HubDetail() {
  const { hid } = useParams()
  const [hubDetailData, setHubDetailData] = useState(null)
  useEffect(() => {
    const fetchHubDetail = async () => {
      const response = await apis.apiGetHubDetail(hid)
      console.log(response);
      if (response.data.err === 0) {
        setHubDetailData(response.data.data)
      }
    }

    fetchHubDetail()
  }, [hid])

  return (
    <>
      <div className='1300:max-h-80 max-h-60 w-full'>
        <img src={hubDetailData?.cover} alt={hubDetailData?.title} title={hubDetailData?.title} className='w-full h-full' />
      </div>
      <div className='px-14 container pt-8'>
        {
          hubDetailData?.sections &&
          hubDetailData?.sections?.map(item => (
            <PlaylistSection item={item} top100={true} />
          ))
        }
      </div>
    </>
  )
}

export default HubDetail