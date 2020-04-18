import React, { Component } from "react";
import EpicMenu from "./EpicMenu";
import Table from "./Table";
import SearchTable from "./SearchTable";
import logo from "./logo.png";
import DetailsCont from "./DetailsCont";
import Footer from "./Footer";
import AppMap from './AppMap'

class App extends Component {
  render() {
    let links = [
      { label: "Home", link: "#home", active: true },
      { label: "Map", link: "#about" },
      { label: "Event List", link: "#portfolio" },
      { label: "About", link: "#contact-us" },
    ];

    return (
      <div className="container center">
        <EpicMenu links={links} logo={logo} />
        <div className="bodySction">
          <DetailsCont />
          <SearchTable />
        </div>
        <Footer />
        <AppMap /> 
      </div>
    );
  }
}

export default App;
