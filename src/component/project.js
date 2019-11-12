import React from 'react'


function Project(props) {
  return (
    <div className="project flex-col justify-between card">
      <h4>{props.title}</h4>
      <div className="text-justify">{props.description}</div>
      <div className="figure">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src={props.image} alt=""></img>
        </a>
      </div>
    </div>
  )
}

export default Project