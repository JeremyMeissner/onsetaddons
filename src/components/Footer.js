import React from 'react';
import logo from '../img/logo.png';
import payment from '../img/payment.png';
import '../App.css';
import MainButton from './MainButton.js';

import {
  Link
} from "react-router-dom";

function Header() {
  return (
    <footer className="Footer">
      <div className="Footer-menu">
        <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
        <ul>
          <li><Link to="/browse/all">Browse</Link></li>
          <li><Link to="/freebies">Freebies</Link></li>
          <li><Link to="/premium">Premium</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/sell"><MainButton text="Sell Item"/></Link></li>
        </ul>
      </div>
      <img src={payment} alt="Payment"/>
    </footer>
  );
}

export default Header;
