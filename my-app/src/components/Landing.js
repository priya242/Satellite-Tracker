import React from "react";

class Landing extends React.Component {
  render() {
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

    console.log("Landing");
    fetch(
      `https://api.nasa.gov/EPIC/api/natural/date/${encodeURIComponent(
        latest_string
      )}?api_key=${encodeURIComponent(NASA_API_KEY)}`
    )
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.log("Request failed: ", error);
      });
    return <div>Landing</div>;
  }
}

export default Landing;
