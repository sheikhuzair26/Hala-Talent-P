import React from "react";
import logo from "../img/logo/Logo-02.png";
import { NavLink, withRouter } from "react-router-dom";
import "../../src/style.css";

const HeaderNonAuth = () => {
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
              <li id ="toggleNav" className="nav-item active">
                <NavLink id ="toggleNav"
                  className="nav-link"
                  to="/login"
                  style={{ fontWeight: "600" }}
                >
                  <i className="fa fa-user"></i> Login
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink id ="toggleNav"
                  className="nav-link"
                  to="/signup"
                  style={{ fontWeight: "600"}}
                >
                  <i className="fa fa-lock"></i>Signup
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(HeaderNonAuth);
