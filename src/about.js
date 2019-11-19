import React from 'react';
import me from './media/me.png';
import Navbar from './component/navbar'
import Portfolio from './portfolio'


function AboutPage() {
  return (
    <>
      <Navbar className="animated slideInDown" />
      <About />
      <Portfolio />
    </>
  )
}

function About() {
  return (
    <section id="about" className="animated slideInUp card">
      <div className="col">
        <img src={me} alt="" width="90%" id="me"></img>
      </div>
      <div className="col">
        <div className="group">
          <h3>CHIH-JUNG LIAO</h3>
          <h4 id="job">Web Developer</h4>
        </div>
        <ul className="group">
          <li className="d-block personal-attr">
            <i className="mr fas fa-birthday-cake"></i>
            23 yrs old
            </li>
          <li className="d-block personal-attr">
            <i className="mr fas fa-location-arrow"></i>
            Ultimo, NSW 2007
            </li>
          <li className="d-block personal-attr">
            <i className="mr fas fa-envelope"></i>
            <a href="mailto:liaocrong@outlook.com">liaocrong@outlook.com</a>
          </li>
        </ul>
        <p className="text-justify">
          I’m a final year undergraduate in computer science who’s passionate
          in doing web development projects; I pay attention to UI/ UX details
          and care about aethetics of a page.
        </p>
        <p className="text-justify">
          As well as I love
          frontend, I'm also learning to do more backend and moving forward to
          become a full stack developer in the future.
        </p>
        <ul className="med-icon inline-list">
          <li className="mr">
            <a href="https://github.com/smileycat" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="ml">
            <a href="https://www.linkedin.com/in/chih-jung-liao/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutPage