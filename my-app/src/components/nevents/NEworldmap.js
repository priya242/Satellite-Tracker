import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataWorld from "./nevents_map_latlong";

class NEworldmap extends React.Component {
  render() {
    require("highcharts/modules/map")(Highcharts);

    const data = this.props.worlddata;
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
        text: "Location of each event",
        style: {
          color: "#FCFCFC",
          // fontSize: "",
        },
      },
      subtitle: {
        text: "",
      },

      tooltip: {
        pointFormat:
          "{point.title}<br>" +
          "Lat: {point.lat} " +
          "Lon: {point.lon}<br>" +
          "Date: {point.date}",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        style: {
          color: "#FCFCFC",
        },
      },

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
          color: "#01D4B4",
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
      <HighchartsReact
        options={mapOptions}
        constructorType={"mapChart"}
        highcharts={Highcharts}
      />
    );
  }
}
export default NEworldmap;
