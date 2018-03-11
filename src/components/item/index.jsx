import React from 'react';
import './index.css';

export default ({ item: { id, name, description, image} }) => {
  return (
    <li className="item">
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <div>
        <img width="20%" height="20%" src={image}/>
      </div>
    </li>
  )
}
