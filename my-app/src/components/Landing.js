import React from "react";

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      imgtags: [],
    };
  }

  componentDidMount() {
    const NASA_API_KEY = encodeURIComponent(process.env.REACT_APP_NE_API_KEY);
    const latest = new Date();
    latest.setDate(latest.getDate() - 1);

    function pad(s) {
      return s < 10 ? "0" + s : s;
    }

    const latest_string = [
      latest.getFullYear(),
      pad(latest.getMonth() + 1),
      pad(latest.getDate()),
    ].join("-");

    const image_dates = [
      latest.getFullYear(),
      pad(latest.getMonth() + 1),
      pad(latest.getDate()),
    ].join("/");

    let images = [];
    // let l_imgtags = [];

    console.log("Landing");
    fetch(
      `https://api.nasa.gov/EPIC/api/natural/date/${encodeURIComponent(
        latest_string
      )}?api_key=${encodeURIComponent(NASA_API_KEY)}`
    )
      .then((response) => response.json())
      .then((data) => {
        for (let d of data) {
          images.push(d.image);
        }
      })
      .then(() => {
        let l_imgtags = images.map((i) => (
          <img
            src={
              "https://epic.gsfc.nasa.gov/archive/natural/" +
              image_dates +
              "/png/" +
              i +
              ".png"
            }
            alt=""
          />
        ));
        return l_imgtags;
      })
      .then((l_imgtags) => {
        console.log("inside fetch chain");
        this.setState({ imgtags: l_imgtags });
        console.log(this.state.imgtags);
      })
      .catch((error) => {
        console.log("Request failed: ", error);
      });
  }

  render() {
    return (
      <div>
        LANDING:
        <br />
        {this.state.imgtags}
      </div>
    );
  }
}

export default Landing;
