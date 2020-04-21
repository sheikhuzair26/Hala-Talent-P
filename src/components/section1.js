import React from "react";
import { NavLink } from "react-router-dom";
// import video from '../img/video/frontVideo.mp4';
import "../Section1.css";

class Section1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl:
        "https://res.cloudinary.com/sheikhuzair/video/upload/v1586292584/frontVideo_hu0xqm.mp4",
    };
  }
  render() {
    return (
      <div className="App">
        <section className="slider">
          <div className="slider-video">
            <video
              width="100%"
              height="100%"
              muted=""
              autoPlay="auto"
              loop="10000"
              preload="auto"
            >
              <source src={this.state.videoUrl} type="video/mp4" autoPlay="" />
            </video>
          </div>
          <div className="sd-in">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sd-txt animated bounceInDown">
                    <h2 style={{ color: "white" }}>
                      Find, hire and retain the right talents
                      <br /> efficiently and effectively via artificial
                      <br /> intelligence.
                    </h2>
                    <p style={{ color: "#662d91"}}>
                    The right people aren't always where you expect  
                      <br />
                      to find them. Let us bring them to you.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="sd-btn animated bounceInUp">
                    <NavLink to="/about">Discover more</NavLink>
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

export default Section1;
