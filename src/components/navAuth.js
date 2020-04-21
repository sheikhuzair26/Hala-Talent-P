import React from "react";
import { NavLink } from "react-router-dom";
import "../NavList.css";

const NavAuth = () => {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="col-lg-12">
            <div className="n-p">
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="bottom-nav " id="BottomNavList">
                    {/*  /employer */}
                    <ul className="nav-list">
                      <li className="">
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/candidate">Employer</NavLink>
                      </li>
                      <li>
                        <NavLink to="/candidateProfile">Talent</NavLink>
                      </li>
                      <li>
                        <NavLink to="/jobPackage">Pricing</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blogs">Blog's</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about">About</NavLink>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Contact
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <NavLink className="dropdown-item" to="/contact">
                            Contact Us
                          </NavLink>
                          <NavLink className="dropdown-item" to="/faq">
                            Faqs
                          </NavLink>
                          <NavLink className="dropdown-item" to="/privacy">
                            Privacy Policy
                          </NavLink>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavAuth;
