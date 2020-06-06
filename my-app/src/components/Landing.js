import React from "react";
import Slider from "./SliderImage";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      imgtags: [],
      imagedate: "",
    };
  }

  componentDidMount() {
    const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
    const latest = new Date();
    latest.setDate(latest.getDate() - 2);
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    let latest_string = [
      latest.getFullYear(),
      pad(latest.getMonth() + 1),
      pad(latest.getDate()),
    ].join("-");

    latest_string = "2020-06-02";

    let image_dates = [
      latest.getFullYear(),
      pad(latest.getMonth() + 1),
      pad(latest.getDate()),
    ].join("/");

    image_dates = "2020/06/02";
    // console.log(image_dates[0]);
    let images = [];
    fetch(
      `https://api.nasa.gov/EPIC/api/natural/date/${encodeURIComponent(
        latest_string
      )}?api_key=UBd7qenIdixIhKLT7TWlcZLV8JXxkArN34QkfdbA`
    )
      .then((response) => response.json())
      .then((data) => {
        for (let d of data) {
          //console.log(d)
          images.push(d.image);
        }
      })
      .then(() => {
        let l_imgtags = images.map(
          (i) =>
            "https://epic.gsfc.nasa.gov/archive/natural/" +
            image_dates +
            "/png/" +
            i +
            ".png"
        );

        return l_imgtags;
      })
      .then((l_imgtags) => {
        this.setState({
          imgtags: l_imgtags,
          imagedate: image_dates,
        });
      })
      .catch((error) => {
        console.log("Request failed: ", error);
      });
  }
  render() {
    return (
      <div className="landing">
        <div className="landing-container">
          <div className="lgrid-item1">
            <Slider images={this.state.imgtags} />
            <p>
              [This image was taken by NASA's EPIC camera onboard the NOAA
              DSCOVR on {this.state.imagedate}]
            </p>
          </div>
          <div className="lgrid-item2">
            <h1>Satellite Tracker</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
