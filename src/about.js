import React from 'react';
import me from './media/me.png';
import Navbar from './component/navbar'
import Portfolio from './portfolio'


function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
      <Portfolio />
    </>
  )
}

function About() {
  return (
    <section id="about" className="animated slideInUp card">
      <div id="me" className="col">
        <img src={me} alt="" width="90%"></img>
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
          I'm a final year undergraduate who is soon to complete my CS degree.
          I love doing web developments and always thirst for new knowledge for improving my web fundamental skills.
          
          I'm especially interested in a front-end developer role.
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