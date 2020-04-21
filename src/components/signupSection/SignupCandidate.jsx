import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const SignupCandidate = () => {
  return (
    <div>
      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>
              I acknowledge that the Hala Talents screening process is
              confidential and that I will not publicly disclose details about
              this process.
              <hr />
              By submitting you acknowledge that you have read and agree to our
              Terms and Conditions, Privacy Policy.{" "}
            </p>

            <NavLink to="/login">
              <input type="submit" name="" value="Login" />
            </NavLink>
            <hr />
            <p style={{ textAlign: "center" }}>Already a member?</p>
          </div>
          <div className="col-md-9 register-right">
            <ul
              className="nav nav-tabs nav-justified"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Talent
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Employer
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Apply as an Employer</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="ls">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name *"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="ls">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name *"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="ls">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password *"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="ls">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password *"
                          value=""
                        />
                      </div>
                    </div>
                    {/* <!-- <div className="form-group">
                              <div className="maxl">
                                    <label className="radio inline"> 
                                      <input type="radio" name="gender" value="male" checked>
                                      <span> Male </span> 
                                  </label>
                                  <label className="radio inline"> 
                                      <input type="radio" name="gender" value="female">
                                      <span>Female </span> 
                                  </label>
                              </div>
                          </div> --> */}
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="ls">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email *"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="ls">
                        <input
                          type="text"
                          minlength="10"
                          maxlength="10"
                          name="txtEmpPhone"
                          className="form-control"
                          placeholder="Your Phone *"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="ls">
                        <input type="text" placeholder="Company" />
                      </div>
                    </div>

                    {/* <div className="form-group">
                        <div className="ls">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Answer *"
                            value=""
                          />
                        </div>
                      </div> */}
                    <NavLink to="/jobPackage">
                      <button
                        type="submit"
                        className="btnRegister"
                        value="Register"
                      >
                        Submit
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="row ">
                  <div
                    className="col-md-6"
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                  </div>
                  <div className="col-md-6">
                    <p className="socialPara">
                      Or Signup through one of your <br />
                      Social Media Account
                    </p>
                    <div className="social">
                      <i class="fab fa-facebook-square"></i>
                      <i class="fab fa-google"></i>
                      <i class="fab fa-linkedin-in"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade show active"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <h3 className="register-heading">Apply as a Talent</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="ls">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name *"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="ls">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name *"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="ls">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email *"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="ls">
                        <input
                          type="text"
                          maxlength="10"
                          minlength="10"
                          className="form-control"
                          placeholder="Phone *"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="ls">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password *"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="ls">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password *"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="ls">
                        <select className="form-control">
                          <option className="hidden" selected disabled>
                            Select Category
                          </option>
                          <option>Softwere & ITDevelopment</option>
                          <option>Agriculture</option>
                          <option>Acountant</option>
                        </select>
                      </div>
                    </div>
                    {/* <div className="form-group">
                        <div className="ls">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="`Answer *"
                            value=""
                          />
                        </div>
                      </div> */}
                    <NavLink to="/quiz">
                      <button
                        type="submit"
                        className="btnRegister"
                        value="Register"
                      >
                        Submit
                      </button>
                    </NavLink>
                  </div>
                </div>
                {/* Social Talent */}
                <div className="row ">
                  <div
                    className="col-md-6"
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  ></div>

                  <div className="col-md-6">
                    <p className="socialPara">
                      Or Signup through one of your <br />
                      Social Media Account
                    </p>

                    <div className="social">
                      <i class="fab fa-facebook-square"></i>
                      <i class="fab fa-google"></i>
                      <i class="fab fa-linkedin-in"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCandidate;
