import React from "react";
import SubFormSection1 from "./subFormSection/subFormSection1";
import SubFormSection2 from "./subFormSection/subFormSection2";

class Subscriptionform extends React.Component {
  render() {
    return (
      <div>
        <SubFormSection1 />
        <SubFormSection2 />
      </div>
    );
  }
}

export default Subscriptionform;
