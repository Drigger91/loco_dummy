import logo from './logo.svg';
import './App.css';
import useLocoScroll from './useLocoScroll';
import gsap from 'gsap';
import './locomotive-scroll.css'
import ScrollTrigger from "gsap/ScrollTrigger"
import Home from './components/home';
import ScrollTriggerAnim from './components/scrollTrigger';
import LocomotiveScrollAnim from './components/LocoScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function App() {
  useLocoScroll();
  return (
    <div className="App" id='smooth-scroll'>
      <div className='container'>
        <Home/>
        <LocomotiveScrollAnim/>
        <ScrollTriggerAnim/>
        
      </div>
      
    </div>
  );
}

export default App;
