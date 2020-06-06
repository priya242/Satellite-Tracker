import React from "react";
import { Line } from "react-chartjs-2";
class BarChart extends React.Component {
  render() {
    let Datasets = this.props.satdata;
    //console.log(Datasets);
    let data = {};
    let options = {};
    var isLoaded = true;
    data = {
      labels: Object.keys(Datasets),
      datasets: [
        {
          data: Object.values(Datasets),
          backgroundColor: "#FF9C00",
          fill: false,
          borderColor: "#FF9C00",
          borderWidth: 3,
          lineTension: 0.7,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#01D4B4",
          pointBackgroundColor: "#01D4B4",
          pointBorderWidth: 7,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
        },
      ],
    };
    options = {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: "Number of Satellites by Launch Year",
        position: "top",
        fontSize: 16,
        // fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
        fontColor: "#FCFCFC",
        fontStyle: "bold",
        padding: 16,
      },
      legend: {
        display: false,
        labels: {
          fontColor: "#fff",
        },
      },
      scales: {
        yAxes: [
          {

            ticks: {
              autoSkip: false,
              fontColor: "#fff",
              fontSize: 14,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontColor: "#fff",
              fontSize: 14,
            },
          },
        ],
      },
    };

    return (
      <div >
        
        <Line data={data} options={options} />
      </div>
    );
  }
}
export default BarChart;
