import React from 'react';
import SkillIcon from './component/skillicon';


function About() {
  return (
    <>
      <section id="about" className="container-md">
        <div className="ml-3 flex-100">
          <h1 className="title mb-6">Chih-Jung Liao</h1>
        </div>
        <div className="mr-3 ml-3 flex-1">
          <div className="description">
            <i className="mr-2 fas fa-map-marker-alt"></i>
            <span>Sydney, NSW 2007</span>
            <p className="text-justify">
              I'm a recent graduate from Computer Science who loves doing software development
              and really enjoyed doing web projects. I have solid fundamentals in data structure,
              object-oriented programming, HTTP protocols, and personally having Java, JavaScript
              being my strong programming language to work with. Now I'm working myself to become a great full
              stack developer one day.
            </p>
            <p>Looking to move out for job location.</p>
          </div>
        </div>
        <div id="skills" className="mr-3 ml-3 skill-icon">
          <SkillIcon icon="fab fa-java" caption="Java" />
          <SkillIcon icon="fab fa-python" caption="Python" />
          <SkillIcon icon="fab fa-html5" caption="HTML" />
          <SkillIcon icon="fab fa-css3-alt" caption="CSS" />
          <SkillIcon icon="fab fa-js-square" caption="JavaScript" />
          <SkillIcon icon="fab fa-react" caption="ReactJS" />
          <SkillIcon icon="fab fa-node" caption="Node.JS" />
          <SkillIcon icon="fab fa-gulp" caption="gulp" />
        </div>
      </section>
    </>
  )
}

export default About;