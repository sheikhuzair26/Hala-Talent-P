import React from "react";
import c1 from "../img/cand1.jpeg";
import c2 from "../img/cand2.PNG";
import c3 from "../img/cand3.PNG";
import "../flip.css";

class Section5 extends React.Component {
  render() {
    return (
      <div>
        <section className="text-center my-5 p-1">
          {/* <!-- Section heading --> */}
          <h2 className="h1-responsive font-weight-bold my-5 animated bounce">
            {/* What Our Client Says */}
            Client Testimonials
          </h2>
          {/* <!-- Section description --> */}
          <p className="dark-grey-text w-responsive mx-auto mb-5 animated bounce">
            Don't just listen to us, check out what our clients are saying!
          </p>

          <div className="container ">
            {/* <!-- Grid row --> */}
            <div className="row" >
              {/* <!--Grid column--> */}
              <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                <div className="card-up blue-gradient"></div>

                {/* <!--Card--> */}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={c1}
                        className="rcorners3"
                        alt="Avatar"
                        style={{ width: "300px", height: "300px" }}
                      />
                      {/* <h4>John Doe</h4>   */}
                    </div>
                    <div className="flip-card-back">
                      <br />
                      <br />
                      <center>
                        <h4>
                          <b>Architect & Engineer</b>
                        </h4>
                        <br />
                        <h5>
                          <p>
                            <i className="fa fa-quote-left pr-2"></i> If you
                            aren't using
                            <br /> Hala Talents, you're
                            <br /> missing out, groundbreaking
                            <br /> stuff. I am very pleased.
                          </p>
                        </h5>
                      </center>
                    </div>
                  </div>
                </div>
                {/* <!--Card--> */}
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                <div className="card-up blue-gradient"></div>

                {/* <!--Card--> */}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={c2}
                        className="rcorners3"
                        alt="Avatar"
                        style={{ width: "300px", height: "300px" }}
                      />
                      {/* <h4>John Doe</h4>   */}
                    </div>
                    <div className="flip-card-back">
                      <br />
                      <br />
                      <center>
                        <h4>
                          <b>CEO</b>
                        </h4>
                        <br />
                        <h5>
                          <p>
                            <i className="fa fa-quote-left pr-2"></i>
                            I had multiple candidates
                            <br /> that fit my job description.
                            <br />I was able to fill my open
                            <br /> position quickly!
                          </p>
                        </h5>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                <div className="card-up blue-gradient"></div>

                {/* <!--Card--> */}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={c3}
                        className="rcorners3"
                        alt="Avatar"
                        style={{ width: "300px", height: "300px" }}
                      />
                      {/* <h4>John Doe</h4>   */}
                    </div>
                    <div className="flip-card-back">
                      <br />
                      <br />
                      <center>
                        <h4>
                          <b>Software Engineer</b>
                        </h4>
                        <br />
                        <h5>
                          <p>
                            {" "}
                            <i className="fa fa-quote-left pr-2"></i>
                            After multiple interviews, I
                            <br /> still had no applicants that
                            <br />I felt were worth hiring.
                            <br />
                            Hala Talents helped me
                            <br />
                            find the right candidate
                            <br />
                            within a week!
                          </p>
                        </h5>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
      </div>
    );
  }
}

export default Section5;
