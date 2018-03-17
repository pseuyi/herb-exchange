import React from 'react';
import Header from 'components/header';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <img src="/assets/tree.png"/>
        <ul>
          <li><Link to="/field">to field</Link></li>
        </ul>
      </div>
    )
  }
}
export default Home;
