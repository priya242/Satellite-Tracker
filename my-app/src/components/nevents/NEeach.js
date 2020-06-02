import React from "react";
import { Doughnut } from "react-chartjs-2";

class NEeach extends React.Component {
  render() {
    // console.log("inside neach");
    // console.log(this.props);
    let event = this.props.event[0];
    let count = this.props.event[1];
    let total = this.props.total;
    const state = {
      labels: [event, ""],
      datasets: [
        {
          backgroundColor: ["#972f48", "#141852"],
          hoverBackgroundColor: ["#772249", "#141852"],
          hoverBorderColor: ["#772249", "#141852"],
          hoverBorderWidth: 1,
          borderWidth: 0,
          data: [count, total - count],
        },
      ],
    };

    const options = {
      cutoutPercentage: 80,
    };

    //Plugin for text in the middle : https://jsfiddle.net/cmyker/ooxdL2vj/
    //https://www.chartjs.org/docs/latest/developers/plugins.html
    const plugin = [
      {
        beforeDraw: function (chart) {
          var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

          ctx.restore();
          var fontSize = (height / 114).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#972f48";

          var text = count.toString(),
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      },
    ];

    return (
      <div>
        <Doughnut data={state} options={options} plugins={plugin} />
      </div>
    );
  }
}
export default NEeach;
