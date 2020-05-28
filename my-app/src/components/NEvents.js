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
    // this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.state.days);
  }

  daysChange = (event) => {
    if (event.key === "Enter") {
      this.setState({ days: event.target.value });
      this.fetchData(this.state.days);
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
    this.setState({ donuts: l_donuts, count: l_count });
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
        {this.state.donuts.length != 0 ? (
          <div>
            {this.state.donuts.slice(0, 4).map((donut) => (
              <NEeach event={donut} total={this.state.count} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default NEvents;
