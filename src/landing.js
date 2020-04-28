import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './component/navbar'
import './scss/landing.scss'


function Landing() {
  return (
    <>
      <div id="landing-bg" className="d-flex-v">
        <Navbar className="landing" />
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
