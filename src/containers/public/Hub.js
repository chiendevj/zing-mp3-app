import React from 'react'
import { useSelector } from 'react-redux'

const Hub = () => {
  const {banners} = useSelector(state => state.hubhome)
  console.log(banners);
  return (
    <div>Hub</div>
  )
}

export default Hub