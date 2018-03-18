import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from 'containers/home/';
import Field from 'containers/field/';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route exact path="/field" component={Field}/>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
