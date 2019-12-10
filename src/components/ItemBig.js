import React from 'react';
import stars from '../img/stars.png';
import item from '../img/item.png';
import MainButton from './MainButton.js';
import '../App.css';

function Item(props) {
  return (
    <div className="ItemBig">
      <main>
        <h4>sleekLoad 2 : Loading Screen</h4>
        <span>By Michael Jackson</span>
        <img src={item} alt="Item"/>
        <div>
          <h5>Browse the addons</h5>
          <p>Banky comes with a total of 27 screen designs and 50+ symbols that will help you create a prototype for the banking application that you are working on and ready for you to use.
          Made using neat layer formations, free to use Google Fonts and Vector graphic images. Banky comes in a sketch file format, you will easily combine it with other plugins.</p>
          <h5>What product inside?</h5>
          <p>Banky comes with a total of 27 screen designs and 50+ symbols that will help you create a prototype for the banking application that you are working on and ready for you to use.
Made using neat layer formations, free to use Google Fonts and Vector graphic images. Banky comes in a sketch file format, you will easily combine it with other plugins.</p>
        </div>
      </main>
      <aside>
        <div class="price">
          <span>$5.99</span>
          <MainButton text="Add to Cart"/>
        </div>
        <div class="features">
          <span>Features</span>
          <ul>
            <li>Header (Call to action)</li>
            <li>Configurable Header Image</li>
            <li>Community Features</li>
            <li>Servers</li>
            <li>Supports all source engine</li>
            <li>Discord</li>
            <li>Configurable navigation links</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Item;
