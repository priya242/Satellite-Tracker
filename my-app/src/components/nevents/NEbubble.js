import React from "react";
import { Bubble } from "react-chartjs-2";

class NEbubble extends React.Component {
  render() {
    let data = {
      datasets: [
        {
          label: "Earthquakes",
          data: [
            { x: 0, y: 1, r: 0 },
            { x: 1, y: 1, r: 8 },
            { x: 2, y: 1, r: 7 },
            { x: 3, y: 1, r: 1 },
            { x: 4, y: 1, r: 2 },
            { x: 5, y: 1, r: 3 },
          ],
          backgroundColor: "lightblue",
        },
        {
          label: "Volcanoes",
          data: [
            { x: 0, y: 2, r: 1 },
            { x: 1, y: 2, r: 2 },
            { x: 2, y: 2, r: 3 },
            { x: 3, y: 2, r: 1 },
            { x: 4, y: 2, r: 2 },
            { x: 5, y: 2, r: 3 },
          ],
          backgroundColor: "pink",
        },
      ],
    };
    let options = {};
    return <Bubble data={data} options={options} />;
  }
}

export default NEbubble;
