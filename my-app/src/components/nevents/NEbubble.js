import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import { Bubble } from "react-chartjs-2";

class NEbubble extends React.Component {
  render() {
    let bubble = this.props.bubble;
    let dateid = this.props.dateid;
    let catid = this.props.catid;

    const data = {
      datasets: [
        {
          data: bubble,
          backgroundColor: "orange",
        },
      ],
    };

    const options = {
      // tooltips: {
      //   custom:
      // }
      title: {
        display: true,
        text: "Events per days",
        fontSize: 16,
        // fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
        fontColor: "#FCFCFC",
        fontStyle: "bold",
        padding: 16,
      },
      legend: {
        display: false,
      },
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 255, 0.2)", //color of the background
              zeroLineColor: "#FCFCFC",
            },
            ticks: {
              fontColor: "#FCFCFC",
              fontSize: 16,
              beginAtZero: true,
              callback: function (value, index, values) {
                return catid[value];
              },
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 255, 0.2)", //color of the background
              zeroLineColor: "#FCFCFC",
            },
            ticks: {
              fontColor: "#FCFCFC",
              fontSize: 16,
              beginAtZero: true,
              callback: function (value, index, values) {
                return dateid[value];
              },
            },
          },
        ],
      },
    };

    return (
      <div className="nevents_bubble">
        <Bubble data={data} options={options} />;
      </div>
    );
  }
}
export default NEbubble;
