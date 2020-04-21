import React from "react";
import B1Section1 from "./blog1Section/b1Section1";
import B1Section2 from "./blog1Section/b1Section2";

class Blog1 extends React.Component {
  render() {
    return (
      <div>
        <B1Section1 />
        <B1Section2 />
      </div>
    );
  }
}

export default Blog1;
