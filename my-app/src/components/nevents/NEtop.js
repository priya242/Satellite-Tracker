import React from "react";
import { HorizontalBar } from "react-chartjs-2";

class NEtop extends React.Component {
  render() {
    let events = this.props.events;
    let total = this.props.total;
    let l_labels = events.map((e) => e[0]);
    let l_data = events.map((e) => e[1]);

    const state = {
      labels: l_labels, //donut: [event[0], "others"],
      datasets: [
        {
          backgroundColor: "#01D4B4",
          hoverBackgroundColor: ["#027564"],
          hoverBorderColor: ["#027564"],
          hoverBorderWidth: 0,
          borderWidth: 0,
          barPercentage: 0.1,
          categoryPercentage: 1,
          data: l_data, //donut: [event[1], total - event[1]],
        },
      ],
    };

    const options = {
      maintainAspectRatio: true,
      title: {
        display: true,
        text: "Number of Events recorded around the globe",
        position: "top",
        fontSize: 16,
        // fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
        fontColor: "#FCFCFC",
        fontStyle: "bold",
        padding: 16,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0,0,0,0)",
              zeroLineColor: "#FCFCFC",
            },
            ticks: {
              fontColor: "#FF9C00",
              fontSize: 20,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontColor: "#FCFCFC",
              fontSize: 16,
              beginAtZero: true,
            },
          },
        ],
      },
    };

    // Plugin for text in the middle : https://jsfiddle.net/cmyker/ooxdL2vj/
    // https://www.chartjs.org/docs/latest/developers/plugins.html
    // const plugin = [
    //   {
    // beforeDraw: function (chart) {
    //   // var width = chart.chart.width,
    //   //   height = chart.chart.height,
    //     ctx = chart.chart.ctx;

    //   ctx.restore();
    //   var fontSize = (height / 50).toFixed(2);
    //   ctx.font = fontSize + "em sans-serif";
    //   ctx.textBaseline = "middle";
    //   ctx.fillStyle = "#FF9C00";

    //   var text = event[1].toString(),
    //     textX = Math.round((width - ctx.measureText(text).width) / 2),
    //     textY = height / 2;

    //   ctx.fillText(text, textX, textY);
    //   ctx.save();
    // },

    //     beforeDraw: function (chart) {
    //       var ctx = chart.chart.ctx;
    //       ctx.restore();
    //       ctx.font = chart.scale.font;
    //       alert(ctx.font);
    //       ctx.fillStyle = chart.scale.textColor;
    //       alert(ctx.fillStyle);
    //       ctx.textAlign = "center";
    //       ctx.textBaseline = "bottom";

    //       chart.datasets.forEach(function (dataset) {
    //         dataset.bars.forEach(function (bar) {
    //           ctx.fillText(bar.value, bar.x, bar.y - 5);
    //         });
    //       });
    //       ctx.save();
    //     },
    //   },
    // ];

    return <HorizontalBar data={state} options={options} />; // plugins={plugin} />;
  }
}
export default NEtop;
