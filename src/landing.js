import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './component/navbar'
import Particles from 'react-particles-js';
import particleSettings from './particles.json';
import './scss/landing.scss'


function Landing() {
  return (
    <>
    <Particles className="particles" params={particleSettings} />
    <div id="landing-bg" className="d-flex-v justify-center">
      <Navbar className="landing"/>
      <section id="landing" className="flex-container flex-fill animated zoomIn">
        <div className="col"></div>
        <div className="col self-center">
          <div className="group">
            <div>Hi, I'm</div>
            <div><b>CHIH-JUNG LIAO</b></div>
            <div>Web developer</div>
          </div>
          <Link to="/about" className="btn-showcase">SEE MORE ABOUT ME</Link>
        </div>
      </section>
    </div>
    </>
  )
}

export default Landing;
