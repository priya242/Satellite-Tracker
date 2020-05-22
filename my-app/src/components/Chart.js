import React,{ Component } from "react";
//var Chart = require("chart.js");
//import {HorizontalBar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
export default function Chart(props) {
 
  var label = [];
  var Data = [];
  for (var i = 0; i < props.DataSet.length; i++) {
    label.push(props.DataSet[i].info.category);
    Data.push(props.DataSet[i].info.satcount);
  }
const data = {
        labels: label,
        datasets: [{
            label: 'Categories',
            data: Data,
            backgroundColor: [
                'rgba(71, 60 ,139, 0.7)',
                'rgba(39 ,64, 139, 0.7)',
                'rgba(24 ,116, 205,0.7)',
                'rgba(79 ,148, 205,0.7)',
                'rgba(0, 154 ,205,0.7)',
                'rgba(74, 112, 139,0.7)',
                'rgba(0, 245 ,255, 0.7)',
                'rgba(0 ,205 ,205,0.7)',
                'rgba(118, 238, 198,0.7)',
                'rgba(155, 205, 155,0.7)',
                'rgba(67, 205, 128,0.7)',
                'rgba(124, 205, 124,0.7)'
            ],
            hoverBackgroundColor: [
              'rgba(71, 60 ,139,1)',
              'rgba(39 ,64, 139,1)',
              'rgba(24 ,116, 205,1)',
              'rgba(79 ,148, 205,1)',
              'rgba(0, 154 ,205	, 1)',
              'rgba(74, 112, 139, 1)',
              'rgba(0, 245 ,255, 1)',
              'rgba(0 ,205 ,205,1)',
              'rgba(118, 238, 198,1)',
              'rgba(155, 205, 155 ,1)',
              'rgba(67, 205, 128, 1)',
              'rgba(124, 205, 124	, 1)'
            ],
            borderWidth: 1
        }]
    };

return (
    <div className ='charts'>
      <Doughnut data={data} /> 
    </div>
  );
}
