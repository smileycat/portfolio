import React from 'react';

class Navbar extends React.Component {
  state = {
    blackNav: null,
    showMenu: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.navBackdrop);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navBackdrop);
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  }

  navBackdrop = () => {
    let height = window.innerHeight - 35;
    if (document.documentElement.scrollTop > height)
      this.setState({ blackNav: 'opaque-black animated slideInDown fast' });
    else
      this.setState({ blackNav: null });
  }

  render() {
    let navRight = 'nav-right';
    navRight += this.state.showMenu ? ' nav-vertical' : '';
    return (
      <nav className={this.state.blackNav}>
        <div className="nav-left">
          <h4 id="logo">chihjung</h4>
        </div>
        <div id="nav-list" className={navRight}>
          <div className="nav-hide" onClick={this.toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>
          <div className="nav-link">
            <a href="#about">About</a>
          </div>
          <div className="nav-link">
            <a href="#portfolio">Portfolio</a>
          </div>
          <div className="nav-link">
            <a href="mailto:liaocrong@outlook.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <div className="nav-link">
            <a href="https://github.com/smileycat" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="nav-link">
            <a href="https://www.linkedin.com/in/chih-jung-liao/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;