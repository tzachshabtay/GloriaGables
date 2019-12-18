import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Gallery from './Gallery';
import Lincoln from './Lincoln';
import News from './News';
import Events from './Events';
import History from './History';
import WestSide from './WestSide';
import Privacy from './Privacy';
import ScrollToTop from './modules/scroll_to_top';

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <ScrollToTop />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/park">
            <Lincoln />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/neighborhood">
            <WestSide />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
