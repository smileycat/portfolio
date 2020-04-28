import React from 'react';
// import { Link } from "react-router-dom";

class Navbar extends React.Component {
  componentDidMount() {
    document.getElementById('nav-menu').addEventListener('click', this.menuClick);
    window.addEventListener('scroll', this.navBackdrop);
  }

  componentWillUnmount() {
    document.getElementById('nav-menu').removeEventListener('click', this.menuClick);
    window.removeEventListener('scroll', this.navBackdrop);
  }

  menuClick() {
    let navList = document.getElementById('nav-list');

    if (navList.className.includes('nav-vertical'))
      navList.className = navList.className.replace(' nav-vertical', '');
    else
      navList.className += ' nav-vertical';
  }

  navBackdrop(e) {
    let height = window.innerHeight - 30;
    if (document.body.scrollTop > height || document.documentElement.scrollTop > height)
      document.getElementById('nav').className = "opaque-black animated slideInDown fast";
    else
      document.getElementById('nav').className = '';
  }

  render() {
    return (
      <nav id="nav">
        <div className="nav-left">
          <h4 id="logo">chihjung</h4>
        </div>
        <div id="nav-list" className="nav-right">
          <div id="nav-menu" className="nav-hide">
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
      </nav >
    )
  }
}

export default Navbar