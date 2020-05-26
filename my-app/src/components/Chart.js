import React from "react";
//import {HorizontalBar} from 'react-chartjs-2';
//import {Doughnut} from 'react-chartjs-2';
import { HorizontalBar } from "react-chartjs-2";
export default function Chart(props) {
  var label = [];
  var Data = [];

  for (var i = 0; i < props.DataSet.length; i++) {
    if (props.DataSet[i].info.satcount > 2) {
      label.push(props.DataSet[i].info.category);
      Data.push(props.DataSet[i].info.satcount);
    }
  }
  const dataWithOptions = {
    data: [],
  };
  const data = {
    labels: label,
    datasets: [
      {
        label: "Satellite Count By Categories",
        data: Data,
        backgroundColor: "rgba(0, 0 ,238,0.2)",
        borderColor: "rgba(0 ,0 ,238,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(79, 148, 205,0.4)",
        hoverBorderColor: "rgba(79, 148 ,205,1)",
        barPercentage: 0.5,
        barThickness: 20,
      },
    ],
  };

  return (
    <div className="charts">
      <HorizontalBar
        height={180}
        data={data}
        options={{
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  padding: 20,
                },
                ticks: {
                  autoSkip: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}
