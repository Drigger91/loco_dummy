import React from 'react'
import useLocoScroll from '../useLocoScroll'
function Done() {
  useLocoScroll();
  setTimeout(()=>{},100)
  return (
    <div className='done'>
        <h1>Done!!</h1></div>
  )
}

export default Done