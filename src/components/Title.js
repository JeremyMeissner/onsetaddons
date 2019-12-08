import React from 'react';
import '../App.css';

function Title(props) {
  return (
    <div className="Title" style={{textAlign: props.textAlign}}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default Title;
