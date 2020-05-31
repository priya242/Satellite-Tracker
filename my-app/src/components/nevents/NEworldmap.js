import React from "react";
//import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataWorld from "./nevents_map_latlong";

class NEworldmap extends React.Component {
  render() {
    require("highcharts/modules/map")(Highcharts);

    const data = this.props.worlddata;
    console.log(data);

    const map = mapDataWorld;

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
        // style: {
        //   color: "#E0E0E3",
        //   textTransform: "uppercase",
        //   fontSize: "20px",
        // },
      },
      subtitle: {
        text: "",
      },

      tooltip: {
        pointFormat:
          "{point.title}<br>" + "Lat: {point.lat} " + "Lon: {point.lon}",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        style: {
          color: "#F0F0F0",
        },
      },
      // colorAxis: {
      //   min: 0,
      //   stops: [
      //     [0.2, "#0000FF"],
      //     [0.4, "#1E90FF)"],
      //     [0.6, "#00BFFF"],
      //     [0.8, "#87CEFF"],
      //     [0.2, "B0E2FF"],
      //   ],
      // },

      mapNavigation: {
        enabled: true,
      },

      series: [
        {
          name: "Basemap",
          mapData: map,
          name: "",
          borderColor: "#A0A0A0",
          nullColor: "rgba(200, 200, 200, 0.3)",
          showInLegend: false,
        },
        {
          type: "mappoint",
          name: "Event",
          color: "#90ee7e",
          dataLabels: {
            enabled: true,
            format: "{point.type}",
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
      <div>
        <HighchartsReact
          options={mapOptions}
          constructorType={"mapChart"}
          highcharts={Highcharts}
        />
      </div>
    );
  }
}
export default NEworldmap;
