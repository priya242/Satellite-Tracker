import React from "react";
//import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataWorld from "./sat_mapDataWorld";
class WorldMap extends React.Component {
  // Load Highcharts Maps as a module
  render() {
    require("highcharts/modules/map")(Highcharts);
    const tmpdata = this.props.WorldDataSet;
    const map = mapDataWorld;
    var data = [];

    for (var i = 0; i < tmpdata.length; i++) {
      let wd = {};
      wd["name"] = tmpdata[i].satname;
      wd["lat"] = tmpdata[i].satlat;
      wd["lon"] = tmpdata[i].satlng;
      data.push(wd);
    }
    console.log(data);
    // Create the chart
    const mapOptions = {
      chart: {
        backgroundColor: {
          radialGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, "#0a192f"],
            [1, "#0a192f"],
            
          ],
          styledMode: true
        },
        plotBorderColor: "#606063",
      },
      title: {
        text: "",
      },
      subtitle:{
        text:"",
      },
      /**  colorAxis: {
      min: 0,
      stops: [
        [0.2, "#0000FF"],
        [0.4, "#1E90FF)"],
        [0.6, "#00BFFF"],
        [0.8, "#87CEFF"],
        [0.2, "B0E2FF"],
      ],
    }, **/

      tooltip: {
        pointFormat:
          "{point.name}<br>" +
           "Lat: {point.lat} " + 
           "Lon: {point.lon}<br>",
           //backgroundColor: "rgba(0, 0, 0, 0.85)",
           backgroundColor:"rgb(50, 62, 116)",
           //backgroundImage:"radial-gradient(rgb(50, 62, 116), rgb(18, 6, 75))",
        style: {
          color: "#F0F0F0",
        },
      },


      series: [
        {
          name: "Basemap",
          mapData: map,
          borderColor: "#A0A0A0",
          nullColor: "#4c4cff",
          showInLegend: false,
        },
        {
          type: "mappoint",
          turboThreshold: 3300,
          name: "Satellites",
          color: "#C29710",
          dataLabels: {
            enabled: false,
            format: "{point.name}",
            color: "#F0F0F3",
          },
          marker: {
            lineColor: "#333",
          },
          data: data,
          showInLegend: false,
        },
      ],
    }; 
      return (
        <div className="item4">
          <h2>Satellites Position</h2>
          <HighchartsReact
            options={mapOptions}
            constructorType={"mapChart"}
            highcharts={Highcharts}
          />
        </div>
      );
    }
  }
  export default WorldMap;
    
   
    
