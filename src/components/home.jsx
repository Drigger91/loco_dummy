import React, { useEffect } from 'react'
import styles from './home.module.css' 
import gsap from 'gsap'
function Home() {
  useEffect(()=>{
    setTimeout(() => {
      gsap.to('.image',{x:400,duration:8,rotation:"+=360"})
    }, 1000);
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