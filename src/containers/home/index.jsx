import React from 'react';
import Header from 'components/header';
import Navigation from 'containers/navigation';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Navigation/>
        <img src="/assets/tree.png"/>
      </div>
    )
  }
}
export default Home;
