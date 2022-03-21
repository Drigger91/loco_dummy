import React, { useEffect,useLayoutEffect } from 'react'
import styles from './home.module.css' 
import useLocoScroll from '../useLocoScroll'
import gsap from 'gsap'
function Home() {
  useLocoScroll();
  useLayoutEffect(()=>{
    setTimeout(() => {
      gsap.to('.image',{x:200,scrollTrigger:{trigger:".image", scroller:"#smooth-scroll"} , duration:8,rotation:"+=360"})
    }, 100);
  },[])
  return (
    <div className={styles.home}>
        <h1>Home</h1>
        <h2>
            This is the basic page with just smooth scroll enabled and basic gsap animation
        </h2>
        <img className='image' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg'/>
        </div>
  )
}

export default Home