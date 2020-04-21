import React from "react";
import blog2 from "../../img/blogs/blog2.jpg";
import blog3 from "../../img/blogs/blog3.jpg";
import blog4 from "../../img/blogs/blog4.jpg";
import blog5 from "../../img/blogs/blog5.jpg";
import blog6 from "../../img/blogs/blog6.jpg";
import { NavLink } from "react-router-dom";

class BSection2 extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="row" style={{ alignItems: "baseline" }}>
              <div className="col-lg-12">
                <div className="row" style={{ alignItems: "baseline" }}>
                  <div className="col-lg-4">
                    <div className="emp-sidebar">
                      <div className="emp-date">
                        <h4>Archives</h4>
                        <div className="date-txt">
                          <ul>
                            <li>
                              <input type="checkbox" />
                              <a href="#">October 2019</a>
                            </li>
                            <li>
                              <input type="checkbox" />
                              <a href="#">March 2019</a>
                            </li>
                            <li>
                              <input type="checkbox" />
                              <a href="#">August 2019</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <hr />
                      <div className="emp-date">
                        <h4>Search</h4>
                        <div className="date-txt">
                          <p style={{ fontSize: "14px" }}>
                            Type and Press Enter to Search
                          </p>
                          <input
                            type="text"
                            placeholder="Search"
                            style={{
                              border: "1px solid lightgrey",
                              borderRadius: "3px",
                              paddingLeft: "10px",
                              height: "40px",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="blog-in">
                              <img src={blog2} alt="" />
                              <div className="blog-txt">
                                <h4>Career Advice</h4>
                                <h2>
                                8 Recruitment Strategies to Attract the Best Talent
                                </h2>
                                <p>October 24, 2019 4:03 am </p>
                                <NavLink to="/blog1">Read more</NavLink>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="blog-in ml-5">
                              <img src={blog3} alt="" />
                              <div className="blog-txt">
                                <h4>Career Advice</h4>
                                <h2>
                                	What Kind of Learner Are You? 
                                </h2>
                                <p>October 24, 2019 4:03 am </p>
                                <NavLink to="/blog2">Read more</NavLink>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="blog-in">
                              <img src={blog4} alt="" />
                              <div className="blog-txt">
                                <h4>New Skills</h4>
                                <h2>Mistakes You Might Be Making When Recruiting</h2>
                                <p>October 24, 2019 4:03 am </p>
                                <NavLink to="/blog3">Read more</NavLink>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="blog-in ml-5">
                              <img src={blog5} alt="" />
                              <div className="blog-txt">
                                <h4>Productivity</h4>
                                <h2>5 Ways to Lead Students</h2>
                                <p>October 24, 2019 4:03 am </p>
                                <a href="blog-detail.html">Read more</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="blog-in">
                              <img src={blog6} alt="" />
                              <div className="blog-txt">
                                <h4>Interview Question</h4>
                                <h2>10 Things to Never Say a Job Interview</h2>
                                <p>October 24, 2019 4:03 am </p>
                                <a href="blog-detail.html">Read more</a>
                              </div>
                            </div>
                          </div>
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

export default BSection2;
