import React from 'react';
import Project from './component/project'
import maplechat from './img/maplechat_preview.png'
import portfolio from './img/portfolio_preview.png'
import img_process from './img/image_processing_preview.png'


function Portfolio() {
  return (
    <>
      <section id="portfolio" className="mb">
        <div className="d-flex flex-wrap justify-center">
          <Project
            title="MapleChat"
            description="A chat app built with Django, featuring cartoon character interactions using sprites from the game MapleStory."
            link="https://github.com/smileycat/MapleChat"
            image={maplechat}
          />
          <Project
            title="Portfolio"
            description="This portfolio was my first experience of creating a single-page-app, using React JS. Built with mobile-first & simplicity in mind."
            link="https://github.com/smileycat/MapleChat"
            image={portfolio}
          />
          <Project
            title="Image Processing"
            description="Marionette Replacement: a source video with marionette monkey hopping around. Replace the monkey with another character retaining the same motion. By python."
            link="https://github.com/smileycat/MapleChat"
            image={img_process}
          />
        </div>
      </section>
    </>
  )
}

export default Portfolio