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
      data = {
        labels: l_labels,
        datasets: [
          {
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
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
          position: "right",
        },
      };
    }

    return <Line data={data} options={options} />;
  }
}

export default NEarea;
