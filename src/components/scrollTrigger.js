import React, { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useLocoScroll from "../useLocoScroll";
gsap.registerPlugin(ScrollTrigger);
function ScrollTriggerAnim() {
  const boxRef = useRef();
  useLocoScroll();
  useLayoutEffect(() => {
    setTimeout(() => {
      gsap.to("#box2", {
        scrollTrigger: {
          trigger: "#box2",
          scroller: "#smooth-scroll",
          toggleActions: "restart pause reverse pause",
        },
        x: 400,
        duration: 3,
        rotation: "+=360",
      });
      boxRef.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#box3",
            scroller: "#smooth-scroll",
            toggleActions: "play reverse resume play",
          },
        })
        .to(boxRef.current, { x: 400, duration: 3, rotation: "+=360" })
        .to(boxRef.current, { backgroundColor: "blue", color: "white" })
        .fromTo(boxRef.current, { x: 400 }, { x: 0, duration: 3 });
    }, 100);
  }, []);
  return (
    <div className="basic">
      <h1>Scroll Trigger gsap animations</h1>
      <div className="test-box2">
        <b>box 1</b>
      </div>{" "}
      <br />
      <h1>Scroll Trigger</h1>
      <div id="box2" className="test-box2">
        <b>box 2</b>
      </div>
      <h1>Advanced scroll trigger(pause play reverse on scroll)</h1>
      <div id="box3" ref={boxRef} className="test-box2">
        <b>Box 3 </b>
      </div>
    </div>
  );
}

export default ScrollTriggerAnim;
