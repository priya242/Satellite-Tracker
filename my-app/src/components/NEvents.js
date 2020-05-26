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
      count: 0,
      events: [],
      days: 30,
      donuts: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
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
    let l_count = 0;
    for (let event of data) {
      l_count++;
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
    let l_donuts = Object.keys(donutsdict).map((key) => [key, donutsdict[key]]);
    l_donuts.sort((first, second) => second[1] - first[1]);
    this.setState({ count: l_count, donuts: l_donuts });
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
        <div className="number_events">
          Number of events: {this.state.count}
        </div>
        <NEworldmap />
        <div>
          <NEeach event={this.state.donuts[0]} />
          <NEeach event={this.state.donuts[1]} />
          <NEeach event={this.state.donuts[2]} />
          <NEeach event={this.state.donuts[3]} />
        </div>
        <NEgraph />
      </div>
    );
  }
}

export default NEvents;
