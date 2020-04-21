import React from "react";
import BSection1 from "./blogSection/bSection1";
import BSection2 from "./blogSection/bSection2";

class Blogs extends React.Component {
  render() {
    return (
      <div>
        <BSection1 />
        <BSection2 />
      </div>
    );
  }
}

export default Blogs;
