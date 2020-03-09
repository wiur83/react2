import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Me from './Me.js';
import Report from './Report.js';
import Report2 from './Report2.js';
import Kmom03 from './Kmom03.js';
import Markdown from './Markdown.js';

import './App.css';


const App = () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Me</Link>
          </li>
          <li>
            <Link to="/report/week/1">Kmom01</Link>
          </li>
          <li>
            <Link to="/report/week/2">Kmom02</Link>
          </li>
          <li>
            <Link to="/report/week/3">Kmom03</Link>
          </li>
          <li>
            <Link to="/markdown">Markdown</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Me} />
      <Route exact path="/report/week/1" component={Report} />
      <Route exact path="/report/week/2" component={Report2} />
      <Route exact path="/report/week/3" component={Kmom03} />
      <Route exact path="/markdown" component={Markdown} />
    </div>
  </Router>
);

export default App;
