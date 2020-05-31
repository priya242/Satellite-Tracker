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
      title: {
        text: "",
      },
      subtitle: {
        text: "",
      },

      tooltip: {
        pointFormat:
          "{point.title}<br>" + "Lat: {point.lat} " + "Lon: {point.lon}",
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
          showInLegend: false,
        },
        {
          type: "mappoint",
          name: "Event",
          dataLabels: {
            enabled: true,
            format: "{point.type}",
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
