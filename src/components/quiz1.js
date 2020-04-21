import React from "react";
import { NavLink } from "react-router-dom";
import "../quiz1.css";
import { Progress } from "reactstrap";



class Quiz1 extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="emp-bg">
            <div className="row">
              <div className="col-lg-12">
                <div className="">
                  <div className="text-center">
                    <h2 style={{ color: "white" }}>Talent Challenge</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container">
            <div className="row  ">
              <div className="offset-2 col-lg-8 offset-2  ">
                <div className="">
                  <div className="row">
                    <div className="col-lg-12">
                      {/* progress bar */}

                      <div className="bar">
                        <span className="bar-distance">
                          
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="qiuzh text-center">
                        <h4>
                          How many days per month do you experience this
                          symptoms ?
                        </h4>
                        <div
                          className="btn-group btn-group-lg  mt-5"
                          role="group"
                          aria-label="..."
                        >
                          <button className="btn btn-outline-primary">
                            0 - 2
                          </button>
                          <button className="btn btn-outline-primary">
                            2-10
                          </button>
                          <button className="btn btn-outline-primary">
                            10-20
                          </button>
                          <button className="btn btn-outline-primary">
                            20-30
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="quizbtn mt-5">
                        <NavLink to="/result">
                          <button className="btn btn-primary" id="Quiz-btn">
                            Next
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default Quiz1;
