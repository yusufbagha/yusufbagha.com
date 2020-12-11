import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import './App.scss'

import ScrollToTop from './components/common/ScrollToTop'
import Home from './components/Home/Home'
import Experience from './components/Experience/Experience'
import About from './components/About/About'

// import Contact from './components/Contact/Contact'

const browserHistory = createBrowserHistory();

export default function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <ScrollToTop>
          <Route exact path="/" component={Home} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/about" component={About} />
          <Route exact path="/consulting" component={Home} />
          <Route exact path="/projects" component={Home} />
          <Route exact path="/contact" component={Home} />

        </ScrollToTop>
      </Switch>
    </Router>
  );
}