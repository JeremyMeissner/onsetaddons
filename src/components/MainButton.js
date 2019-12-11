import React from 'react';
import '../App.css';

export default class MainButton extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="MainButton">
        <button onClick={this.props.handleChange}>{this.props.text}</button>
      </div>
    );
  }

}
