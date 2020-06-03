import React from "react";
// import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

class NEtop extends React.Component {
  render() {
    let events = this.props.events;
    let labels = events.map((event) => event[0]);
    let data = events.map((event) => event[1]);
    let total = this.props.total;
    const state = {
      labels: labels,
      datasets: [
        {
          backgroundColor: [
            "linear-gradient(#FF9C00, #01D4B4)",
            "#972f48",
            "#972f48",
            "#972f48",
          ],
          hoverBackgroundColor: ["#772249", "#772249", "#772249", "#772249"],
          hoverBorderColor: ["#772249", "#772249", "#772249", "#772249"],
          hoverBorderWidth: 0,
          borderWidth: 0,
          barPercentage: 0.2,
          data: data,
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "Most prevalent event types",
        position: "bottom",
      },
      legend: {
        display: false,
        // position: "right",
      },
    };

    //Plugin for text in the middle : https://jsfiddle.net/cmyker/ooxdL2vj/
    //https://www.chartjs.org/docs/latest/developers/plugins.html
    // const plugin = [
    //   {
    //     beforeDraw: function (chart) {
    //       var width = chart.chart.width,
    //         height = chart.chart.height,
    //         ctx = chart.chart.ctx;

    //       ctx.restore();
    //       var fontSize = (height / 114).toFixed(2);
    //       ctx.font = fontSize + "em sans-serif";
    //       ctx.textBaseline = "middle";
    //       ctx.fillStyle = "#972f48";

    //       var text = count.toString(),
    //         textX = Math.round((width - ctx.measureText(text).width) / 2),
    //         textY = height / 2;

    //       ctx.fillText(text, textX, textY);
    //       ctx.save();
    //     },
    //   },
    // ];

    return (
      <div>{<Bar data={state} options={options} /*plugins={plugin} */ />}</div>
    );
  }
}
export default NEtop;
