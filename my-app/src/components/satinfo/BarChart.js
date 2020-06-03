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
          //backgroundColor: "rgba(255, 215, 0,0.8)",
          //backgroundImage:"linear-gradient(	#ffce00,#ff9a00,#ff5a00)",
          backgroundColor:"#C29710",
          borderColor: "rgba(0 ,0 ,238,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255, 215, 0,0.4)",
          hoverBorderColor: "rgba(0 ,0 ,238,1)",
          barPercentage: 1,
          categoryPercentage:1,
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
      <div className = "grid-item3">
      <Bar data={data} height={100} width ={100} options={options} />
      </div>
    );      
  }
}
export default BarChart;