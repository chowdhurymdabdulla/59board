import React, { Component } from "react";
import EpicMenu from "./EpicMenu";
import AppMap from "./AppMap";
import "./map.css";
import Table from "./Table";
import district_info from "./data/district_info";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDistrict: null,
    };

    this.onPolygonClick = this.onPolygonClick.bind(this);
  }

  onPolygonClick(properties) {
    this.setState({ selectedDistrict: properties.BoroCD });
  }

  render() {
    const info = district_info
      .filter((row) => row.BoroCD === this.state.selectedDistrict)
      .map((row) => (
        <div>
          <li>
            {row["Title"]} {row["First Name"]} {row["Last Name"]}
          </li>
          <li>{row["Email"]}</li>
        </div>
      ))

    return (
      <div className="container center">
        <div className="float">
          <EpicMenu />
        </div>
        {/* <h2>
          {this.state.selectedDistrict
            ? `Distict: ${this.state.selectedDistrict}`
            : "No distict"}
        </h2> */}
        <AppMap onPolygonClick={this.onPolygonClick}></AppMap>
        {info}
        <Table
          className="mapTable"
          selectedDistrict={this.state.selectedDistrict}
        />
      </div>
    );
  }
}

export default App;
