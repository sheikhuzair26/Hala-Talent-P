import React from "react";
import { NavLink } from "react-router-dom";
import "../Section2.css";

class Section2 extends React.Component {
  render() {
    return (
      <div>
        <section className="emp-can">
          <div className="container-fluid">
            <div className="text-center">
              <h2 className="animated bounce section-heading">
                A Smart Innovation for Job Recruitment
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="cm">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="emp animated bounceInLeft">
                        <div className="emp-txt">
                          <h2>I'm an Employer</h2>
                          <p>
                            Find the right talents in your field,
                            <br />
                            create your account to get started today!
                          </p>
                          <NavLink to="/signup">CREATE ACCOUNT</NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="can animated bounceInRight">
                        <div className="can-txt">
                          <h2>I'm a Talent</h2>
                          <p>
                          Find a rewarding career that aligns with your
                          <br/> skill level and values. Sign up today!
                          </p>
                          <NavLink to="/signup1">SIGN UP</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Section2;
