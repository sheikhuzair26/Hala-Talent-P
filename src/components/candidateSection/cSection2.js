import React from "react";
import Candidate1 from "../../img/candidate/candidate1.jpg";
import promoplaced from "../../img//profile/promo-placed.png";
import promoplacee from "../../img/profile/promo-placee.png";
import promoplaceex from "../../img/profile/promo-placeex.png";
import promoplaceexp from "../../img/profile/promo-placeexpertise.png";
import promoplacep from "../../img/profile/promo-placep.png";
import port1 from "../../img/candidate/portfolio/port1.jpg";
import port2 from "../../img/candidate/portfolio/port2.jpg";
import port3 from "../../img/candidate/portfolio/port3.jpg";
import promovideo from "../../img/profile/promo-placev.png";
import promohonor from "../../img/profile/promo-placeh.png";
import promoover from "../../img/profile/promo-placeo.png";
import promoplace2 from "../../img/profile/promo-place2.png";
import { NavLink } from "react-router-dom";

class CSection2 extends React.Component {
  render() {
    return (
      <div>
        <section class="can-proile-page">
          <div class="container">
            <div class="text-center" style={{ paddingBottom: "70px" }}>
              <h2>Hala Talent</h2>
              <p>
                The leading website where you can find the best talents from all
                across the MENA
              </p>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-10"></div>
                  <div class="col-lg-2">
                    <NavLink
                      to="/edit_candidate_profile"
                      class="btn btn-danger"
                      style={{ float: "right" }}
                    >
                      Edit Profile
                    </NavLink>
                    {/* canderegForm */}
                    {/* edit_candidate_profile */}
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="profile-side">
                      <img src={Candidate1} alt="" />
                      <h4>Wanda Montgomery</h4>
                      <h5>Medical Professed</h5>
                      <h5>Sector: Restaurant</h5>
                      <h5>Salary: $13,000.00 / Monthly</h5>
                      <p>(Age: 60 years)</p>
                      <p>Ada Street, London, United Kingdom</p>
                      <span>Member Since, December 4, 2017</span>
                      <ul>
                        <li class="face">
                          <a href="#">
                            <i class="fa fa-facebook-f"></i>
                          </a>
                        </li>
                        <li class="twitt">
                          <a href="#">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li class="link">
                          <a href="#">
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li class="dribb">
                          <a href="#">
                            <i class="fa fa-dribbble"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="profile-view">
                      <p
                        style={{
                          float: "left",
                          color: "black",
                          fontWeight: "600",
                        }}
                      >
                        Profile Views
                      </p>
                      <span style={{ paddingLeft: "170px", fontWeight: "600" }}>
                        10
                      </span>
                    </div>
                    <div class="profile-d">
                      <ul>
                        <li>
                          <a href="#">Schedule Interview</a>
                        </li>
                        <li>
                          <a href="#">Hire Me</a>
                        </li>
                        <li>
                          <a href="#">Download Cv</a>
                        </li>
                        <li>
                          <a href="#">Short List</a>
                        </li>
                      </ul>
                      {/* <!-- <div class="profile-w">
                <a href="#"><i class="fa fa-whatsapp"></i>Whatsapp</a>
              </div> --> */}
                    </div>
                    {/* <!-- <div class="place-pic">
              <img src="assets/img/profile/promo-place2.png" alt="">
            </div> --> */}
                    {/* <!-- <div class="profile-f">
              <h2>Contact Form</h2>
              <input type="text" placeholder="Enter Your Name">
              <input type="text" placeholder="Enter Your Email Address">
              <input type="text" placeholder="Enter Your Phone Number">
              <textarea name="" id="" cols="30" rows="10">Enter Your Message</textarea>
              <button class="btn btn-primary">Send Now</button>
            </div> --> */}
                    {/* <!--  <div class="place-pic">
              <img src="assets/img/profile/promo-place2.png" alt="">
            </div> --> */}
                  </div>
                  <div class="col-lg-8">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="row">
                          <div class="col-lg-4">
                            <div class="profile-r">
                              <i class="fa fa-user"></i>
                              <h4>Academic Level</h4>
                              <p>Associate</p>
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="profile-r">
                              <i class="fa fa-user"></i>
                              <h4>Age</h4>
                              <p>18- 22 Year</p>
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="profile-r">
                              <i class="fa fa-user"></i>
                              <h4>Salary</h4>
                              <p>1850</p>
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="profile-r">
                              <i class="fa fa-user"></i>
                              <h4>Gender</h4>
                              <p>Female</p>
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="profile-r">
                              <i class="fa fa-user"></i>
                              <h4>Industry</h4>
                              <p>Restaurant</p>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="place-pic">
                              <img src={promoplaced} alt="" />
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="profile-r-p">
                              <h4>Description</h4>
                              <p>
                                Hello my name is Ariana Gande Connor and I’m a
                                Financial Supervisor from Netherlands,
                                Rotterdam. In pharetra orci dignissim, blandit
                                mi semper, ultricies diam. Suspendisse malesuada
                                suscipit nunc non volutpat. Sed porta nulla id
                                orci laoreet tempor non consequat enim. Sed
                                vitae aliquam velit. Aliquam ante accumsan ac
                                est.
                              </p>
                              <p>
                                Integer vehicula rhoncus molestie. Morbi ornare
                                ipsum sed sem condimentum, et pulvinar tortor
                                luctus. Suspendisse condimentum lorem ut
                                elementum aliquam. Mauris nec erat ut libero
                                vulputate pulvinar. Aliquam ante erat, blandit
                                at pretium et, accumsan ac est. Integer vehicula
                                rhoncus molestie. Morbi ornare ipsum sed sem
                                condimentum, et pulvinar tortor luctus.
                                Suspendisse condimentum lorem ut elementum
                                aliquam. Mauris nec
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="place-pic">
                              <img src={promovideo} alt="" />
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="pvideo mt-5">
                              <iframe
                                width="100%"
                                height="345"
                                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                              ></iframe>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="place-pic">
                              <img src={promoplacee} alt="" />
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="ph4">
                              <h4>Education</h4>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="profile-education">
                              <span>Walters University</span>
                              <h4>Masters in Fine Arts</h4>
                              <p>
                                Fussy penguin insect additionally wow absolutely
                                crud meretriciously hastily
                                <br />
                                dalmatian a glowered. outside oh arrogantly
                                vehement.
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="profile-education">
                              <span>Glibe University</span>
                              <h4>Tommers College</h4>
                              <p>
                                Fussy penguin insect additionally wow absolutely
                                crud meretriciously hastily
                                <br />
                                dalmatian a glowered. outside oh arrogantly
                                vehement.
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="profile-education">
                              <span>Miles College</span>
                              <h4>Diploma in Fine Arts</h4>
                              <p>
                                Fussy penguin insect additionally wow absolutely
                                crud meretriciously hastily
                                <br />
                                dalmatian a glowered. outside oh arrogantly
                                vehement.
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="place-pic">
                              <img src={promoplaceex} alt="" />
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="ph4">
                              <h4>Experience</h4>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="profile-education">
                              <span>Atract Solutions</span>
                              <h4>Development Manager</h4>
                              <p>
                                Fussy penguin insect additionally wow absolutely
                                crud meretriciously hastily
                                <br />
                                dalmatian a glowered. outside oh arrogantly
                                vehement.
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="profile-education">
                              <span>Barde Workers</span>
                              <h4>Senior Php Developer</h4>
                              <p>
                                Fussy penguin insect additionally wow absolutely
                                crud meretriciously hastily
                                <br />
                                dalmatian a glowered. outside oh arrogantly
                                vehement.
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="profile-education">
                              <span>Miles College</span>
                              <h4>Self Employed Professional</h4>
                              <p>
                                Fussy penguin insect additionally wow absolutely
                                crud meretriciously hastily
                                <br />
                                dalmatian a glowered. outside oh arrogantly
                                vehement.
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="place-pic">
                              <img src={promoplaceexp} alt="" />
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="ph4 mt-5">
                              <h4>Expertise</h4>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="profile-expertise">
                              <p>Sale Product</p>
                            </div>
                            <div class="profile-exp-bar"></div>
                            <div class="profile-expertise">
                              <p>Listening</p>
                            </div>
                            <div
                              class="profile-exp-bar"
                              style={{ width: "80%" }}
                            ></div>
                            <div class="profile-expertise">
                              <p>Business Sense</p>
                            </div>
                            <div
                              class="profile-exp-bar"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                          <div class="col-lg-6">
                            <div class="profile-expertise">
                              <p>Google Seo</p>
                            </div>
                            <div
                              class="profile-exp-bar"
                              style={{ width: "85%" }}
                            ></div>
                            <div class="profile-expertise">
                              <p>Graphic Design</p>
                            </div>
                            <div
                              class="profile-exp-bar"
                              style={{ width: "95%" }}
                            ></div>
                            <div class="profile-expertise">
                              <p>Organizations</p>
                            </div>
                            <div
                              class="profile-exp-bar"
                              style={{ width: "40%" }}
                            ></div>
                          </div>
                          <div class="col-lg-12">
                            <div class="place-pic">
                              <img
                                src="assets/img/profile/promo-placep.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="row">
                              <div class="col-lg-4">
                                <div class="profile-port">
                                  <img
                                    src={port1}
                                    alt="Avatar"
                                    class="image-port"
                                  />
                                  <div class="overlay">
                                    <div class="text">
                                      <i class="fa fa-chain fa-lg"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="profile-port">
                                  <img
                                    src={port2}
                                    alt="Avatar"
                                    class="image-port"
                                  />
                                  <div class="overlay">
                                    <div class="text">
                                      <i class="fa fa-chain fa-lg"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="profile-port">
                                  <img
                                    src={port3}
                                    alt="Avatar"
                                    class="image-port"
                                  />
                                  <div class="overlay">
                                    <div class="text">
                                      <i class="fa fa-chain fa-lg"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="profile-port">
                                  <img
                                    src={port1}
                                    alt="Avatar"
                                    class="image-port"
                                  />
                                  <div class="overlay">
                                    <div class="text">
                                      <i class="fa fa-chain fa-lg"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="profile-port">
                                  <img
                                    src={port2}
                                    alt="Avatar"
                                    class="image-port"
                                  />
                                  <div class="overlay">
                                    <div class="text">
                                      <i class="fa fa-chain fa-lg"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="profile-port">
                                  <img
                                    src={port3}
                                    alt="Avatar"
                                    class="image-port"
                                  />
                                  <div class="overlay">
                                    <div class="text">
                                      <i class="fa fa-chain fa-lg"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="place-pic">
                                  <img src={promohonor} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-lg-12">
                            <div class="ph4">
                              <h4>HONORS & AWARDS</h4>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="profile-education">
                              {/* <!-- <span>Atract Solutions</span> --> */}
                              <h4>Distinguished Service Award</h4>
                              <p>
                                Fussy penguin insect additionally wow absolutely
                                crud meretriciously hastily
                                <br />
                                dalmatian a glowered. outside oh arrogantly
                                vehement.
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="profile-education">
                              {/* <!-- <span>Barde Workers</span> --> */}
                              <h4>Robin Milner Young Researcher Award</h4>
                              <p>
                                Fussy penguin insect additionally wow absolutely
                                crud meretriciously hastily
                                <br />
                                dalmatian a glowered. outside oh arrogantly
                                vehement.
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="profile-education">
                              {/* <!-- <span>Miles College</span> --> */}
                              <h4>Doctoral Dissertation Award</h4>
                              <p>
                                Fussy penguin insect additionally wow absolutely
                                crud meretriciously hastily
                                <br />
                                dalmatian a glowered. outside oh arrogantly
                                vehement.
                              </p>
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

export default CSection2;
