import React from "react";
import BarChart from "./BarChart";
class BarData extends React.Component {
  constructor() {
    super();
    this.state = {
      year: {},
      yearlyData: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let title = e.target.value;
    //console.log(title);
    let yearRange = e.target.value.split("-");
    let firstYear = yearRange[0];
    let lastYear = yearRange[1];
    let years = [];
    let data = this.props.DataSets;
    if (data) {
      for (var i = 0; i < data.length; i++) {
        var date = data[i].launchDate;
        var dataObject = new Date(date);
        var fullYear = dataObject.getFullYear();
        if (fullYear >= parseInt(firstYear) && fullYear <= parseInt(lastYear)) {
          years.push(dataObject.getFullYear());
        }
      }
    }
    let tmpYearlyData = years.reduce(function (object, satCount) {
      if (!object[satCount]) {
        object[satCount] = 1;
      } else {
        object[satCount]++;
      }
      return object;
    }, {});

    this.setState({
      yearlyData: tmpYearlyData,
      year: Object.keys(tmpYearlyData),
      isLoaded: true,
    });
  }

  render() {
    //let data = this.state.yearlyData;
    const { year, yearlyData } = this.state;
    //console.log(year);
    // console.log(yearlyData);
    var data = [
      "2010-2020",
      "2000-2010",
      "1990-2000",
      "1980-1990",
      "1970-1980",
      "1960-1970",
      "1950-1960",
    ];
    let selectops = data.map((tempData, i) => {
      if (i == 0) {
        return (
          <option key={tempData} value={tempData} selected>
            {tempData}
          </option>
        );
      } else {
        return (
          <option key={tempData} value={tempData}>
            {tempData}
          </option>
        );
      }
    });
    let d = {};
    if (
      Object.keys(this.state.yearlyData).length === 0 &&
      this.state.yearlyData.constructor === Object
    ) {
      if (data.length != 0) {
        d = data[0];
      }
    } else {
      d = this.state.yearlyData;
    }

    return (
      <div className = "item3">
        <select
          name="Select year"
          className="dropdown"
          onChange={this.handleChange}
          id="dd"
        >
          {selectops}
        </select>
        <BarChart satdata={d}  />
      </div>
    );
  }
}
export default BarData;
