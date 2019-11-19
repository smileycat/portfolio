import React from 'react'


function Project(props) {
  var preview = (<img src={props.preview} className="figure" alt=""></img>);

  if (props.isVideo)
    preview = (
      <video className="figure" autoPlay loop>
        <source src={props.preview} type="video/mp4" />
      </video>
    );

  return (
    <div className="card project flex-col justify-between">
      <a href={props.link} target="_blank" className="d-flex items-center title" rel="noopener noreferrer">
        <h5>{props.title}</h5>
        <i className="ml fas fa-share-square"></i>
      </a>
      <div className="text-justify">{props.description}</div>
        {preview}
    </div>
  )
}

export default Project