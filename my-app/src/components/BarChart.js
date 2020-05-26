import React from "react";
//import { HorizontalBar } from "react-chartjs-2";

export default function BarChart(props) {
  const satlist = [];
  //console.log(props.YearData)

  if(props.YearData.above){
    var satData = props.YearData.above
  
  for (var i = 0; i < satData.length; i++) {
    var satObject = {
      year: "",
      month: "",
      satId: "",
    };
    var date = (props.YearData.above[i].launchDate);
    var dataObject = new Date(date);
    satObject.year = dataObject.getFullYear();
    satObject.month = dataObject.getMonth();
    satObject.satId = (props.YearData.above[i].satid);
    satlist.push(satObject);

    // console.log(data.above[i].launchDate)
    // console.log(data.above[i].satid)
  }
}
  

  return <div className="BarChart"></div>;
}
