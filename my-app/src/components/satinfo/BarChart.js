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
          label: "Satellite Count By Years",
          data: Object.values(Datasets),
          //backgroundColor: "rgba(255, 215, 0,0.8)",
          //backgroundImage:"linear-gradient(	#ffce00,#ff9a00,#ff5a00)",
          backgroundColor: "#C29710",
          fill: false,
          borderColor: "rgba(0 ,0 ,238,1)",
          borderWidth: 1,
          lineTension: 0.1,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
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
      maintainAspectRatio: false,
      legend: {
        display: true,
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
      <div className="item3">
        <h2>Satellites By LaunchYear</h2>
        <Line data={data} height ={350} width = {100} options={options} />
      </div>
    );
  }
}
export default BarChart;
