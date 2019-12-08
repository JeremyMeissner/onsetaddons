import React from 'react';
import stars from '../img/stars.png';
import MainButton from './MainButton.js';
import '../App.css';

function Item(props) {
  return (
    <div className="Item">
      <img src={props.url} alt="Item"/>
      <h3>{props.title}</h3>
      <div>
        <img src={stars} alt="Stars"/>
        <MainButton text={props.price}/>
      </div>
    </div>
  );
}

export default Item;
