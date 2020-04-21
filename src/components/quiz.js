import React from "react";
import QSection1 from "./quizSection/qSection1";
import QSection2 from "./quizSection/qSection2";

class Quiz extends React.Component {
  render() {
    return (
      <div>
        <QSection1 />
        <QSection2 />
      </div>
    );
  }
}

export default Quiz;
