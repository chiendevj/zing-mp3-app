import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as apis from '../../apis';
import icons from '../../untils/icons';

function Artist() {
  const [artist, setArtist] = useState(null);
  const { name } = useParams()

  useEffect(() => {
    const fetchDetailArtist = async () => {
      const response = await apis.apiGetArtist(name)
      if (response.data.err === 0) {
        setArtist(response.data.data);
      }
    };

    fetchDetailArtist();
  
    
  }, [name])
  
  return (
    <div>{artist?.biography}</div>
  )
}

export default Artist