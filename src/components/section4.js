import React from "react";
import rating from "../img/employer/sectionRating.jpeg"

class Section4 extends React.Component {
  render() {
    return (
      <div>
        <section className="counter">
          <div className="container-fluid">
            {/* <!--  <div className="text-center">
        <h2 className="animated bounce">HalaTalent</h2>
      </div> --> */}
            <div className="">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-12">
                        {/* <div className="counter-txt animated bounceInLeft">
                          <h2>$50+ Million</h2>
                          <p>In Posted Projects</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="counter-txt  animated bounceInLeft">
                          <h2>1,000+ Companies</h2>
                          <p>In Posted Projects</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div
                          className="counter-txt  animated bounceInLeft"
                          style={{ float: "right" }}
                        >
                          <h2>4.8 Rating</h2>
                          <p>Average Rating out of 5 stars</p>
                        </div> */}
                        <img  className="img-fluid ratingPic" src={rating} alt ="rating"/>
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

export default Section4;
