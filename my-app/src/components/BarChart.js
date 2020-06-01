import React from "react";
import { Bar } from "react-chartjs-2";
class BarChart extends React.Component {
  applyLegendSettings() {
    var yearRange = (document.getElementById("dd").value).split("-");
    var firstYear = yearRange[0];
    var lastYear = yearRange[1];
    for (var i = 0; i < satData.length; i++) {
      
    }
    console.log(x);
  }
  render() {
    var years = [];
    if (this.props.DataSets.above) {
      var satData = this.props.DataSets.above;
      for (var i = 0; i < satData.length; i++) {
        var date = satData[i].launchDate;
        var dataObject = new Date(date);
        if (dataObject.getFullYear()) {
          years.push(dataObject.getFullYear());
        }
      }
    }
    var yearlyData = years.reduce(function (object, satCount) {
      if (!object[satCount]) {
        object[satCount] = 1;
      } else {
        object[satCount]++;
      }
      return object;
    }, {});
    
    const data = {
      labels: Object.keys(yearlyData),
      datasets: [
        {
          label: "Satellite Launch ",
          backgroundColor: "rgba(255, 215, 0,0.8)",
          borderColor: "rgba(0 ,0 ,238,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255, 215, 0,0.4)",
          hoverBorderColor: "rgba(0 ,0 ,238,1)",
          barPercentage: 0.5,
          barThickness: 20,
          data: Object.values(yearlyData),
        },
      ],
    };
    const options = {
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
            ticks: {
              fontColor: "#fff",
              fontSize: 14,
            },
          },
        ],
      },
    };

    return (
      <div className="barcharts">
        <h1>Active Satellites</h1>
        <select
          className="dropdown"
          onChange={this.applyLegendSettings}
          id="dd"
        >
          <option value="2010-2020">2010-2020</option>
          <option value="2000-2010">2000-2010</option>
          <option value="1990-2000">1990-2000</option>
          <option value="1980-1990">1980-1990</option>
        </select>
        <Bar data={data} height={20} width={80} options={options} />
      </div>
    );
  }
}
export default BarChart;
