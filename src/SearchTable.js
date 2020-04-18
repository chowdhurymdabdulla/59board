import React, { Component } from "react";
import "./SearchTable.css";
import Table from "./Table";

const SearchTable = () => {
  return (
    <div className="searchTableContiner">
      <input className="list_search-input" placeholder = "Address | CB | Date | Committees | Open to Public"/>
      <button className="list_search-button">Search</button>
      <Table />
    </div>
  );
};

export default SearchTable;
