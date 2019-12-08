import React from 'react';
import '../App.css';

function MainButton(props) {
  return (
    <div className="MainButton">
      <span>{props.text}</span>
    </div>
  );
}

export default MainButton;
