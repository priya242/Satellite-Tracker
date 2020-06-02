import React from "react";
import NEarea from "./NEarea";

class NEeach extends React.Component {
  constructor() {
    super();
    this.state = {
      event: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let title = e.target.value;
    let data = this.props.area_data_mag;
    let event = data.filter((d) => {
      return d.title == title;
    });
    this.setState({
      event: event,
    });
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
        <NEarea event={this.state.event} />
      </div>
    );
  }
}
export default NEeach;
