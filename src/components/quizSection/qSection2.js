import React from "react";
import quizService from ".././quizService/index";
import QuestionBox from "./questionBox";
import Result from "./result";

import { NavLink } from "react-router-dom";

class QSection2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      score: 0,
      responses: 0,
      done: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      done: true,
    });
  }
  renderResult() {
    return <Result score={this.state.score} />;
  }
  getQuestion = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }

    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };
  componentDidMount() {
    this.getQuestion();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            {this.state.questionBank.length > 0 &&
              this.state.responses < 6 &&
              this.state.questionBank.map(
                ({ question, answers, correct, questionId }) => (
                  <QuestionBox
                    question={question}
                    options={answers}
                    key={questionId}
                    selected={(answer) => this.computeAnswer(answer, correct)}
                  />
                )
              )}
            <button>
              <NavLink to="/result">Done</NavLink>
            </button>
            {this.state.done && this.renderResult()}
            {/* {this.state.responses ===5 ? <Result score={this.state.score} /> : null }  */}
          </div>
        </form>
      </div>
    );
  }
}

export default QSection2;
