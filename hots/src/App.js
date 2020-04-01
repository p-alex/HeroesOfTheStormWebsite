import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./containers/Homepage/Homepage";
import Heroes from "./containers/Heroes/Heroes";
import ChampionStats from "./containers/ChampionStats/ChampionStats";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" exact component={HomePage} />
          <Route path="/heroes" exact component={Heroes} />
          <Route path="/heroes/:heroName" exact component={ChampionStats} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
