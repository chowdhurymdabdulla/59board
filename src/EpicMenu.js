import React, { Component } from "react";
import "./EpicMenu.css";
import searchIcon from "./search-icon.png";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";

const links = [
  { label: "Home", link: "/" },
  { label: "Map", link: "/map" },
  { label: "Event List", link: "/event" },
  { label: "About", link: "/about" },
];

class EpicMenu extends Component {
  constructor() {
    super();

    this.state = {
      showForm: false,
    };
  }

  showForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  render() {
    // let searchForm = this.state.showForm ? (
    //   <form className="menu__search-form" method="POST">
    //     <input
    //       className="menu__search-input"
    //       placeholder="Type CB Name"
    //     />
    //   </form>
    // ) : (
    //   ""
    // );

    let linksMarkup = links.map((link, index) => {
      let linkMarkup = (
        <NavLink
          className="menu__link menu__link"
          to={link.link}
          activeClassName="menu__link menu__link--active"
        >
          {link.label}
        </NavLink>
      );

      return (
        <li key={index} className="menu__list-item">
          {linkMarkup}
        </li>
      );
    });

    return (
      <nav className="menu">
        <h1
          style={{
            backgroundImage: "url(" + this.props.logo + ")",
          }}
          className="menu__logo"
        >
          Epic Co.
        </h1>

        <div className="menu__right">
          <ul className="menu__list">{linksMarkup}</ul>

          <button
            // onClick={this.showForm.bind(this)}
            // style={{
            //   backgroundImage: "url(" + searchIcon + ")",
            // }}
            className="menu__search-button"
          >
            Search
          </button>
          <form className="menu__search-form" method="POST">
            <input className="menu__search-input" />
          </form>
        </div>
      </nav>
    );
  }
}

export default EpicMenu;
