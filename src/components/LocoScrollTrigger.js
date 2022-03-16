import React ,{useEffect,useRef} from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useLocoScroll from "../useLocoScroll";
import style from './locoscroll.module.css'
gsap.registerPlugin(ScrollTrigger);
function LocomotiveScrollAnim() {
    const pinRef = useRef();
    useEffect(() => {
        setTimeout(() => {
          gsap.to("#trigger", {
            backgroundColor: "rgb(150,200,75)",
            scrollTrigger: {
              // id: "child",
              trigger: ".basic",
              start: "top 100%",
              end:"top 50%",
              scroller: "#smooth-scroll",
              scrub: true,
              pin:'#trigger',
              pinSpacing:true
            },
          });
          gsap.from(".line-1", {
            scrollTrigger: {
              trigger: "#trigger",
              start: "bottom bottom",
              end:"+=100%",
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
        <div id="trigger" ref={pinRef} className={style.lococontainer} >//container
          <div className={style.loco}>
          <span class="line line-1"></span>
            <h2>section with locoscroll implemented with gsap</h2>
          </div>
        </div>
      );
}

export default LocomotiveScrollAnim