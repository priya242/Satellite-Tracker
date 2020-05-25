import React from "react";
import NEworldmap from "./nevents/NEworldmap";
import NEeach from "./nevents/NEeach";
import NEgraph from "./nevents/NEgraph";
import events from "./nevents/tempin";

class NEvents extends React.Component {
  // const NASA_API_KEY = encodeURIComponent(process.env.REACT_APP_NE_API_KEY);

  constructor() {
    super();
    this.state = {
      events: [],
      days: 30,
    };
  }

  componentDidMount() {
    // this.setState({ loading: true });
    this.fetchData(this.state.days);
  }

  daysChange = (event) => {
    if (event.key === "Enter") {
      alert("here");
      this.setState({ days: event.target.value });
    }
  };

  fetchData = (days) => {
    // fetch(
    //   "https://eonet.sci.gsfc.nasa.gov/api/v3/events?days=${encodeURIComponent({days})}&status=open"
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data.events);
    //   })
    //   .catch((error) => {
    //     console.log("Request failed: ", error);
    //   });

    let data = require("./nevents/tempin");

    let donutsdict = {};
    let count = 0;
    for (let event of data) {
      count++;
      console.log(event);
      //counting the number of events for each category
      //to prepare donut charts of 4 most frequently occuring category of events
      for (let category of event.categories) {
        if (category.id in donutsdict) {
          donutsdict[category.id]++;
        } else {
          donutsdict[category.id] = 1;
        }
      }
    }
    let donuts = Object.keys(donutsdict).map((key) => [key, donutsdict[key]]);
    donuts.sort((first, second) => second[1] - first[1]);

    console.log(donuts);

    console.log("DONUTS!!");
    console.log("number of events" + count);
    console.log(donuts);
  };

  render() {
    return (
      <div className="nevents">
        <div className="navbar">
          <span>
            <b>Natural Events</b>
          </span>
          <div className="nav-controls">
            Information for the last{" "}
            <input
              type="number"
              defaultValue={this.state.days}
              onKeyDown={this.daysChange}
            ></input>
            days
          </div>
        </div>
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
