import React from 'react';
import Header from './components/Header.js';
import Carousel from './components/Carousel.js';
import Title from './components/Title.js';
import ItemList from './components/ItemList.js';
import Item from './components/Item.js';
import Footer from './components/Footer.js';
import Filter from './components/Filter.js';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let list = [
    <Item key={0} category="roleplay" title="sleekLoad 2 : Loading Screen" price="FREE" priceData={0} url={require("./img/item.png")}/>,
    <Item key={1} category="roleplay" title="sleekLoad 2 : Loading Screen" price="FREE" priceData={0} url={require("./img/item.png")}/>,
    <Item key={2} category="roleplay" title="sleekLoad 2 : Loading Screen" price="FREE" priceData={0} url={require("./img/item.png")}/>,
    <Item key={3} category="roleplay" title="sleekLoad 2 : Loading Screen" price="FREE" priceData={0} url={require("./img/item.png")}/>,
    <Item key={4} category="minigames" title="sleekLoad 2 : Loading Screen" price="$15.99" priceData={15.99} url={require("./img/item.png")}/>,
    <Item key={5} category="minigames" title="sleekLoad 2 : Loading Screen" price="$2.99" priceData={2.99} url={require("./img/item.png")}/>
  ];
  // list.sort((a,b) => (a["props"]["priceData"] > b["props"]["priceData"]) ? 1 : ((b["props"]["priceData"] > a["props"]["priceData"]) ? -1 : 0));
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/browse">
            <Title textAlign="center" title="Browse the addons" text="150 Onset Addons for your projects"/>
            <Filter url="browse"/>
            <ItemList list={list} url="browse"/>
          </Route>
          <Route path="/freebies">
            <Title textAlign="center" title="Free addons" text="100 Quality Free Onset Addons for your projects"/>
            <Filter url="freebies"/>
            <ItemList list={list} sort="free" url="freebies"/>
          </Route>
          <Route path="/premium">
            <Title textAlign="center" title="Premium addons" text="150 Premium Onset Addons for your projects"/>
            <Filter url="premium"/>
            <ItemList list={list} sort="premium" url="premium"/>
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
            <ItemList list={list}/>
          </Route>
        </Switch>

        <Footer/>
    </div>
  </Router>
  );
}

export default App;
