import React from "react";
import CandSection1 from "./candListSection/clSection1";
import CandSection2 from "./candListSection/clSection2";

class Candidate extends React.Component {
  render() {
    return (
      <div className="App">
        <CandSection1 />
        <CandSection2 />
      </div>
    );
  }
}

export default Candidate;
