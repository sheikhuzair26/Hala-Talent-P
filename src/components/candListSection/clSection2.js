import React from "react";
import cand1 from "../../img/candidate/candidate1.jpg";
import cand2 from "../../img/candidate/candidate2.jpg";
import cand3 from "../../img/candidate/candidate3.jpg";
import cand4 from "../../img/candidate/candidate4.jpg";
import cand5 from "../../img/candidate/candidate5.jpg";
import cand6 from "../../img/candidate/candidate6.jpg";
import cand7 from "../../img/candidate/candidate7.jpg";
import cand8 from "../../img/candidate/candidate8.jpg";
import cand9 from "../../img/candidate/candidate9.jpg";
import cand11 from "../../img/candidate/candidate11.jpg";
import { NavLink } from "react-router-dom";

class CandSection2 extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="text-center">
              <h2>Hala Talents</h2>
              <p>
                Find the best talents here now, here you can choose the right
                one and check his/her details,
                <br />
                once you see the best match call him/her for an interview for
                hiring
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="emp-sidebar">
                  <div className="emp-date">
                    <h4>Date Posted</h4>
                    <div className="date-txt">
                      <ul>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Last Hour</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Last 24 Hour</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Last 7 Days</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Last 14 Days</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Last 17 Days</a>
                        </li>
                        <li>
                          <input type="checkbox" checked="checked" />
                          <a href="#">All</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <div className="emp-date">
                    <h4>Sector</h4>
                    <div className="date-txt">
                      <ul>
                        <li>
                          <input type="checkbox" />
                          <a href="#">3d Designing</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Acounting Finance</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Automotive</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Construction</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Education</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Health Care</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <div className="emp-date">
                    <h4>Academic Level</h4>
                    <div className="date-txt">
                      <ul>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Certificate</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Diploma</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Associate</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Degree Bachelor</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Master Degree</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Associate</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="emp-date">
                    <h4>Gender</h4>
                    <div className="date-txt">
                      <ul>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Male</a>
                        </li>
                        <li>
                          <input type="checkbox" />
                          <a href="#">Female</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="emp-jobs">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-4">
                          <NavLink
                            to="/employerProfile"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="candidate-grid">
                              <span className="promotepof-badge">
                                <i className="fa fa-star" title="Featured"></i>
                              </span>
                              <span className="urgntpkg-candv1">urgent</span>
                              <img src={cand1} alt="" />
                              <h4>Wanda Montgomery</h4>
                              <h5>Charted Accountant</h5>
                              <h6>United States</h6>
                              <p>
                                Sector <span>Construction</span>
                              </p>
                            </div>
                          </NavLink>
                        </div>
                        <div className="col-lg-4">
                          <a
                            href="candidate_profile.html"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="candidate-grid">
                              <img src={cand2} alt="" />
                              <h4>Lori Ramos</h4>
                              <h5>Property Agent</h5>
                              <h6>Pakistan</h6>
                              <p>
                                Sector <span>Construction</span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-4">
                          <a
                            href="candidate_profile.html"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="candidate-grid">
                              <img src={cand3} alt="" />
                              <h4>Randall Warren</h4>
                              <h5>System Administrator</h5>
                              <h6>united-kingdom</h6>
                              <p>
                                Sector <span>Construction</span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-4">
                          <a
                            href="candidate_profile.html"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="candidate-grid">
                              <img src={cand5} alt="" />
                              <h4>Michele Snyder</h4>
                              <h5>Cashier</h5>
                              <h6>united-kingdom</h6>
                              <p>
                                Sector <span>Construction</span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-4">
                          <a
                            href="candidate_profile.html"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="candidate-grid">
                              <img src={cand6} alt="" />
                              <h4>Martha Griffin</h4>
                              <h5>Medical Professed</h5>
                              <h6>united-kingdom</h6>
                              <p>
                                Sector <span>Construction</span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-4">
                          <a
                            href="candidate_profile.html"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="candidate-grid">
                              <img src={cand7} alt="" />
                              <span
                                className="careerfy-candidate-grid-status"
                                style={{ backgroundColor: "#40d184" }}
                              ></span>
                              <h4>Christina Fischer</h4>
                              <h5>Medical Professed</h5>
                              <h6>united-kingdom</h6>
                              <p>
                                Sector <span>Construction</span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-4">
                          <a
                            href="candidate_profile.html"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="candidate-grid">
                              <img src={cand8} alt="" />
                              <span
                                className="careerfy-candidate-grid-status"
                                style={{ backgroundColor: "#40d184" }}
                              ></span>
                              <h4>Kathleen Moreno</h4>
                              <h5>Marketing Expert</h5>
                              <h6>United States</h6>
                              <p>
                                Sector <span>Construction</span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-4">
                          <a
                            href="candidate_profile.html"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="candidate-grid">
                              <img src={cand9} alt="" />
                              <span
                                className="careerfy-candidate-grid-status"
                                style={{ backgroundColor: "#40d184" }}
                              ></span>
                              <h4>Linda Henderson</h4>
                              <h5>Print Media Designer</h5>
                              <h6>Pakistan</h6>
                              <p>
                                Sector <span>Construction</span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-4">
                          <a
                            href="candidate_profile.html"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="candidate-grid">
                              <img src={cand11} alt="" />
                              <span
                                className="careerfy-candidate-grid-status"
                                style={{ backgroundColor: "#40d184" }}
                              ></span>
                              <h4>Lori Ramos</h4>
                              <h5>Print Media Designer</h5>
                              <h6>Pakistan</h6>
                              <p>
                                Sector <span>Construction</span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-4">
                          <a
                            href="candidate_profile.html"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="candidate-grid">
                              <img src={cand1} alt="" />
                              <span
                                className="careerfy-candidate-grid-status"
                                style={{ backgroundColor: "#40d184" }}
                              ></span>
                              <h4>Lori Ramos</h4>
                              <h5>Print Media Designer</h5>
                              <h6>Pakistan</h6>
                              <p>
                                Sector <span>Construction</span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-4">
                          <a
                            href="candidate_profile.html"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="candidate-grid">
                              <img src={cand2} alt="" />
                              {/* <!-- <span className="careerfy-candidate-grid-status" style="background-color: #40d184;"></span> --> */}
                              <h4>Lori Ramos</h4>
                              <h5>Print Media Designer</h5>
                              <h6>Pakistan</h6>
                              <p>
                                Sector <span>Construction</span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-4">
                          <a
                            href="candidate_profile.html"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="candidate-grid">
                              <img src={cand5} alt="" />
                              {/* <!-- <span className="careerfy-candidate-grid-status" style="background-color: #40d184;"></span> --> */}
                              <h4>Lori Ramos</h4>
                              <h5>Print Media Designer</h5>
                              <h6>Pakistan</h6>
                              <p>
                                Sector <span>Construction</span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-12">
                          <nav aria-label="Page navigation example">
                            <ul className="pagination">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  Previous
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  Next
                                </a>
                              </li>
                            </ul>
                          </nav>
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

export default CandSection2;
