import React from 'react'
import { toast } from 'react-toastify'

function Personal() {
  toast.warn('Đang cập nhật ...')
  return (
    <div className='px-14'>
      <h1 className='w-full h-[70vh] text-5xl font-bold text-main-500 flex justify-center items-center'>
          UPDATING ...
      </h1>
    </div>
  )
}

export default Personal