import React from "react";
import NEworldmap from "./nevents/NEworldmap";
import NEeach from "./nevents/NEeach";
import NEarea from "./nevents/NEarea";
import events from "./nevents/tempin";

class NEvents extends React.Component {
  // const NASA_API_KEY = encodeURIComponent(process.env.REACT_APP_NE_API_KEY);
  constructor() {
    super();
    this.state = {
      count: 0,
      days: 30,
      donuts: [],
      worlddata: [],
      area_data_mag: [],
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
    fetch(
      `https://eonet.sci.gsfc.nasa.gov/api/v3/events?days=${encodeURIComponent(
        days
      )}&status=open`
    )
      .then((response) => response.json())
      .then((data) => {
        data = data.events;
        let l_count = 0;
        let donutsdict = {};
        let l_worlddata = [];
        let l_date_mag = [];
        for (let event of data) {
          l_count++; //total number of events
          let title = event.title;
          let categories = "";
          //CATEGORIES information for each child component
          for (let category of event.categories) {
            //world + area
            categories += category.id + " ";
            //donuts
            if (category.id in donutsdict) {
              donutsdict[category.id]++;
            } else {
              donutsdict[category.id] = 1;
            }
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
          }
        }
        let l_donuts = Object.keys(donutsdict).map((key) => [
          key,
          donutsdict[key],
        ]);
        l_donuts.sort((first, second) => second[1] - first[1]);
        this.setState({
          donuts: l_donuts,
          count: l_count,
          worlddata: l_worlddata,
          area_data_mag: l_date_mag,
        });
      })
      .catch((error) => {
        console.log("Request failed: ", error);
      });
    let data = require("./nevents/tempin");
    let l_count = 0;
    let donutsdict = {};
    let l_worlddata = [];
    let l_date_mag = [];
    for (let event of data) {
      l_count++; //total number of events
      let title = event.title;
      let categories = "";
      //CATEGORIES information for each child component
      for (let category of event.categories) {
        //world + area
        categories += category.id + " ";
        //donuts
        if (category.id in donutsdict) {
          donutsdict[category.id]++;
        } else {
          donutsdict[category.id] = 1;
        }
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
      }
    }
    let l_donuts = Object.keys(donutsdict).map((key) => [key, donutsdict[key]]);
    l_donuts.sort((first, second) => second[1] - first[1]);
    this.setState({
      donuts: l_donuts,
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
            {this.state.donuts.length != 0
              ? this.state.donuts
                  .slice(0, 4)
                  .map((donut) => (
                    <NEeach event={donut} total={this.state.count} />
                  ))
              : ""}
          </div>
          <NEworldmap worlddata={this.state.worlddata} />
          <NEarea area_data_mag={this.state.area_data_mag} />
        </div>
      </div>
    );
  }
}

export default NEvents;
