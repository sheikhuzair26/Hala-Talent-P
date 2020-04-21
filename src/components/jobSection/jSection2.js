import React from "react";
import { NavLink } from "react-router-dom";

class JSection2 extends React.Component {
  render() {
    return (
      <div>
        <section className="mem">
          <div className="container">
            <div className="text-center">
              <h2>Membership Plan</h2>
              <p>
                Every employee you hire is an investment. Utilize Hala Talents
                to get the most out of your money. Obtain top-tier talent in
                record time, fill positions, and keep your business running as
                it should.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-4 offset-2">
                    <div className="member center">
                      <h4>Monthly</h4>
                      <h2>$600</h2>
                      {/* <ul>
                <li>10 job posting</li>
                <li>5 Featured job</li>
                <li>Job displayed for 20 days</li>
                <li>Premium Support 24/7</li>
                <li>For Employer</li>
              </ul> */}
                      <NavLink to="/subscriptionForm">Subscribe</NavLink>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="member center">
                      <h4>Yearly</h4>
                      <h2> $1000</h2>
                      <h6
                        style={{
                          color: "white",
                          padding: "0px 10px",
                          textAlign: "center",
                        }}
                      >
                        Save XX% by purchasing an annual subscription.
                      </h6>
                      <NavLink to="/subscriptionForm">Subscribe</NavLink>
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

export default JSection2;
