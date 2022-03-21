import React, { useLayoutEffect } from 'react'
import useLocoScroll from '../useLocoScroll'
import gsap from 'gsap';
function Done() {
  useLocoScroll();
  useLayoutEffect(()=>{
    setTimeout(()=>{
      gsap.to('#doneid',{color:"black"})
    },80)
  },[])
  return (
    <div className='done' id='doneid'>
        <h1>Done!!</h1></div>
  )
}

export default Done