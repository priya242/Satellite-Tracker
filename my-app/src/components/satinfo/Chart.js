import React from "react";
import Loader from "react-loader-spinner";
import { HorizontalBar } from "react-chartjs-2";
export default function Chart(props) {
  var label = [];
  var Data = [];
  var isLoaded = false;

  for (var i = 0; i < props.DataSet.length; i++) {
    if (props.DataSet[i].info.satcount > 20) {
      label.push(props.DataSet[i].info.category);
      Data.push(props.DataSet[i].info.satcount);
    }
    isLoaded = true;
  }
  const data = {
    labels: label,
    datasets: [
      {
        label: "Satellite Count By Categories",
        data: Data,
        backgroundColor: "rgba(255, 215, 0,0.8)",
        borderColor: "rgba(0 ,0 ,238,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 215, 0,0.4)",
        hoverBorderColor: "rgba(0 ,0 ,238,1)",
        barPercentage: 0.5,
        barThickness: 20,
      },
    ],
  };

  return (
    <div className="grid-item2">
    
      {!isLoaded && (
        <div
          style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader
            type="ThreeDots"
            color="rgba(255, 215, 0,0.8)"
            height="100"
            width="100"
          />
        </div>
      )}
      <HorizontalBar
        height={120}
        data={data}
        options={{
          legend: {
            labels: {
              fontColor: "#fff",
            },
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  padding: 0,
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
        }}
      />
    </div>
  );
}
