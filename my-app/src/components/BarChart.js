import React from "react";
import { Bar } from "react-chartjs-2";
class BarChart extends React.Component{
  render(){
    let Datasets = this.props.satdata;
    //console.log(Datasets);
    let data = {};
    let options = {};
   data = {
      labels: Object.keys(Datasets),
      datasets: [
        {
          label: "Satellite Count By Years",
          backgroundColor: "rgba(255, 215, 0,0.8)",
          borderColor: "rgba(0 ,0 ,238,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255, 215, 0,0.4)",
          hoverBorderColor: "rgba(0 ,0 ,238,1)",
          barPercentage: 0.2,
          categoryPercentage:0.2,
          barThickness: 20,
          data: Object.values(Datasets),
        },
      ],
    };
   options = {
      legend: {
        display: true,
        labels: {
          fontColor: "#fff",
        },
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              padding: 20,
            },
            ticks: {
              autoSkip: false,
              fontColor: "#fff",
              fontSize: 14,
            },
          },
        ],
        xAxes: [
          {
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            ticks: {
              fontColor: "#fff",
              fontSize: 14,
            },
          },
        ],
      },
    };

    return(
      <div>
      <h1>Active Satellites</h1>
      <Bar data={data} height={30} width={80} options={options} />
      </div>
    );      
  }
}
export default BarChart;