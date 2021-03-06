import React from 'react';
import { Router, Route, browserHistory } from 'react-router'; 
import Main from './components/Main';
import Question from './components/Question';
import About from './components/About';
import Survey from './components/Survey';

import './App.css';

const App = React.createClass({
  render() {
    return (
      <Router history={browserHistory} >
        <Route path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/survey" component={Survey} />
        <Route path="/test/:userID/:question" component={Question} />
      </Router>
    );
  }
});

module.exports = App;
