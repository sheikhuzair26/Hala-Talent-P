import React from "react";
import logo from "../img/logo/Logo-01.png";
import { NavLink, withRouter, Redirect } from "react-router-dom";
import { getToken } from "../getToken/getToken";

class HeaderAuth extends React.Component {
  handlleClick = () => {
    getToken()
      .then((res) => {
        return res.data === null;
        //console.log(res);
      })
      .catch((err) => console.log(err));
  };
  render() {
    // console.log(data);
    return (
      <div className="App">
        {/* <!-- Navigation --> */}
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <!-- <div className="container-fluid"> --> */}
            <NavLink className="navbar-brand animated bounceInLeft" to="/">
              <img src={logo} width="170px;" alt="" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse animated bounceInRight"
              id="navbarResponsive"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a
                    onClick={this.handlleClick}
                    className="nav-link"
                    style={{ color: "black" }}
                  >
                    <i className="fa fa-user"></i> Logout
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default withRouter(HeaderAuth);
