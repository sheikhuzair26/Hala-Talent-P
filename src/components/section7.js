import React from "react";
import blog1 from "../img/blog1.jpg";
import blog2 from "../img/blog2.jpg";
import blog3 from "../img/blog3.jpg";
import { NavLink } from "react-router-dom";

class Section7 extends React.Component {
  render() {
    return (
      <div>
        <section className="blog">
          <div className="container">
            <div className="text-center">
              <h2 className="animated bounce">Blog's</h2>
            </div>
            <div className="row" style={{ alignItems: "baseline" }}>
              <div className="col-lg-12">
                <div className="row" style={{ alignItems: "baseline" }}>
                  <div className="col-lg-4">
                    <div className="one-third animated bounceInDown">
                      <img
                        src={blog1}
                        width="100%"
                        className="img-responsive"
                        alt=""
                      />
                      <span>IT Contractor</span>
                      <h2>
                        8 Recruitment Strategies to Attract the Best Talent!
                      </h2>
                      <p>
                        Implementing these 8 recruitment strategies will help
                        you attract and hire the best talent. The current job
                        market is hugely competitive. A strong and planned
                        recruitment strategy can help you stand out from this
                        competition.{" "}
                      </p>
                      <NavLink to="/blog1" style={{ textDecoration: "none" }}>
                        READ MORE
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="one-third animated bounceInDown">
                      <img
                        src={blog2}
                        width="100%"
                        className="img-responsive"
                        alt=""
                      />
                      <span>Acountancy</span>
                      <h2>What Kind of Learner Are You?</h2>
                      <p>
                        Were you an A student at school? Or did you find
                        yourself distracted at every opportunity? Understanding
                        your learning style is the key to ensuring that the work
                        you put in is useful and worthwhile.
                      </p>
                      <NavLink to="/blog2" style={{ textDecoration: "none" }}>
                        READ MORE
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="one-third animated bounceInDown">
                      <img
                        src={blog3}
                        width="100%"
                        className="img-responsive"
                        alt=""
                      />
                      <span>Charity & Voluntary</span>
                      <h2>Mistakes You Might Be Making When Recruiting</h2>
                      <p>
                        Hiring quality talent is the key to a successful
                        business, yet hiring new employees can be time-consuming
                        and sophisticated and can often lead to the wrong person
                        being hired. We have put together a list of some of the
                        mistakes you might be making when recruiting.
                      </p>
                      <NavLink to="/blog3" style={{ textDecoration: "none" }}>
                        READ MORE
                      </NavLink>
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

export default Section7;
