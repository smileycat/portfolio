import React from 'react';

class DoubleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (this.state.show && e.key === 'Escape') {
      e.preventDefault();
      this.setState({ show: false });
    }
  }

  toggleModal = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    var preview;
    var modalClass = this.state.show
      ? 'modal d-flex-v animated zoomIn'
      : 'modal d-none';

    if (this.props.isVideo)
      preview = (
        <video
          className="modal-content"
          src={this.props.preview}
          autoPlay
          loop
          controls
        />
      );
    else
      preview = (
        <img className="modal-content" src={this.props.preview} alt="" />
      );

    return (
      <>
        <div className="project animated fadeInRight">
          <div className="text-container flex-1 d-flex-v">
            <div className="content-upper">
              <a
                href={this.props.link}
                target="_blank"
                className="d-flex items-center"
                rel="noopener noreferrer"
              >
                <h4 className="bold">{this.props.title}</h4>
                <i className="ml-3 fas fa-share"></i>
              </a>
              <div className="text-justify description mt-4">
                {this.props.description}
              </div>
            </div>
            <div className="content-bottom">
              <div className="divider mt-4 mb-4"></div>
              <div className="tags">
                <div>{this.props.tags}</div>
              </div>
            </div>
          </div>
          <div className="flex-1 img-container">
            <img
              src={this.props.thumbnail}
              onClick={() => this.toggleModal()}
              alt=""
            ></img>
          </div>
        </div>

        <div className={modalClass}>
          <button className="btn-close" onClick={this.toggleModal}>
            &times;
          </button>
          {preview}
        </div>
      </>
    );
  }
}

export default DoubleCard;