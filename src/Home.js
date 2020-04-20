import React, { Component } from "react";

import Table from "./Table";
import SearchTable from "./SearchTable";

import DetailsCont from "./DetailsCont";
import Footer from "./Footer";
import AppMap from "./AppMap";

class App extends Component {
  render() {
    return (
      <div>
        <div className="bodySction">
          <DetailsCont />
          <SearchTable />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
