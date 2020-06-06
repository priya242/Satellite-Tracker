import React from "react";
import { Line } from "react-chartjs-2";

class NEarea extends React.Component {
  render() {
    let event = this.props.event;
    let data = {};
    let options = {};

    if (Object.keys(event).length !== 0 && event.constructor === Object) {
      console.log(this);

      let l_labels = event.geometry.map((g) => g.date);
      let l_data = event.geometry.map((g) => g.magnitudeValue);

      let l_label = "Magnitude not recorded";
      for (let g of event.geometry) {
        if (g.magnitudeUnit != null) {
          l_label = g.magnitudeUnit;
        }
      }

      data = {
        labels: l_labels,
        datasets: [
          {
            label: l_label,
            fill: "origin",
            lineTension: 0.5,
            backgroundColor: "rgba(1,212,180,0.5)",
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
          fontColor: "#FCFCFC",
          //   fontSize: 16,
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            fontColor: "#FCFCFC",
            // fontSize: 16,
            padding: 16,
          },
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "#1b3b69",
                zeroLineColor: "#041021", //"RGBA(4, 16, 33, 0.5)",
              },
              ticks: {
                fontColor: "#FCFCFC",
                // fontSize: 20,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "#FCFCFC",
                // fontSize: 16,
                beginAtZero: true,
              },
            },
          ],
        },
      };
    }

    return <Line data={data} options={options} />; // plugins={plugin} />;
  }
}

export default NEarea;
