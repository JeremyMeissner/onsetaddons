import React from 'react';
import Header from './components/Header.js';
import Carousel from './components/Carousel.js';
import Title from './components/Title.js';
import ItemList from './components/ItemList.js';
import Item from './components/Item.js';
import ItemBig from './components/ItemBig.js';
import Footer from './components/Footer.js';
import Filter from './components/Filter.js';
import data from './data.json';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {cart: [], listList: []};
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    this.state.cart.forEach(e => {
      if (e.id == id) { // doesnt work actually because i need cookie to keep the cart
        console.log(id + " already exist");
      }
    });
    this.setState({
      cart: [ ...this.state.cart, {"id": id, "count": 1}],
  });
    console.log("item " + id + " add to the cart 1 time");
    console.log(this.state.cart);
  }
  componentWillMount() {
    let list = [];
    data.items.forEach(e => {
      list.push(<Item key={e.id} id={e.id} category={e.category} title={e.title} price={e.price === 0 ? "FREE" : "$" + e.price} priceData={e.price} url={require(`${e.url}`)}/>)
  });
  this.setState({listList: list})
}
  render() {
  // list.sort((a,b) => (a["props"]["priceData"] > b["props"]["priceData"]) ? 1 : ((b["props"]["priceData"] > a["props"]["priceData"]) ? -1 : 0));
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/browse">
            <Title textAlign="center" title="Browse the addons" text="150 Onset Addons for your projects"/>
            <Filter url="browse"/>
            <ItemList list={this.state.listList} url="browse"/>
          </Route>
          <Route path="/freebies">
            <Title textAlign="center" title="Free addons" text="100 Quality Free Onset Addons for your projects"/>
            <Filter url="freebies"/>
            <ItemList list={this.state.listList} sort="free" url="freebies"/>
          </Route>
          <Route path="/premium">
            <Title textAlign="center" title="Premium addons" text="150 Premium Onset Addons for your projects"/>
            <Filter url="premium"/>
            <ItemList list={this.state.listList} sort="premium" url="premium"/>
          </Route>
          <Route path="/item">
            <ItemBig handleChange={this.handleChange}/>
          </Route>
          <Route path="/about">
          </Route>
          <Route path="/contact">
          </Route>
          <Route path="/sell">
          </Route>
          <Route path="/">
            <Carousel/>
            <Title textAlign="center" title="Browse the addons" text="150 Onset Addons for your projects"/>
            <ItemList list={this.state.listList}/>
          </Route>
        </Switch>

        <Footer/>
    </div>
  </Router>
  );
  }
}
