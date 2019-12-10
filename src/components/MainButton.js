import React from 'react';
import '../App.css';

function MainButton(props) {
  return (
    <div className="MainButton">
      <button>{props.text}</button>
    </div>
  );
}

export default MainButton;
