import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EpicMenu from "./EpicMenu";
import Map from "./Map"
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/">
            <div>
              <EpicMenu />
              <Home />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
