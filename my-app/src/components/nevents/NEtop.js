import React from "react";
import { Doughnut } from "react-chartjs-2";

class NEtop extends React.Component {
  render() {
    let event = this.props.event;
    let total = this.props.total;

    const state = {
      labels: [event[0], "others"],
      datasets: [
        {
          backgroundColor: ["#01D4B4", "#112a4f"],
          hoverBackgroundColor: ["#027564"],
          hoverBorderColor: ["#027564"],
          hoverBorderWidth: 0,
          borderWidth: 0,
          barPercentage: 0.5,
          categoryPercentage: 1,
          data: [event[1], total - event[1]],
        },
      ],
    };

    const options = {
      cutoutPercentage: 80,
      maintainAspectRatio: false,
      title: {
        display: false,
        text: "Events around the globe",
        position: "bottom",
      },
      legend: {
        display: false,
        // position: "right",
      },
    };

    // Plugin for text in the middle : https://jsfiddle.net/cmyker/ooxdL2vj/
    // https://www.chartjs.org/docs/latest/developers/plugins.html
    const plugin = [
      {
        beforeDraw: function (chart) {
          var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

          ctx.restore();
          var fontSize = (height / 50).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#FF9C00";

          var text = event[1].toString(),
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      },
    ];

    return <Doughnut data={state} options={options} plugins={plugin} />;
  }
}
export default NEtop;
