import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'components/header/';
import Field from 'containers/field/';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Field />
      </div>
    );
  }
}

export default connect()(App);
