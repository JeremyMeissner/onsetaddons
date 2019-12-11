import React from 'react';
import stars from '../img/stars.png';
import MainButton from './MainButton.js';
import '../App.css';

import {
  Link,
} from "react-router-dom";

function Item(props) {
  return (

    <div className="Item">
    <Link to={"/item?id=" + props.id}>
      <img src={props.url} alt="Item"/>
      <h3>{props.title}</h3>
      <div>
        <img src={stars} alt="Stars"/>
        <MainButton text={props.price}/>
      </div>
      </Link>
    </div>

  );
}

export default Item;
