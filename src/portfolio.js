import React from 'react';
import Project from './component/project'
import maplechat from './media/demo.mov'
import maplechat_thumb from './media/maplechat_preview.jpg'
import taskflow from './media/taskflow_preview.jpg'
import taskflow_thumb from './media/taskflow_thumb.jpg'
import marionette from './media/marionette_preview.gif'
import marionette_thumb from './media/marionette.jpg'


function Portfolio() {
  return (
    <>
      <section id="portfolio" className="">
        <Project
          title="MapleChat"
          description="A chat app featuring character gameplay using cartoony sprites from the game MapleStory. Django was what I learned from a uni project."
          link="https://github.com/smileycat/MapleChat"
          isVideo={true}
          preview={maplechat}
          tags="# Django, Authentication, CSS, JavaScript"
          thumbnail={maplechat_thumb}
        />
        <Project
          title="Marionette Replacement"
          description="Replace the monkey puppet in the blue screen video with another character, while retaining the same motion."
          link="https://github.com/smileycat/Marionette-Replacement"
          isVideo={false}
          preview={marionette}
          tags="# Python, Opencv"
          thumbnail={marionette_thumb}
        />
        <Project
          title="Taskflow"
          description="Task managing app. List down your scheduled tasks to keep them organised."
          link="https://smileycat.github.io/Taskflow"
          isVideo={false}
          preview={taskflow}
          tags="# HTML, SCSS, Vanilla JavaScript"
          thumbnail={taskflow_thumb}
        />
      </section>
    </>
  );
}

export default Portfolio