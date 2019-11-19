import React from 'react';
import Project from './component/project'
import maplechat from './media/demo.mov'
import portfolio from './media/portfolio_preview.jpg'
import marionette from './media/marionette_preview.gif'
// import marionette_static from './media/marionette_static.gif'


function Portfolio() {
  return (
    <>
      <section id="portfolio" className="mb animated slideInUp">
        <div className="d-flex flex-wrap justify-start">
          <Project
            title="MapleChat"
            description="A chat app built with Django, featuring character interactions on top using cartoony sprites from the game MapleStory."
            link="https://github.com/smileycat/MapleChat"
            isVideo={true}
            preview={maplechat}
          />
          <Project
            title="Portfolio"
            description="This portfolio was my first experience of creating a single-page-app, using React JS. Built with mobile-first & simplicity in mind."
            link="https://github.com/smileycat/portfolio"
            isVideo={false}
            preview={portfolio}
          />
          <Project
            title="Image Processing"
            description="Marionette Replacement: a source video with a marionette monkey. Replace with another character retaining the same motion using python."
            link="https://github.com/smileycat/Marionette-Replacement"
            isVideo={false}
            preview={marionette}
          />
        </div>
      </section>
    </>
  )
}

export default Portfolio