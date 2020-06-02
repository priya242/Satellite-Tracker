import React from "react";
import { Line } from "react-chartjs-2";

class NEarea extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        labels: [],
        datasets: [],
      },
      options: {
        title: {
          display: true,
          text: "Magnitude per day",
        },
        legend: {
          display: true,
          position: "right",
        },
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ event: e.target.value });
  }

  render() {
    let data = this.props.area_data_mag;

    let selectops = data.map((data, i) => (
      <option key={data.title} value={data.title}>
        {data.title}
      </option>
    ));

    return (
      <div>
        <div className="nav-controls">
          Event:{" "}
          <select
            name="Event"
            className="area_select"
            onChange={this.handleChange}
          >
            <option>Select Event</option>
            {selectops}
          </select>
        </div>
        {<Line data={this.state.data} options={this.state.options} />}
      </div>
    );
  }
}
export default NEarea;
