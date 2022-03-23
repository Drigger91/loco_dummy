import "./App.css";
import useLocoScroll from "./useLocoScroll";
import gsap from "gsap";
import "./locomotive-scroll.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import Home from "./components/home";
import ScrollTriggerAnim from "./components/scrollTrigger";
import LocomotiveScrollAnim from "./components/LocoScrollTrigger";
import LocoBasic from "./components/LocoBasic";
import Pinned from "./components/pinned";
import Done from "./components/done";

gsap.registerPlugin(ScrollTrigger);
function App() {
  useLocoScroll();
  return (
    <div className="App" id="smooth-scroll">
      <div className="container">
        <Home />
        <LocoBasic />
        <LocomotiveScrollAnim />
        <Pinned />
        <ScrollTriggerAnim/>
        <Done/>
      </div>
    </div>
  );
}

export default App;
