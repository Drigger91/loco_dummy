import React, { useEffect, useRef ,useLayoutEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useLocoScroll from "../useLocoScroll";
import style from "./locoscroll.module.css";
gsap.registerPlugin(ScrollTrigger);
function Pinned() {
  const pinRef = useRef();
  useLayoutEffect(() => {
    setTimeout(() => {
      gsap.to("#trigger3", {
        backgroundColor: "rgb(150,200,175)",
        scrollTrigger: {
          trigger: ".basic",
          start: "top 100%",
          end: "top top",
          scroller: "#smooth-scroll",
          scrub: true,
          pin: "#trigger3",
          pinSpacing: true,
        },
      });
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#trigger3",
          start: "bottom bottom",
          end: "+=100%",
          scroller: "#smooth-scroll",
          scrub: true,
          markers: true,
        },
      });
      tl.from("#trigger3 h2", {
        scale: 0.3,
        rotation: 45,
        autoAlpha: 0,
        ease: "power2",
      })
        .from(
          ".line-3",
          { scaleX: 0, transformOrigin: "left center", ease: "none" },
          0
        )
        .to("#trigger3", { backgroundColor: "#28a92b" }, 0);
    },80);
    ScrollTrigger.refresh();
  }, []);

  return (
    <div id="trigger3" className={style.lococontainer}>
      <div className={style.loco}>

        <h2><span class="line line-3"></span>Pinned section with locoscroll implemented with gsap</h2>
      </div>
    </div>
  );
}

export default Pinned;