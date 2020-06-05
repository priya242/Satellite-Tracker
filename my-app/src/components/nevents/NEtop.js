import React from "react";
import { HorizontalBar } from "react-chartjs-2";

class NEtop extends React.Component {
  render() {
    let events = this.props.events;
    let total = this.props.total;
    let l_labels = events.map((e) => e[0]);
    let l_data = events.map((e) => e[1]);

    const state = {
      labels: l_labels, //donut: [event[0], "others"],
      datasets: [
        {
          backgroundColor: "#01D4B4",
          hoverBackgroundColor: ["#027564"],
          hoverBorderColor: ["#027564"],
          hoverBorderWidth: 0,
          borderWidth: 0,
          barPercentage: 0.1,
          categoryPercentage: 1,
          data: l_data, //donut: [event[1], total - event[1]],
        },
      ],
    };

    const options = {
      showAllTooltips: true,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: "Number of Events recorded around the globe",
        position: "top",
        fontSize: 16,
        // fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
        fontColor: "#FCFCFC",
        fontStyle: "bold",
        padding: 16,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0,0,0,0)",
            },
            ticks: {
              fontColor: "#FCFCFC",
              // fontSize: 16,
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

    return <HorizontalBar data={state} options={options} />; // plugins={plugin} />;
  }
}
export default NEtop;
