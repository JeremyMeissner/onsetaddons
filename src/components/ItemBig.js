import React from 'react';
import MainButton from './MainButton.js';
import '../App.css';
import data from '../data.json';
import queryString from 'query-string';

export default class ItemBig extends React.Component{
  constructor(props) {
    super(props);
    this.state = {id: 0, url: "./img/item.png", title: "Title: id Error", author: "Author: id Error", price: "Price: id Error", description: "Description: id Error", features: []};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange()  {
      this.props.handleChange(this.state.id);
  }
componentWillMount() {
  const parsed = queryString.parse(window.location.search);
  data.items.forEach(e => {
    let featuresList = [];
    if (e.id == parsed.id) {
      import(`${e.url}`).then(image => {this.setState({url: image.default})})
      this.setState({id: e.id, title: e.title, author: e.author, price: e.price, description: e.description});
      e.features.forEach(e => {
        featuresList.push(<li>{e}</li>);
      });
      this.setState({features: featuresList});
    }
});
}
render() {

  return (
    <div className="ItemBig">
      <main>
        <h4>{this.state.title}</h4>
        <span>By {this.state.author}</span>
        <img src={this.state.url} alt="Item"/>
        <div>
        {this.state.description}
        </div>
      </main>
      <aside>
        <div className="price">
          <span>{this.state.price === 0 ? "FREE" : "$" + this.state.price}</span>
          <MainButton text="Add to Cart" handleChange={this.handleChange}/>
        </div>
        <div className="features">
          <span>Features</span>
          <ul>
            {this.state.features}
          </ul>
        </div>
      </aside>
    </div>
  );
}
}
