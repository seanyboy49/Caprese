import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Pomodoro from './components/Pomodoro'
import Navigation from './components/Navigation'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Navigation}>
      <Route path="/pomodoro" component={Pomodoro} />
    </Route>
  </Router>, document.getElementById('app'));
