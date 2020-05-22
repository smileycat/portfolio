import React from 'react';
import SkillIcon from './components/SkillIcon';

function About() {
  return (
    <>
      <section id="about" className="container-md">
        <div className="ml-3 flex-100">
          <h1 className="title mb-6">David Liao</h1>
        </div>
        <div className="mr-3 ml-3 flex-1">
          <article className="description">
            <i className="mr-2 fas fa-map-marker-alt"></i>
            <span>Sydney, NSW 2007</span>
            <p className="text-justify">
              I am a graduate with Bachelor Computer Science who loves doing
              software development and making web projects. I have solid
              fundamentals in data structure, object-oriented programming, HTTP
              protocols, and personally having Java, JavaScript being my strong
              programming language to work with.
            </p>
            <p className="text-justify">
              Currently I am having training in FDM Group that further
              specialises my skills in Java and Spring Framework.
            </p>
          </article>
        </div>
        <div id="skillsets" className="mr-3 ml-3 flex-1">
          <SkillIcon icon="fab fa-java" caption="Java" />
          <SkillIcon icon="fab fa-python" caption="Python" />
          <SkillIcon icon="fab fa-sass" caption="Sass" />
          <SkillIcon icon="fab fa-js-square" caption="JavaScript" />
          <SkillIcon icon="fab fa-react" caption="ReactJS" />
          <SkillIcon icon="fab fa-node" caption="Node.JS" />
          <SkillIcon icon="fab fa-git-alt" caption="git" />
          <SkillIcon icon="fab fa-gulp" caption="gulp" />
        </div>
      </section>
    </>
  );
}

export default About;
