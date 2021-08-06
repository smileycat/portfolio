import React, { useEffect, useState } from 'react';

function Card(props) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = e => {
    if (showModal && e.key === 'Escape') {
      e.preventDefault();
      setShowModal(false);
    }
  };

  return (
    <>
      <div className="project animated fadeInRight">
        <div className="text-container flex-1 d-flex-v">
          <div className="content-upper">
            <a
              href={props.link}
              target="_blank"
              className="d-flex items-center"
              rel="noopener noreferrer"
            >
              <h4 className="bold">{props.title}</h4>
              <i style={{ color: 'lightgray' }} className="ml-3 fas fa-share"></i>
            </a>
            <div className="text-justify description mt-4">{props.description}</div>
          </div>
          <div className="content-bottom">
            <div className="divider mt-4 mb-4"></div>
            <div className="tags">
              <div>{props.tags}</div>
            </div>
          </div>
        </div>
        <div className="flex-1 img-container">
          <img src={props.thumbnail} onClick={() => setShowModal(!showModal)} alt=""></img>
        </div>
      </div>
      <div className={showModal ? 'modal d-flex-v animated zoomIn' : 'modal d-none'}>
        <button className="btn-close" onClick={() => setShowModal(!showModal)}>
          &times;
        </button>
        {props.isVideo ? (
          <video className="modal-content" src={props.preview} autoPlay loop controls />
        ) : (
          <img className="modal-content" src={props.preview} alt="" />
        )}
      </div>
    </>
  );
}

export default Card;
