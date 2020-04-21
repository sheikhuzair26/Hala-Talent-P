import React from "react";
import empPrf from "../../img/emp-prf.png";
import proCompany from "../../img/profile/promocompany.png";
import proView from "../../img/profile/promoreview.png";
import proTeam from "../../img/profile/promoteam.png";
import can2 from "../../img/candidate/candidate2.jpg";
import can3 from "../../img/candidate/candidate3.jpg";
import can4 from "../../img/candidate/candidate4.jpg";
import c1 from "../..//img/emp-comment1.jpg";
import c2 from "../..//img/emp-comment2.jpg";
import c3 from "../..//img/emp-comment3.jpg";
import promoPlace2 from "../../img/profile/promo-place2.png";
import { NavLink } from "react-router-dom";

class EmpProSection2 extends React.Component {
  render() {
    return (
      <div>
        <section class="can-proile-page">
          <div class="container">
            <div class="row">
              <div class="col-lg-10"></div>
              <div class="col-lg-2">
                {/* <!-- <a href="edit_employer_profile.html" class="btn btn-danger mb-4" style="float: right;">Edit Profile</a> --> */}
              </div>
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="row mb-5 mt-4">
                      <div class="col-lg-6">
                        <div class="emp-prf">
                          <img src={empPrf} alt="" />
                        </div>
                        <div class="emp-p-txt">
                          <h4>Reliable Movers</h4>
                          <ul>
                            <li>
                              <a href="#">4.8</a>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                          </ul>
                          <span>3 reviews</span>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="emp-p-b">
                          <ul>
                            <li>
                              <NavLink
                                to="/edit_employer_profile"
                                class="btn btn-primary"
                              >
                                <i class="fa fa-edit"></i>Edit Profile
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-10">
                    <div class="row">
                      <div class="col-lg-12">
                        <h4
                          style={{ fontSize: "22px", fontWeight: "600" }}
                          class="mb-4"
                        >
                          Overview
                        </h4>
                        <div class="row">
                          <div class="col-lg-3">
                            <div class="profile-r">
                              <i class="fa fa-user"></i>
                              <h4>Sector</h4>
                              <p>Acounting</p>
                            </div>
                          </div>
                          <div class="col-lg-3">
                            <div class="profile-r">
                              <i class="fa fa-map-marker"></i>
                              <h4>Location</h4>
                              <p>Karachi</p>
                            </div>
                          </div>
                          <div class="col-lg-3">
                            <div class="profile-r">
                              <i class="fa fa-user"></i>
                              <h4>Viewed</h4>
                              <p>637</p>
                            </div>
                          </div>
                          <div class="col-lg-3">
                            <div class="profile-r">
                              <i class="fa fa-user"></i>
                              <h4>Founded Since</h4>
                              <p>1850</p>
                            </div>
                          </div>
                          <div class="col-lg-12 ">
                            <div class="place-pic">
                              <img src={proCompany} alt="" />
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="profile-r-p">
                              <h4>Company Description</h4>
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

export default EmpProSection2;
