import React from 'react';
import logo from '../img/logo.png';
import '../App.css';
import CartButton from './CartButton.js';
import MainButton from './MainButton.js';

import {
  Link
} from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <div className="Header-menu">
        <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
        <ul>
          <li><Link to="/browse/all">Browse</Link></li>
          <li><Link to="/freebies/all">Freebies</Link></li>
          <li><Link to="/premium/all">Premium</Link></li>
          <li><Link to="/item">About</Link></li>
        </ul>
      </div>
      <div className="Header-interact">
        <CartButton/>
        <MainButton text="Sign In"/>
      </div>
    </header>
  );
}

export default Header;
