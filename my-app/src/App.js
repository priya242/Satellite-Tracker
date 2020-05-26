import React from "react";
import Chart from "./components/Chart";
import BarChart from "./components/BarChart";
import "./css/style.css";
import WorldMap from "./components/WorldMap";
import NEvents from "./components/NEvents";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nasa: [],
      Data: [],
      SatCat: [],
      launchDate: [],
      isLoaded: false,
    };
  }
  fetchData() {
    const url =
      "https://images-api.nasa.gov/asset/ISS%204K%20Crew%20Earth%20Observations";
    const urls = this.loadSat();
    
    const url1 =
      "https://www.n2yo.com/rest/v1/satellite/above/41.702/-76.014/0/70/0/&apiKey=TY7W6H-2YWZWQ-9W9WEL-4FIH";
    //--------------------------------------fetching url-------------------------------------------------
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .then((data) => {
        this.setState({
          nasa: data.collection.items[1].href,
          isLoaded: true,
        });
      });
    //---------------------------------------fetching url1-------------------
    fetch(url1)
      .then((response) => response.json())
      .then((data) => {
      return data;      
       //console.log(data.above);
      })
      .then((data) => {
        this.setState({
          launchDate: data,
          isLoaded: true,
        });
      });

    //---------------------------------------fetching urls----------------------------
    Promise.all(urls.map((url) => fetch(url)))
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((values) => {
        return values;
      })
      .then((data) => {
        this.setState({
          isLoaded: true,
          Data: data,
        });
      });
    };
   componentDidMount() {
     this.fetchData();
    }

  loadSat() {
    let urls = [];
    for (let id = 2; id <= 53; id++) {
      let url1 =
        "https://www.n2yo.com/rest/v1/satellite/above/41.702/-76.014/0/70/" +
        id +
        "/&apiKey=TY7W6H-2YWZWQ-9W9WEL-4FIH";
      urls.push(url1);
    }
    return urls;
    //console.log(urls)
  }
  //--------------------------------------render and return--------------------------------
  render() {
    const { nasa, Data, isLoaded,launchDate } = this.state;
    // console.log(Data)
    return (
      <div>
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
        <React.Fragment>
          {/* <h1>Satellite Tracker</h1> */}
          {!isLoaded && <p>Loading...</p>}
          <video autoPlay controls muted loop src={nasa} type="video/mp4" />
          <Chart DataSet={Data} />
          <BarChart YearData = {launchDate} />
          <WorldMap  />
        </React.Fragment>
        <NEvents />
      </div>
    );
  }
}


export default App;
