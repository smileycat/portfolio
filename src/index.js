import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './scss/index.scss';
import Landing from './landing';
import About from './about'


function App() {
  return (
    <>
      <Router basename="/portfolio">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
