import React, { useEffect, useState } from 'react';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [navClass, setNavClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', handleBackdrop);
    return () => window.removeEventListener('scroll', handleBackdrop);
  }, []);

  const handleBackdrop = () => {
    let height = window.innerHeight - 35;
    document.documentElement.scrollTop > height
      ? setNavClass('opaque-black animated slideInDown fast')
      : setNavClass('');
  };

  return (
    <nav className={navClass}>
      <div className="nav-left">
        <h4 id="logo">chihjung</h4>
      </div>
      <div id="nav-list" className={`nav-right ${showMenu ? 'nav-vertical' : ''}`}>
        <div className="nav-hide" onClick={() => setShowMenu(!showMenu)}>
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
          <a
            href="https://www.linkedin.com/in/chih-jung-liao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
