import React from "react";
import "./css/style.css";
import Chart from "./components/Chart";
import WorldMap from "./components/WorldMap";
import NEvents from "./components/NEvents";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nasa: [],
      Data: [],
      SatCat: [],
      isLoaded: false,
    };
  }
  //   fetchData() {
  //     const url =
  //       "https://images-api.nasa.gov/asset/ISS%204K%20Crew%20Earth%20Observations";
  //     const urls = this.loadSat();
  //     // const url1 = 'https://www.space-track.org/basicspacedata/query/class/boxscore/format/html'
  //     //--------------------fetching url-------------------
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         return data;
  //       })
  //       .then((data) => {
  //         this.setState({
  //           nasa: data.collection.items[1].href,
  //           isLoaded: true,
  //         });
  //       });
  //--------------------fetching url1-------------------

  //--------------------fetching urls----------------------------
  // Promise.all(urls.map((url) => fetch(url)))
  //   .then((responses) => Promise.all(responses.map((r) => r.json())))
  //   .then((values) => {
  //     return values;
  //   })
  //   .then((data) => {
  //     this.setState({
  //       isLoaded: true,
  //       Data: data,
  //     });
  //   });

  // .catch((error) = console.log(error));
  //}

  //   componentDidMount() {
  //     // this.fetchData();
  //   }

  loadSat() {
    let urls = [];
    for (let id = 2; id <= 13; id++) {
      let url1 =
        "https://www.n2yo.com/rest/v1/satellite/above/41.702/-76.014/0/70/" +
        id +
        "/&apiKey=TY7W6H-2YWZWQ-9W9WEL-4FIH";
      urls.push(url1);
    }
    return urls;
    //console.log(urls)
  }
  //------------------render snd return--------------------
  render() {
    //const { nasa, satellites, category, isLoaded } = this.state;
    const { nasa, Data, isLoaded } = this.state;
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
        </React.Fragment>
        <NEvents />
      </div>
    );
  }
}

export default App;
