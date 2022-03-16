import React from 'react'
import styles from './home.module.css'
function Home() {
  return (
    <div className={styles.home}>
        <h1>Home</h1>
        <h2>
            This is the basic page with just smooth scroll enabled and basic gsap animation
        </h2>
        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg'/>
        </div>
  )
}

export default Home