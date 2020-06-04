import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import { Bubble } from "react-chartjs-2";

class NEbubble extends React.Component {
  render() {
    let bubble = this.props.bubble;
    let dateid = this.props.dateid;
    let catid = this.props.catid;
    let megadata = {};

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
export default NEbubble;
