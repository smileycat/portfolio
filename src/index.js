import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Navbar from './component/navbar';
import About from './about';
import Cover from './cover';
import Portfolio from './portfolio';

import './scss/basic.scss';
import './scss/index.scss';
import './scss/animate.scss';


function App() {
  return (
    <>
      <Navbar />
      <Cover />
      <About />
      <Portfolio />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
