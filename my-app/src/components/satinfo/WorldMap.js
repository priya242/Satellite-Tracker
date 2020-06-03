import React from "react";
//import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataWorld from "./mapDataWorld";
class WorldMap extends React.Component {
  // Load Highcharts Maps as a module
  render() {
    require("highcharts/modules/map")(Highcharts);
    const tmpdata = this.props.WorldDataSet;
    const map = mapDataWorld;
    let data = [];

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
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, "#2a2a2b"],
            [1, "#3e3e40"],
          ],
        },
        plotBorderColor: "#606063",
      },
      title: {
        text: "",
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
    },**/

      tooltip: {
        pointFormat:
          "{point.name}<br>" + "Lat: {point.lat} " + "Lon: {point.lon}<br>",

        backgroundColor: "rgba(0, 0, 0, 0.85)",
        style: {
          color: "#F0F0F0",
        },
      },

      mapNavigation: {
        enabled: true,
      },

      series: [
        {
          mapData: map,
          name: "Satellites",
          borderColor: "#A0A0A0",
          nullColor: "rgba(200, 200, 200, 0.3)",
          showInLegend: false,
        },
        {
          type: "mappoint",
          name: "Satellite",
          color: "#90ee7e",
          dataLabels: {
            enabled: true,
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
      <div className="grid-item4">
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
