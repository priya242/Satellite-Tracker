import React from "react";
//import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataWorld from "../mapDataWorld";

class NEworldmap extends React.Component {
  render() {
    require("highcharts/modules/map")(Highcharts);

    const data = this.props.worlddata;

    alert(typeof mapDataWorld);

    const map = mapDataWorld;

    const mapOptions = {
      title: {
        text: "",
      },
      subtitle: {
        text: "",
      },

      tooltip: {
        pointFormat:
          "{point.title}<br>" +
          "Category: {point.category}<br>" +
          "Lat: {point.lat}<br>" +
          "Lon: {point.lon}",
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

      series: [
        {
          name: "Basemap",
          mapData: map,
          name: "",
          showInLegend: false,
        },
        {
          type: "mappoint",
          name: "",
          data: data,
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
