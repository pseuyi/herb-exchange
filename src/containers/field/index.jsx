import React from 'react';
import { connect } from 'react-redux';
import { fetchTypes } from '../../ducks/types';

import Item from 'components/item';

class Field extends React.Component {
  componentDidMount() {
    this.props.fetchTypes();
  }

  render() {
    const { itemTypes } = this.props;

    return (
      <div>
        <p>green field</p>
        <ul>
          {itemTypes && itemTypes.map(itemType => <Item key={itemType.id} item={itemType} />)}
        </ul>
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
