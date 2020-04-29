import React, { Component } from "react";
import EpicMenu from "./EpicMenu";
import AppMap from "./AppMap";
import "./map.css";
import Table from "./Table";
import districts from "./data/districts";
import district_info from "./data/district_info";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDistrict: null,
      searchValue: "",
      isValidSearchValue: true,
    };

    this.onPolygonClick = this.onPolygonClick.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  onPolygonClick(properties) {
    this.setState({ selectedDistrict: properties.BoroCD });
  }

  checkDistrict(boroCD = 501) {
    return districts.features.some(
      (feature) => feature.properties.BoroCD === boroCD
    );
  }

  handleSearchSubmit(event) {
    const boroCD = this.state.searchValue;
    if (this.checkDistrict(boroCD)) {
      this.setState({ selectedDistrict: boroCD });
    }
    event.preventDefault();
  }

  handleSearchChange(event) {
    const boroCD = Number(event.target.value);
    if (!this.checkDistrict(boroCD)) {
      //if input not valid then set isValidSearchValue to false
      this.setState({ isValidSearchValue: false, searchValue: boroCD });
    } else {
      this.setState({ isValidSearchValue: true, searchValue: boroCD });
    }
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
      ));

    return (
      <div className="container center">
        <div className="float">
          <EpicMenu />
        </div>

        <form onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            value={this.state.searchValue}
            onChange={this.handleSearchChange}
            className={!this.state.isValidSearchValue ? "error" : ""}
          />
          {!this.state.isValidSearchValue ? (
            <p>Error District Not Valid</p>
          ) : null}
        </form>
        <AppMap
          onPolygonClick={this.onPolygonClick}
          selectedDistrict={this.state.selectedDistrict}
          districts={districts}
        ></AppMap>
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
