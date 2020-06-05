import React from "react";
import { Line } from "react-chartjs-2";

class NEarea extends React.Component {
  render() {
    let event = this.props.event;
    let data = {};
    let options = {};

    if (Object.keys(event).length !== 0 && event.constructor !== Object) {
      let l_labels = event[0].geometry.map((g) => g.date);
      let l_data = event[0].geometry.map((g) => g.magnitudeValue);
      let flag = false;
      let l_label = "Magnitude not recorded";
      for (let g of event[0].geometry) {
        if (g.magnitudeUnit != null) {
          l_label = g.magnitudeUnit;
        }
      }
      data = {
        labels: l_labels,
        datasets: [
          {
            label: l_label,
            fill: false,
            lineTension: 0.5,
            backgroundColor: "#01D4B4",
            borderColor: "#01D4B4",
            borderWidth: 2,
            data: l_data,
          },
        ],
      };
      options = {
        title: {
          display: true,
          text: "Magnitude per day",
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            fontColor: "#FCFCFC",
            fontSize: 16,
            padding: 16,
          },
        },
      };
    }

    return <Line data={data} options={options} />;
  }
}

export default NEarea;
