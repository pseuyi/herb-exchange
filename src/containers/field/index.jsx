import React from 'react';
import { connect } from 'react-redux';
import { fetchTypes } from 'ducks/types';

import Header from 'components/header';
import Item from 'components/item';
import './index.css';

class Field extends React.Component {
  componentDidMount() {
    this.props.fetchTypes();
  }

  render() {
    const { itemTypes } = this.props;
    return (
      <div>
        <Header/>
        <p>green field</p>
        <main className="field-grid">
          {itemTypes && itemTypes.map(itemType => <Item key={itemType.id} item={itemType} fieldItem="/assets/bush.png"/>)}
          {itemTypes && itemTypes.map(itemType => <Item key={itemType.id} item={itemType} fieldItem="/assets/leafybush.png"/>)}
          {itemTypes && itemTypes.map(itemType => <Item key={itemType.id} item={itemType}/>)}
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  itemTypes: state.types.data,
});

const mapDispatchToProps = {
  fetchTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
