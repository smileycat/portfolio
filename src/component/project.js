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
        <video className="modal-content" src={this.props.preview} autoPlay loop />
      );
    else
      preview = (
        <img className="modal-content" src={this.props.preview} alt="" />
      );

    return (
      <>
        <div className="card project flex-col justify-between animated slideInUp">
          <div className="container-content">
            <a href={this.props.link} target="_blank" className="d-flex items-center" rel="noopener noreferrer">
              <h5>{this.props.title}</h5>
              <i className="ml fas fa-share-square"></i>
            </a>
            <div className="text-justify description mb">{this.props.description}</div>
          </div>
          <div>
            <div className="tags">
              {/* <i className="fas fa-tags d-inline-block"></i> */}
              <div className="d-inline"> {this.props.tags}</div>
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