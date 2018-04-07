import React from 'react';
import Header from 'components/header';
import Navigation from 'containers/navigation';
import './index.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home-grid">
        <div>
          <img width="150px" src="/assets/tree.png"/>
          <Header/>
          <hr/>
        </div>
        <Navigation/>
      </div>
    )
  }
}
export default Home;
