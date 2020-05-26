import React from "react";
import { Doughnut } from "react-chartjs-2";

class NEeach extends React.Component {
  render() {
    console.log(this.props);

    const state = {
      labels: ["Earthquakes", ""],
      datasets: [
        {
          label: "Rainfall",
          backgroundColor: ["#B21F00", ""],
          hoverBackgroundColor: ["#501800", ""],
          data: [11, 26 - 11],
        },
      ],
    };

    return (
      <div style={{ width: "100px", height: "100px" }}>
        <Doughnut
          data={state}
          options={{
            title: {
              display: false,
              // text: "Average Rainfall per month",
              // fontSize: 20,
            },
            legend: {
              display: false,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
export default NEeach;
