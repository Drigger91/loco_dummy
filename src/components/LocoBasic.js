import React,{useEffect} from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from './locoscroll.module.css'
function LocoBasic() {
    useEffect(() => {
        setTimeout(() => {
          
          gsap.to("#trigger2", {
            backgroundColor: "orange",
            scrollTrigger: {
              // id: "child",
              trigger: "#trigger2",
              start: "top bottom+=10%",
              scroller: "#smooth-scroll",
              scrub: true,
            },
          });
          gsap.from(".line-2", {
            scrollTrigger: {
              trigger: "#trigger2",
              start: "top bottom",
              end:"top top",
              scroller: "#smooth-scroll",
              scrub: true,
              markers: true
            },
            scaleX:0,
            scaleY:0,
            transformOrigin: "bottom left",
            ease: "ease",
          });
        });
        ScrollTrigger.refresh();
      }, []);
  return (
<div id="trigger2" className={styles.lococontainer}>
          
          <div className={styles.loco}>
          <span class="line line-2"></span>
            <h2>Basic Loco scroll with gsap</h2>
          </div>
        </div>  )
}

export default LocoBasic