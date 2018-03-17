import React from 'react';
import './index.css';

export default ({ item: { id, name, description, image}, fieldItem }) => {
  return (
    <div className="item">
      {/*<div>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>*/}
      <div>
        <img width="60%" height="60%" src={fieldItem ? fieldItem : image}/>
      </div>
    </div>
  )
}
