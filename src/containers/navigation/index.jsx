import React from 'react';
import { withRouter, NavLink, Route } from 'react-router-dom';

class Navigation extends React.Component {
  render () {
    return (
      <ul className="navigation">
        <li><NavLink exact to="/">to home</NavLink></li>
        <li><NavLink to="/field">to field</NavLink></li>
        <li><NavLink to="/markets">to markets</NavLink></li>
      </ul>
    )
  }
}

export default Navigation;
// <li><Link to="/field">back</Link></li>
