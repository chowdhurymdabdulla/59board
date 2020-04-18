import React, { Component } from "react";
import "./DetailsCont.css";

const DetailsCont = () => {
  return (
    <div className="details_container">
      <label> CB Information</label>
      <input className="ditails_search-input" readOnly={true} />
      <button className="print">Print List</button>
      <button className="notificatio">Get Notification</button>
    </div>
  );
};

export default DetailsCont;
