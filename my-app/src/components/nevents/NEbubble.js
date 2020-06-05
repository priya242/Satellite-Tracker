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
          backgroundColor: "#01D4B4",
        },
      ],
    };

    const options = {
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            let rLabel =
              data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].r;
            rLabel = (rLabel - 5) / 2 + 1;
            let yLabel = catid[tooltipItem.yLabel];
            let xLabel = dateid[tooltipItem.xLabel];
            return rLabel + " " + yLabel + " recorded on " + xLabel;
          },
        },
      },
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
      maintainAspectRatio: true,
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

    return <Bubble data={data} options={options} />;
  }
}
export default NEbubble;
