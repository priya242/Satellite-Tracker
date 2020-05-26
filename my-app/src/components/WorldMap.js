import React from "react";
//import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataWorld from "./mapDataWorld";

export default function WorldMap(props) {
  // Load Highcharts Maps as a module
  require("highcharts/modules/map")(Highcharts);

  // Create the chart
  const mapOptions = {
    title: {
      text: "",
    },
    colorAxis: {
      min: 0,
      stops: [
        [0.2, "#0000FF"],
        [0.4, "#1E90FF)"],
        [0.6, "#00BFFF"],
        [0.8, "#87CEFF"],
        [0.2,"B0E2FF"]
      ],
    },

    series: [
      {
        mapData: mapDataWorld,
        name: "Satellites",
        data: [
          ["ao", 1],
          ["dz", 6],
          ["ar", 25],
          ["at", 3],
          ["au", 27],
          ["az", 3],
          ["be", 4],
          ["by", 2],
          ["bg", 1],
          ["bo", 1],
          ["ca", 63],
          ["br", 91],
          ["cl", 3],
          ["co", 2],
          ["cr", 1],
          ["cz", 8],
          ["dk", 12],
          ["ec", 2],
          ["eg", 9],
          ["ee", 1],
          ["fi", 8],
          ["fr", 1318],
          ["de", 85],
          ["gh", 1],
          ["gr", 5],
          ["hu", 3],
          ["in", 696],
          ["id", 19],
          ["ir", 11],
          ["iq", 1],
          ["il", 34],
          ["it", 46],
          ["jo", 1],
          ["jp", 612],
          ["kz", 8],
          ["ke", 1],
          ["la", 1],
          ["lk", 1],
          ["lt", 5],
          ["lu", 2],
          ["ma", 2],
          ["my", 7],
          ["mx", 10],
          ["mn", 1],
          ["nl", 9],
          ["ng", 6],
          ["kp", 6],
          ["no", 11],
          ["np", 1],
          ["nz", 1],
          ["pk", 7],
          ["pe", 4],
          ["pl", 6],
          ["pt", 1],
          ["cn", 5556],
          ["tw", 16],
          ["ro", 1],
          ["ph", 3],
          ["rw", 1],
          ["za", 7],
          ["sa", 15],
          ["sd", 1],
          ["sg", 12],
          ["kr", 30],
          ["es", 30],
          ["sg", 2],
          ["se", 12],
          ["ch", 4],
          ["th", 10],
          ["mc", 1],
          ["tr", 15],
          ["ae", 10],
          ["gb", 142],
          ["ua", 9],
          ["uy", 1],
          ["us", 13517],
          ["br", 1],
          ["ve", 3],
          ["vn", 5],
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Highmaps</h2>
      <HighchartsReact
        options={mapOptions}
        constructorType={"mapChart"}
        highcharts={Highcharts}
      />
    </div>
  );
}
