import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import { Bubble } from "react-chartjs-2";

class NEbubble extends React.Component {
  render() {
    let bubble = this.props.bubble;
    let dateid = this.props.dateid;
    let catid = this.props.catid;

    const data = {
      datasets: [
        {
          data: bubble,
          backgroundColor: "orange",
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              callback: function (value, index, values) {
                return catid[value];
              },
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              callback: function (value, index, values) {
                return dateid[value];
              },
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
export default NEbubble;
