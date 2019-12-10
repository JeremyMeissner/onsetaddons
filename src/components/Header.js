import React from 'react';
import logo from '../img/logo.png';
import '../App.css';
import CartButton from './CartButton.js';
import MainButton from './MainButton.js';

import { useAuth0 } from "../react-auth0-spa.js";

import {
  Link
} from "react-router-dom";

function Header() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0;
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
          {!isAuthenticated && (
          <MainButton text="Sign In" onClick={() => loginWithRedirect({})}/>
        )}
        {isAuthenticated && <MainButton text="Log Out" onClick={() => logout()}/>}
      </div>
    </header>
  );
}

export default Header;
