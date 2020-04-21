import React from "react";
import finance from "../img/finance.png";
import auto from "../img/auto.png";
import bussiness from "../img/bussiness.png";
import pencil from "../img/pencil.png";
import health from "../img/health.png";
import resturent from "../img/resturent.png";
import global from "../img/global.png";
import telecom from "../img/telecom.png";
import { NavLink } from "react-router-dom";

class Section3 extends React.Component {
  render() {
    return (
      <div className="App">
        <section className="category">
          <div className="container">
            <div className="cate-bg">
              <div className="container">
                <div className="text-center" style={{ paddingTop: "40px" }}>
                  <h2 className="animated swing" style={{ color: "white" }}>
                    Browse By Category
                  </h2>
                  <p className="animated swing" style={{ color: "white" }}>
                    Find the perfect candidate in your industry. Leverage the results in your favor using 
                    <br/>our advanced AI matching system.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-3">
                        <div
                          className="one-four animated fadeInLeft"
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          <div className="cate-in">
                            <img src={finance} alt="finance" />
                            <h2>Professional Services</h2>
                            <p> Candidates 5</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <NavLink
                          to="/signup"
                          style={{ textDecoration: "none" }}
                        >
                          <div className="one-four animated fadeInLeft">
                            <div className="cate-in">
                              <img src={auto} alt="finance" />
                              <h2>Creative</h2>
                              <p>Candidates 5</p>
                            </div>
                          </div>
                        </NavLink>
                      </div>

                      <div className="col-lg-3">
                        <div
                          className="one-four animated fadeInLeft"
                          style={{ paddingBottom: "7px" }}
                        >
                          <div className="cate-in">
                            <img src={bussiness} alt="finance" />
                            <h2>Financial Services</h2>
                            <p>Candidates 4</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-lg-3">
                        <div className="one-four animated fadeInLeft">
                          <div className="cate-in">
                            <img src={pencil} alt="finance" />
                            <h2>Transport & Logistic</h2>
                            <p>Candidates 4</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3">
                        <div className="one-four  animated fadeInRight">
                          <div className="cate-in">
                            <img src={health} alt="finance" />
                            <h2>Consumer</h2>
                            <p>Candidates 2</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="one-four  animated fadeInRight">
                          <div className="cate-in">
                            <img src={resturent} alt="finance" />
                            <h2>Telecoms, Media & Tech</h2>
                            <p>Candidates 9</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="one-four  animated fadeInRight">
                          <div className="cate-in">
                            <img src={global} alt="finance" />
                            <h2>E-commerce</h2>
                            <p>Candidates 3</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="one-four  animated fadeInRight">
                          <div className="cate-in">
                            <img src={telecom} alt="finance" />
                            <h2>Cyber Security</h2>
                            <p>Candidates 2</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 2nd row end */}
                    
                  </div>
                </div>
                <div className="btn-center animated shake">
                  <NavLink to="/login">See All</NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Section3;
