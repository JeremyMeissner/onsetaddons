import React from 'react';
import cart from '../img/cart.png';
import '../App.css';

function CartButton() {
  return (
    <div className="CartButton">
      <img src={cart} alt="Cart logo"/>
    </div>
  );
}

export default CartButton;
