import React from 'react'


class Project extends React.Component {
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
    if (this.state.show && e.key === "Escape") {
      e.preventDefault();
      this.hideModal();
    }
  }

  showModal = () => {
    this.setState({
      show: true,
    });
  }

  hideModal = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    var preview;
    var modalClass = this.state.show ? "modal d-flex-v animated zoomIn" : "modal d-none"

    if (this.props.isVideo)
      preview = (
        <video className="modal-content" src={this.props.preview} autoPlay loop controls />
      );
    else
      preview = (
        <img className="modal-content" src={this.props.preview} alt="" />
      );

    return (
      <>
        <div className="card project flex-col justify-between animated fadeInRight">
          <div className="container-content">
            <a href={this.props.link} target="_blank" className="d-flex items-center" rel="noopener noreferrer">
              <h6>{this.props.title}</h6>
              <i className="ml-2 fas fa-share-square"></i>
            </a>
            <div className="text-justify description">{this.props.description}</div>
          </div>
          <div className="mt-6">
            <div className="tags">
              <div>{this.props.tags}</div>
            </div>
            <img src={this.props.thumbnail} className="figure" onClick={this.showModal} alt=""></img>
          </div>
        </div>

        <div className={modalClass} onKeyDown={this.handleKeyDown}>
          <button className="btn-close" onClick={this.hideModal}>&times;</button>
          {preview}
        </div>
      </>
    )
  }
}

export default Project