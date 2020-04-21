import React from "react";

class ASection2 extends React.Component {
  render() {
    return (
      <div className="app">
        <section>
          <div className="container">
            <div className="row">
              <br />
            </div>
            <div className="row text-center">
              <div className="col">
                <div className="counter">
                  <i className="fa fa-code fa-2x"></i>
                  <h2
                    className="timer count-title count-number"
                    data-to="100"
                    data-speed="1500"
                  >
                    100
                  </h2>
                  <p className="count-text ">Jobs</p>
                </div>
              </div>
              <div className="col">
                <div className="counter">
                  <i className="fa fa-coffee fa-2x"></i>
                  <h2
                    className="timer count-title count-number"
                    data-to="1700"
                    data-speed="1500"
                  >
                    1,700
                  </h2>
                  <p className="count-text ">Cv's</p>
                </div>
              </div>
              <div className="col">
                <div className="counter">
                  <i className="fa fa-lightbulb-o fa-2x"></i>
                  <h2
                    className="timer count-title count-number"
                    data-to="11900"
                    data-speed="1500"
                  >
                    11,900
                  </h2>
                  <p className="count-text ">Companies</p>
                </div>
              </div>
              <div className="col">
                <div className="counter">
                  <i className="fa fa-bug fa-2x"></i>
                  <h2
                    className="timer count-title count-number"
                    data-to="157"
                    data-speed="1500"
                  >
                    157
                  </h2>
                  <p className="count-text ">Members</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default ASection2;
