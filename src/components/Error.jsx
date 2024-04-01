import React from 'react'

function Error({error}) {
  return (
    <div className='text-center font-bold text-red-500 mt-10'>{error}</div>
  )
}

export default Error