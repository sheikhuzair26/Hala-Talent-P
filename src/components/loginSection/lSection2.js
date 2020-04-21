import React from "react";
import { NavLink, Redirect } from "react-router-dom";
// import axios from 'axios';
import { getToken } from "../../getToken/getToken";
// import NavAuth from '../navAuth';

class LSection2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    getToken().then((data) => {
      //  console.log(data)
      this.setState({
        data: data,
      });
    });
  };
  render() {
    const token = this.state.data;
    if (token) return <Redirect to="/" />;
    return (
      <div>
        <section>
          <div className="container register">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-3 register-left">
                  <img
                    src="https://image.ibb.co/n7oTvU/logo_white.png"
                    alt=""
                  />
                  <h3>Welcome</h3>
                  <p>
                    Select the profile from Talent or Employer, and log in to
                    your account.
                  </p>
                  <NavLink to="/signup">
                    <input type="submit" name="" value="Signup" />
                  </NavLink>
                  <hr />
                  <p style={{ textAlign: "center" }}>New to Hala Talents?</p>
                  <br />
                </div>
                <div className="col-md-9 register-right">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <h3
                        className="register-heading"
                        style={{ fontWeight: "bold" }}
                      >
                        Login
                      </h3>
                      <div className="row register-form">
                        <div className="col-md-12 mt-4">
                          <div className="form-group">
                            <div className="ls">
                              <input
                                type="text"
                                className="form-control"
                                name="email"
                                placeholder="Email *"
                                required
                                value={this.state.email}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="ls mt-4">
                              <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password *"
                                required
                                value={this.state.password}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mt-1 text-center">
                            <NavLink to="/forget">Forget Password ?</NavLink>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="socialLogin">
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-google"></i>
                            <i class="fab fa-linkedin-in"></i>
                          </div>
                          <p className="socialLoginPara">
                            Or Login through one of your <br />
                            Social Media Account
                          </p>
                        </div>
                        <div className="col-md-6 ">
                          <div className="inputBtn-log">
                            <input
                              type="submit"
                              className="btnRegister"
                              value="Login"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default LSection2;
