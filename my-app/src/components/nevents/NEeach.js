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
    event = event[0];
    this.setState({
      event: event,
    });
  }

  render() {
    let data = this.props.area_data_mag;

    let selectops = data.map((event, index) => {
      if (index == 0) {
        return (
          <option key={event.title} value={event.title} selected>
            {event.title}
          </option>
        );
      } else {
        return (
          <option key={event.title} value={event.title}>
            {event.title}
          </option>
        );
      }
    });

    let defaultOption = {};

    if (
      Object.keys(this.state.event).length === 0 &&
      this.state.event.constructor === Object
    ) {
      if (data.length != 0) {
        defaultOption = data[0];
      }
    } else {
      defaultOption = this.state.event;
    }

    return (
      <div>
        <div className="nav-controls">
          <select
            name="Event"
            className="area_select"
            onChange={this.handleChange}
          >
            {selectops}
          </select>
        </div>
        <div>
          <NEarea event={defaultOption} />
        </div>
      </div>
    );
  }
}
export default NEeach;
