import React from 'react';
import { Link } from "react-router-dom";


function Navbar(props) {
  return (
    <nav className={props.className}>
      <ul className="inline-list">
        <li>
          <Link to="/">
            <h5 id="logo">ChihJungLiao</h5>
          </Link>
        </li>
      </ul>
      <ul className="ml-auto inline-list">
        <li>
          {/* <Link to="/about">About</Link> */}
          <a className="nav-link" href="#top">About</a>
        </li>
        <li>
          {/* <Link to="/about#portfolio">Portfolio</Link> */}
          <a className="nav-link" href="#portfolio">Portfolio</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar