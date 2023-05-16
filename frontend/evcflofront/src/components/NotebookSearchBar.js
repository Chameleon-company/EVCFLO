// https://www.npmjs.com/package/react-search-box

import React, { Component } from "react";
import ReactSearchBox from "react-search-box";

export default class App extends Component {
  data = 
    [
        {
            key:"EVCS Turku-Finland Analysis",
            value:"Examination of charge duration and energy consumption on sample Turku Finland dataset.",
        },
    
        {
            key:"EVData(EDA_Analysis)",
            value:"Investigates the characteristics of existing charging stations in Queensland and Melbourne Austrlia.",
        }
    ]

  render() {
    return (
      <div >
        <ReactSearchBox
          placeholder="Search Bar"
          value="EVCS Researches"
          data={this.data}
          onSelect={(record) => console.log(record)}
          autoFocus
        />
      </div>
    );
  }
}