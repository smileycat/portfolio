import React from 'react';
import Card from './Card';
import maplechat from '../../assets/demo.mov';
import maplechat_thumb from '../../assets/maplechat_preview.jpg';
import taskflow from '../../assets/taskflow_preview.jpg';
import taskflow_thumb from '../../assets/taskflow_thumb.jpg';
import marionette from '../../assets/marionette_preview.gif';
import marionette_thumb from '../../assets/marionette.jpg';

function Projects() {
  return (
    <section id="portfolio">
      <Card
        title="MapleChat"
        description="A chat app featuring character gameplay using cartoony sprites from the game MapleStory. Django was what I learned from a uni project."
        link="https://github.com/smileycat/MapleChat"
        isVideo={true}
        preview={maplechat}
        tags="# Django, Django Channel, Websockets"
        thumbnail={maplechat_thumb}
      />
      <Card
        title="Marionette Replacement"
        description="Replace the monkey puppet in the blue screen video with another character, while retaining the same motion."
        link="https://github.com/smileycat/Marionette-Replacement"
        isVideo={false}
        preview={marionette}
        tags="# Python, Opencv, Uni Project"
        thumbnail={marionette_thumb}
      />
      <Card
        title="Taskflow"
        description="Task managing app. List down your scheduled tasks to keep them organised."
        link="https://smileycat.github.io/Taskflow"
        isVideo={false}
        preview={taskflow}
        tags="# HTML, SCSS, JavaScript"
        thumbnail={taskflow_thumb}
      />
    </section>
  );
}

export default Projects;
