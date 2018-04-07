import React from 'react';
import { connect } from 'react-redux';
import { fetchMarkets } from 'ducks/markets';

import Header from 'components/header';
import NewMarketForm from './form';
// import './index.css';

class Market extends React.Component {
  componentDidMount() {
    this.props.fetchMarkets();
  }

  render() {
    const { markets } = this.props;
    return (
      <div>
        <Header/>
        <p>markets</p>
        <ul>
          { markets && markets.map((mkt, idx) => (
              <li key={`${mkt.name}-${idx}`}>{mkt.name}</li>
            ))
          }
        </ul>

        <NewMarketForm/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  markets: state.markets.data
});

const mapDispatchToProps = {
  fetchMarkets,
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
