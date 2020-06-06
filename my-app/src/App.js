import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import SatInfo from "./components/SatInfo";
import NEvents from "./components/NEvents";
import Landing from "./components/Landing";
import APOD from "./components/APOD";
import "./css/style.css";

class App extends React.Component {
  //--------------------------------------render and return--------------------------------
  render() {
    return (
      <div className="lgrid-item3">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/satinfo">Satellite Information</Link>
          </li>
          <li>
            <Link to="/nevents">Natural Events</Link>
          </li>
          <li>
            <Link to="/APOD">APOD</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/satinfo">
            <SatInfo />
          </Route>
          <Route path="/nevents">
            <NEvents />
          </Route>
          <Route path="/APOD">
            <APOD />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
