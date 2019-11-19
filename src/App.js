import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Landing from './landing';
import About from './about'

function App({ location }) {
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={450}
        // timeout={{ enter: 3000, exit: 1500 }}
        classNames={'fade'}
      >
        <div className="d-flex flex-col route-section">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default withRouter(App)
// export default App