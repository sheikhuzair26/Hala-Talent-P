import React from "react";
import CuSection1 from "./contactSection/cuSection1";
import CuSection2 from "./contactSection/cuSection2";
import CuSection3 from "./contactSection/cusection3";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <CuSection1 />
        <CuSection2 />
        <CuSection3 />
      </div>
    );
  }
}

export default Contact;
