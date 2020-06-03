import React from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {
      //propYears: [],
      //propStateData: [],
      //propStateOptions: [],
      //propStateYearlyData: []
    //};
  this.state = {
    years: [],
    stateData: [],
    stateOptions: [],
    stateYearlyData: []
  }
}
fetchChartData(local){
  var localYears = [];
  if (local) {
    var satData = local;
    for (var i = 0; i < satData.length; i++) {
      var date = satData[i].launchDate;
      var dataObject = new Date(date);
      if (dataObject.getFullYear()) {
        localYears.push(dataObject.getFullYear());        
      }
    }
  }
  
  const yearlyData = localYears.reduce(function (object, satCount) {
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
        label: "Satellite Count By Years",
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
 
 this.state.years = localYears;
 this.state.stateData = data;
 this.state.stateOptions = options;
 this.state.stateYearlyData = yearlyData;
}

  render(boolVal) {
    const Data = [];
    const Options = [];
    this.fetchChartData(this.props.DataSets.above);
    return (
      <div className="barcharts">
        <h1>Active Satellites</h1>
       
        <select
          className="dropdown"
          onChange={this.onFieldChange.bind(this)}
          id="dd">
          <option value="">Select year range</option>
          <option value="2010-2020">2010-2020</option>
          <option value="2010-2020">2000-2010</option>
          <option value="1990-2000">1990-2000</option>
          <option value="1980-1990">1980-1990</option>
          <option value="1970-1980">1970-1980</option>
        </select>
        <Bar data={this.state.stateData} height={20} width={80} options={this.state.stateOptions} />
      </div>
    );
  }

  onFieldChange() {
    //console.log(yearlyData)
    var ddValue = document.getElementById("dd");
    var yearRange = ddValue.value.split("-");
    var firstYear = yearRange[0];
    var lastYear = yearRange[1];
    console.log(firstYear + " " + lastYear);
    var c = this.state.stateYearlyData;
    var filteredData = [];
    //for(var i = 0; i < c.length; i++){
      //  if(c[i] >= parseInt(firstYear) && c[i] <= parseInt(lastYear)){
        //  filteredData.push(c[i])
        //}
    //}
    filteredData = {1958: 1, 1960: 10}
    console.log(filteredData)
    this.state.stateData = filteredData;
    this.render(true)
  }
}

export default BarChart;

