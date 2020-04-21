import React from "react";
import "../perSection/QuestionCardsSec2.css";

const QuestionsCardsSec2 = (props) => {
  return (
    <div>
      <div className="container mt-5">
        <form action="/action_page.php">
          <div className="form-group">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5>
                    <span className="label label-warning" id="qid">
                      <p>
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ backgroundColor: "#3395d2" }}
                        >
                          {props.questionNo}
                        </button>
                      </p>

                      <p>
                        <label style={{ textAlign: "justify" }}>
                          {props.question}
                        </label>
                      </p>
                    </span>{" "}
                  </h5>
                </div>

                <div className="mainContaier">
                  <div className="card-up blue-gradient"></div>

                  {/* <!--Card--> */}
                  <div className="flipping-card">
                    <div className="flipping-card-inner">
                      <div className="flipping-card-front">
                        {/* <h4>John Doe</h4>   */}
                        <span id="descPara"> {props.option1}</span>
                      </div>
                      <div className="flipping-card-back">
                        <br />
                        <br />
                        <center>
                          <h4>
                            <b>
                              <i className="fa fa-quote-left pr-2"></i>
                            </b>
                          </h4>
                          <br />
                          <br />

                          <span className="circlBack">{props.alphabet1}</span>
                        </center>
                      </div>
                    </div>
                  </div>
                  {/* flipping 2 */}
                  <div className="card-up blue-gradient"></div>

                  {/* <!--Card--> */}
                  <div className="flipping-card">
                    <div className="flipping-card-inner">
                      <div className="flipping-card-front">
                        {/* <h4>John Doe</h4>   */}
                        <span id="descPara"> {props.option2}</span>
                      </div>
                      <div className="flipping-card-back">
                        <br />
                        <br />
                        <center>
                          <h4>
                            <b>
                              <i className="fa fa-quote-left pr-2"></i>
                            </b>
                          </h4>
                          <br />
                          <br />
                          <span className="circlBack">{props.alphabet2}</span>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer text-muted">
                  <span id="answer"></span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionsCardsSec2;
