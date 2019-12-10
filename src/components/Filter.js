import React from 'react';
import '../App.css';

import {
  NavLink
} from "react-router-dom";

function Filter(props) {
  return (
    <div className="Filter">
      <ul>
        <li><NavLink to={"/" + props.url + "/all"}>All</NavLink></li>
        <li><NavLink to={"/" + props.url + "/roleplay"}>Roleplay</NavLink></li>
        <li><NavLink to={"/" + props.url + "/minigames"}>Minigames</NavLink></li>
        <li><NavLink to={"/" + props.url + "/interface"}>Interface</NavLink></li>
        <li><NavLink to={"/" + props.url + "/3d-environments"}>3D Environments</NavLink></li>
        <li><NavLink to={"/" + props.url + "/3d-props"}>3D Props</NavLink></li>
      </ul>
    </div>
  );
}

export default Filter;
