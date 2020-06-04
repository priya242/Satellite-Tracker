import React from "react";
import NEworldmap from "./nevents/NEworldmap";
import NEtop from "./nevents/NEtop";
import NEeach from "./nevents/NEeach";
import NEheatmap from "./nevents/NEheatmap";

class NEvents extends React.Component {
  // const NASA_API_KEY = encodeURIComponent(process.env.REACT_APP_NE_API_KEY);
  constructor() {
    super();
    this.state = {
      count: 0,
      days: 30,
      bar: [],
      worlddata: [],
      area_data_mag: [],
      bubble: [],
    };
    this.fetchData = this.fetchData.bind(this);
    this.daysChange = this.daysChange.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.state.days);
  }

  daysChange = (event) => {
    if (event.key === "Enter") {
      this.setState({ days: event.target.value });
      this.fetchData(event.target.value);
    }
  };

  fetchData = (days) => {
    // fetch(
    //   `https://eonet.sci.gsfc.nasa.gov/api/v3/events?days=${encodeURIComponent(
    //     days
    //   )}&status=open`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     data = data.events;
    //   })
    //   .catch((error) => {
    //     console.log("Request failed: ", error);
    //   });
    let data = require("./nevents/tempin");
    let l_count = 0;
    let l_bar = {};
    let l_worlddata = [];
    let l_date_mag = [];
    let l_catid = []; //BUBBLE : category with id as index
    let l_dateid = []; //BUBBLE : date with id as index
    let l_bubble = [];

    for (let event of data) {
      l_count++; //total number of events
      let title = event.title;
      let categories = ""; //categories for the single event in the loop in string
      let current_cat = []; //categories for the single event in the loop

      //CATEGORIES information for each child component
      for (let category of event.categories) {
        //world + area
        categories += category.id + " ";
        //BAR
        if (category.id in l_bar) {
          l_bar[category.id]++;
        } else {
          l_bar[category.id] = 1;
        }
        //BUBBLE
        if (!l_catid.includes(category.id, 0)) {
          l_catid.push(category.id);
        }
        current_cat.push(category.id);
      }

      //AREA Map For DATE and MAGNITUDE
      let date_mag = {
        title: title,
        source: { id: event.sources[0].id, url: event.sources[0].url },
        categories: categories.trim(),
        geometry: event.geometry,
      };
      l_date_mag.push(date_mag);

      //WORLD MAP DATA per lat,long
      //BUBBLE
      for (let geometry of event.geometry) {
        //world
        //one event one location
        if (geometry.type === "Point") {
          let worldevent = {};
          worldevent["title"] = title;
          worldevent["type"] = categories.trim();
          worldevent["lat"] = geometry.coordinates[1];
          worldevent["lon"] = geometry.coordinates[0];
          worldevent["date"] = geometry.date;
          l_worlddata.push(worldevent);
        }
        //one event multiple locations
        else {
          for (let coord of geometry.coordinates) {
            let worldevent = {};
            worldevent["title"] = title;
            worldevent["type"] = categories.trim();
            worldevent["lon"] = coord[0];
            worldevent["lat"] = coord[1];
            l_worlddata.push(worldevent);
          }
        }

        //heatmap
        let tempdate = geometry.date.substring(0, 9);
        for (let c of current_cat) {
          if (!l_dateid.includes(tempdate, 0)) {
            l_dateid.push(tempdate);
          }
          let flag = false;
          for (let b of l_bubble) {
            if (b[0] == tempdate && b[1] == c) {
              b[3] += 1;
              flag = true;
            }
          }
          if (!flag) {
            l_bubble.push([l_dateid.indexOf(tempdate), l_catid.indexOf(c), 1]);
          }
        }
      }
    }

    console.log("BUBBLE-----------");
    console.log(l_bubble);
    console.log(l_catid);
    console.log(l_dateid);
    console.log("----------BUBBLE");

    l_bar = Object.keys(l_bar)
      .map((key) => [key, l_bar[key]])
      .sort((first, second) => second[1] - first[1])
      .slice(0, 4);

    this.setState({
      bar: l_bar,
      count: l_count,
      worlddata: l_worlddata,
      area_data_mag: l_date_mag,
    });
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
        <div className="nevents_container">
          <div className="number_events nevents_item">
            <div className="number">
              Number of events: <br />
              <span>{this.state.count}</span>
            </div>
            {/* {this.state.donuts.length != 0
              ? this.state.donuts
                  .slice(0, 4)
                  .map((donut) => (
                    <NEeach event={donut} total={this.state.count} />
                  ))
              : ""} */}
            <NEtop events={this.state.bar} total={this.state.count} />
          </div>
          <NEworldmap worlddata={this.state.worlddata} />
          <NEeach area_data_mag={this.state.area_data_mag} />
          <NEheatmap />
        </div>
      </div>
    );
  }
}

export default NEvents;
