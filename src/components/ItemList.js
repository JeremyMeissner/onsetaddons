import React from 'react';
import '../App.css';

import {
  Switch,
  Route,
} from "react-router-dom";

function ItemList(props) {
  let roleplay = [];
  let minigames = [];
  let uiInterface = [];
  let environments = [];
  let aProps = [];
  let all = [];
  if (props.sort === "free") {
    props.list.forEach((element) => {
      if (element["props"]["priceData"] === 0) {
        all.push(element);
        switch (element["props"]["category"]) {
          case "roleplay":
            roleplay.push(element);
          break;
          case "minigames":
            minigames.push(element);
          break;
          case "interface":
            uiInterface.push(element);
          break;
          case "3d-environments":
            environments.push(element);
          break;
          case "3d-props":
            aProps.push(element);
          break;
          }
      }
  });
  }
  else if (props.sort === "premium") {
    props.list.forEach((element) => {
      if (element["props"]["priceData"] !== 0) {
        all.push(element);
        switch (element["props"]["category"]) {
          case "roleplay":
            roleplay.push(element);
          break;
          case "minigames":
            minigames.push(element);
          break;
          case "interface":
            uiInterface.push(element);
          break;
          case "3d-environments":
            environments.push(element);
          break;
          case "3d-props":
            aProps.push(element);
          break;
          }
      }
  });
  }
  else {
    props.list.forEach((element) => {
      all.push(element);
      switch (element["props"]["category"]) {
        case "roleplay":
          roleplay.push(element);
        break;
        case "minigames":
          minigames.push(element);
        break;
        case "interface":
          uiInterface.push(element);
        break;
        case "3d-environments":
          environments.push(element);
        break;
        case "3d-props":
          aProps.push(element);
        break;
        }
  });
}

  return (
    <div className="ItemList">
      <Switch>
        <Route path={"/" + props.url + "/all"}>
          {all}
        </Route>
        <Route path={"/" + props.url + "/roleplay"}>
          {roleplay}
        </Route>
        <Route path={"/" + props.url + "/minigames"}>
          {minigames}
        </Route>
        <Route path={"/" + props.url + "/interface"}>
          {uiInterface}
        </Route>
        <Route path={"/" + props.url + "/3d-environments"}>
          {environments}
        </Route>
        <Route path={"/" + props.url + "/3d-props"}>
          {aProps}
        </Route>
        <Route path="/">
          {all}
        </Route>
      </Switch>
    </div>
  );
}

export default ItemList;
