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
        <div className="project animated fadeInRight">
          <div className="text-container flex-1 d-flex-v">
            <div className="content-upper">
              <a href={this.props.link} target="_blank" className="d-flex items-center" rel="noopener noreferrer">
                <h4 className="bold">{this.props.title}</h4>
                <i className="ml-3 fas fa-share"></i>
              </a>
              <div className="text-justify description mt-4">{this.props.description}</div>
            </div>
            <div className="content-bottom">
              <div className="divider mt-4 mb-4"></div>
              <div className="tags">
                <div>{this.props.tags}</div>
              </div>
            </div>
          </div>
          <div className="flex-1 img-container">
            {/* <div className=""><i className="overlay fas fa-expand-arrows-alt"></i></div> */}
            <img src={this.props.thumbnail} className="" onClick={this.showModal} alt=""></img>
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