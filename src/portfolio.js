import React from 'react';
import Project from './component/project'
import maplechat from './media/demo.mov'
import maplechat_thumb from './media/maplechat_preview.jpg'
import portfolio from './media/portfolio_preview.jpg'
import marionette from './media/marionette_preview.gif'
import marionette_thumb from './media/marionette.jpg'

// import marionette_static from './media/marionette_static.gif'


function Portfolio() {
  return (
    <>
      <section id="portfolio" className="mb">
        <div className="d-flex flex-wrap justify-start">
          <Project
            title="MapleChat"
            description="A chat app featuring character interactions on top using cartoony sprites from the game MapleStory."
            link="https://github.com/smileycat/MapleChat"
            isVideo={true}
            preview={maplechat}
            tags="# Django, CSS, JavaScript, Authentication system"
            thumbnail={maplechat_thumb}
          />
          <Project
            title="Portfolio"
            description="This page was my first experience of creating a single-page-app. Built with mobile-first & simplicity in mind."
            link="https://github.com/smileycat/portfolio"
            isVideo={false}
            preview={portfolio}
            tags="# ReactJs, SCSS"
            thumbnail={portfolio}
          />
          <Project
            title="Marionette Replacement"
            description="Replace the monkey puppet in the source video with another character, while retaining the same motion."
            link="https://github.com/smileycat/Marionette-Replacement"
            isVideo={false}
            preview={marionette}
            tags="# Python, Image Processing"
            thumbnail={marionette_thumb}
          />
        </div>
      </section>
    </>
  )
}

export default Portfolio