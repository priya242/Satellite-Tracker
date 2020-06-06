import React from "react";
import Loader from "react-loader-spinner";
import { HorizontalBar } from "react-chartjs-2";
export default function Chart(props) {
  var label = [];
  var Data = [];
  var isLoaded = false;

  for (var i = 0; i < props.DataSet.length; i++) {
    if (props.DataSet[i].info.satcount > 5) {
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
        backgroundColor: "#01D4B4",
        borderColor: "rgb(0,0,238)",
        borderWidth: 1,
        hoverBackgroundColor: "rgb(1,212,180,0.5)",
        hoverBorderColor: "rgba(0 ,0 ,238,1)",
        barPercentage: 0.5,
        barThickness: 20,
      },
    ],
  };

  return (
   
    <div className="item2">
    
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
            color="#FF9C00"
            height="100"
            width="100"
          />
        </div>
      )}
    
      <HorizontalBar
        height={280}
        data={data}
        options={{
          title: {
            display: true,
            text: "Number of Satellites according to Categories",
            position: "top",
            fontSize: 16,
            // fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
            fontColor: "#FCFCFC",
            fontStyle: "bold",
            padding: 16,
          },
          legend: {
            display:true,
            position:"bottom",
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
