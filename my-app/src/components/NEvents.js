import React from "react";
import "./../css/nevents.css";
import NEworldmap from "./nevents/NEworldmap";
import NEeach from "./nevents/NEeach";
import NEgraph from "./nevents/NEgraph";

class NEvents extends React.Component {
  // const NASA_API_KEY = encodeURIComponent(process.env.REACT_APP_NE_API_KEY);

  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://eonet.sci.gsfc.nasa.gov/api/v3/events?days=20&status=open")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.events);
      })
      .catch((error) => {
        console.log("Request failed: ", error);
      });
  }

  render() {
    return (
      <div>
        <NEworldmap />
        <div>
          <NEeach event={this.state.events.earthquakes} />
          <NEeach event={this.state.events.volcanoes} />
          <NEeach event={this.state.events.tornadoes} />
          <NEeach event={this.state.events.tsunamis} />
        </div>
        <NEgraph />
      </div>
    );
  }
}

export default NEvents;
