import React from 'react';
import carousel from '../img/carousel.png';
import '../App.css';

function Carousel() {
  return (
    <div className="Carousel">
      <h1>The Most Awesome Onset Addons Website </h1>
      <p>On Onset Addons you can discover more than just a simple UI addons, your can find more than 50 free addons every month</p>
      <img src={carousel} alt="Carousel"/>
    </div>
  );
}

export default Carousel;
