import React from "react";
import SuSection1 from "./signupSection/sSection1";
import SignupCandidate from "./signupSection/SignupCandidate";

class Signup extends React.Component {
  render() {
    return (
      <div>
        <SuSection1 />
        <SignupCandidate />
      </div>
    );
  }
}

export default Signup;
