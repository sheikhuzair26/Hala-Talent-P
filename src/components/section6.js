import React from "react";

class Section6 extends React.Component {
  render() {
    return (
      <div>
        <section className="work1">
          <div className="container">
            <div className="text-center">
              <h2 className="animated bounce">How it Work</h2>
              <p className="animated bounce work-para">
                A smart innovation for job recruitment - Click, Find, Hire, and
                you are all done!
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="work animated bounceInLeft">
                      <i className="fa fa-user"></i>
                      <h2>Create An Acount</h2>
                      <p>
                        Register your account, fill out your
                        <br />
                        details, and select your
                        <br />
                        subscription.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="work animated bounceInLeft">
                          <h2 className="employHd">Employer</h2>
                          <i
                            className="fa fa-user"
                            style={{
                              color: "#0fb76b",
                              backgroundColor: "#d9eeec",
                            }}
                          ></i>
                          <h2>Find The Talent</h2>
                          <p>
                            Browse our AI-powered talent pool and
                            <br />
                            pre-screen applicants it matches to you.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="work animated bounceInLeft">
                          <i
                            className="fa fa-user"
                            style={{
                              color: "#c580ff",
                              backgroundColor: "#ece8fb",
                            }}
                          ></i>
                          <h2>Get Started</h2>
                          <p>
                            Set up your interviews. It's time to
                            <br />
                            hire your new talent!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="work animated bounceInLeft">
                          <h2 className="employHd">Talent</h2>
                          <i
                            className="fa fa-user"
                            style={{
                              color: "#0fb76b",
                              backgroundColor: "#d9eeec",
                            }}
                          ></i>
                          <h2>Pass The Quiz</h2>
                          <p>
                          Pass the quiz and personality test up
                            <br />
                            to atleast 60% or above.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="work animated bounceInLeft">
                          <i
                            className="fa fa-user"
                            style={{
                              color: "#c580ff",
                              backgroundColor: "#ece8fb",
                            }}
                          ></i>
                          <h2>Complete your Profile</h2>
                          <p>
                          Complete your profile and be visible to 
                            <br />
                            employers. It's time to get hired!
                          </p>
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

export default Section6;
