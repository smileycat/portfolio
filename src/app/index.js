import React from 'react';
import Projects from './components/Projects';
import { person, skills } from '../assets/portfolio.json';

function App() {
  return (
    <>
      <section id="cover" className="animated zoomIn">
        <div>
          <span className="title">Welcome,</span>
          <div className="motto">I am a Software Developer</div>
        </div>
      </section>
      <section id="about" className="container-md">
        <div className="ml-3 flex-100">
          <h1 className="title mb-6">{person.name}</h1>
        </div>
        <div className="mr-3 ml-3 flex-1">
          <article className="description">
            <span>
              <i className="mr-2 fas fa-map-marker-alt" />
              {person.location}
              <div
                style={{
                  fontStyle: 'italic',
                  color: '#aaa',
                  float: 'right',
                  transform: 'scale(0.85)',
                }}
              >
                last updated June 2020
              </div>
            </span>
            <p className="text-justify">
              I am a graduate with Bachelor Computer Science who loves doing software development
              and making web projects. I have solid fundamentals in data structure, object-oriented
              programming, HTTP protocols, and personally having Java, JavaScript being my strong
              programming language to work with.
            </p>
            <p className="text-justify">
              Currently I am having training in FDM Group that further specialises my skills in Java
              and Spring Framework.
            </p>
          </article>
        </div>
        <div id="skillsets" className="mr-3 ml-3 flex-1">
          {skills.map(({ name, icon, color }) => (
            <div key={name} className="d-flex-v items-center">
              <i style={{ color: color }} className={icon}></i>
              <div className="hidden-cap">{name}</div>
            </div>
          ))}
        </div>
      </section>
      <Projects />
    </>
  );
}

export default App;
