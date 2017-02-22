import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Pomodoro from './components/Pomodoro'
import Navigation from './components/Navigation'
import Tags from './components/Tags'
import Logs from './components/Logs'


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Navigation}>
    <IndexRoute component={Pomodoro}/>
      <Route path="/pomodoro" component={Pomodoro} />
      <Route path="/tags" component={Tags} />
      <Route path="/logs" component={Logs} />
    </Route>
  </Router>, document.getElementById('app'));
