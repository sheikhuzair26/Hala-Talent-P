import React from "react";
import PerSection1 from "./perSection/perSection1";
import PerSection2 from "./perSection/perSection2";
import "../flip.css";


class PersonalityTest extends React.Component {
  render() {
    return (
      <div>
        <PerSection1 />
        <PerSection2 />
      </div>
    );
  }
}

export default PersonalityTest;
