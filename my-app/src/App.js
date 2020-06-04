import React from "react";
import SatInfo from "./components/SatInfo";
import NEvents from "./components/NEvents";
import Landing from "./components/Landing";
import "./css/style.css";
class App extends React.Component {
  //--------------------------------------render and return--------------------------------
  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <span>
            <b>Sattelite Tracker</b>
          </span>
          <div className="nav-controls">
            <div>Satellite Info</div>
            <a href="/">
              <div>Natural Events</div>
            </a>
          </div>
        </div>
        <Landing />
        <SatInfo />
        <NEvents />
      </React.Fragment>
    );
  }
}
export default App;
