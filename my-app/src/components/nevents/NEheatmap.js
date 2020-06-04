import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import { Bubble } from "react-chartjs-2";

class NEbubble extends React.Component {
  render() {
    let bubble = this.props.bubble;
    console.log(bubble);
    let dateid = this.props.dateid;
    let catid = this.props.catid;

    const data = {
      datasets: [
        {
          data: bubble,
          backgroundColor: "orange",
        },
      ],
      //   datasets: {
      //     label: "",
      //     data: bubble,
      //     backgroundColor: "orange",
      //   },
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              min: -1,
              max: 4,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              min: -1,
              max: 20,
            },
          },
        ],
      },
    };

    return (
      <div className="nevents_bubble">
        <Bubble data={data} options={options} />;
      </div>
    );
  }
}

// class NEheatmap extends React.Component {
//   render() {
//     require("highcharts/modules/heatmap")(Highcharts);
//     const data = [
//       [0, 0, 10],
//       [0, 1, 19],
//       [0, 2, 8],
//       [0, 3, 24],
//       [0, 4, 67],
//       [1, 0, 92],
//       [1, 1, 58],
//       [1, 2, 78],
//       [1, 3, 117],
//       [1, 4, 48],
//       [2, 0, 35],
//       [2, 1, 15],
//       [2, 2, 123],
//       [2, 3, 64],
//       [2, 4, 52],
//       [3, 0, 72],
//       [3, 1, 132],
//       [3, 2, 114],
//       [3, 3, 19],
//       [3, 4, 16],
//       [4, 0, 38],
//       [4, 1, 5],
//       [4, 2, 8],
//       [4, 3, 117],
//       [4, 4, 115],
//       [5, 0, 88],
//       [5, 1, 32],
//       [5, 2, 12],
//       [5, 3, 6],
//       [5, 4, 120],
//       [6, 0, 13],
//       [6, 1, 44],
//       [6, 2, 88],
//       [6, 3, 98],
//       [6, 4, 96],
//       [7, 0, 31],
//       [7, 1, 1],
//       [7, 2, 82],
//       [7, 3, 32],
//       [7, 4, 30],
//       [8, 0, 85],
//       [8, 1, 97],
//       [8, 2, 123],
//       [8, 3, 64],
//       [8, 4, 84],
//       [9, 0, 47],
//       [9, 1, 114],
//       [9, 2, 31],
//       [9, 3, 48],
//       [9, 4, 91],
//     ];
//     const options = {
//       chart: {
//         type: "heatmap",
//         // marginTop: 40,
//         // marginBottom: 80,
//         // plotBorderWidth: 1,
//       },
//       title: {
//         text: "Sales per employee per weekday",
//       },
//       xAxis: {
//         categories: [
//           "Alexander",
//           "Marie",
//           "Maximilian",
//           "Sophia",
//           "Lukas",
//           "Maria",
//           "Leon",
//           "Anna",
//           "Tim",
//           "Laura",
//         ],
//         tickLength: 5,
//       },
//       yAxis: {
//         categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
//         title: null,
//       },
//       colorAxis: {
//         min: 0,
//         minColor: "#FFFFFF",
//         maxColor: Highcharts.getOptions().colors[0],
//       },
//       legend: {
//         align: "right",
//         layout: "vertical",
//         margin: 0,
//         verticalAlign: "top",
//         y: 25,
//         symbolHeight: 280,
//       },
//       responsive: {
//         rules: [
//           {
//             condition: {
//               maxWidth: 500,
//             },
//             chartOptions: {
//               yAxis: {
//                 labels: {
//                   formatter: function () {
//                     return this.value.charAt(0);
//                   },
//                 },
//               },
//             },
//           },
//         ],
//       },
//       series: [
//         {
//           type: "heatmap",
//           name: "Sales per employee",
//           borderWidth: 1,
//           data: data,
//           dataLabels: {
//             enabled: true,
//             color: "#000000",
//           },
//         },
//       ],
//     };
//     return (
//       <div className="nevents_heatmap">
//         <HighchartsReact
//           options={options}
//           constructorType={"chart"}
//           highcharts={Highcharts}
//         />
//       </div>
//     );
//   }
// }
export default NEbubble;
