import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as apis from '../../apis'
function HubDetail() {
    const {hid} = useParams()
    const [hubDetailData, setHubDetailData] = useState(null)
    useEffect(() => {
      const fetchHubDetail = async (hid) => {
        const response = await apis.apiGetHubDetail(hid)
        console.log(response);
        if (response.data.err === 0) {
            setHubDetailData(response.data.data)
        }
      }
    
      fetchHubDetail()
    }, [])

    console.log(hubDetailData);
    
  return (
    <div>{hid}</div>
  )
}

export default HubDetail