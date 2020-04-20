import React, { Component } from "react";
import EpicMenu from "./EpicMenu";
import AppMap from "./AppMap";
import "./map.css";

class App extends Component {
  render() {
    return (
      <div className="container center">
        <div className="float">
          <EpicMenu />
        </div>
        <AppMap></AppMap>
      </div>
    );
  }
}

export default App;
