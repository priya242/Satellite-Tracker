import React from "react";
import NEworldmap from "./nevents/NEworldmap";
import NEeach from "./nevents/NEeach";
import NEgraph from "./nevents/NEgraph";

class NEvents extends React.Component {
  // const NASA_API_KEY = encodeURIComponent(process.env.REACT_APP_NE_API_KEY);

  constructor() {
    super();
    this.state = {
      events: [
        { earthquakes: 10 },
        { volcanoes: 30 },
        { tornadoes: 8 },
        { tsunamis: 5 },
      ],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      "https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit=5&days=20&status=open"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          events: data.results,
        });
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
