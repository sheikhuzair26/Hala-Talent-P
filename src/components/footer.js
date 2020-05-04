import React from 'react'
import { NavLink } from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
            <div>
                 <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-3 col-sm-6 ">
              <div className="foot-nav animated bounceInDown">
                <h2>Quick Links</h2>
                <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
                  <li><NavLink to="/faq">Faqs</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 ">
              <div className="foot-nav animated bounceInDown">
                <h2>For Talent</h2>
                <ul>
                <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
                  <li><NavLink to="/blogs">Blogs</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 ">
              <div className="foot-nav animated bounceInDown">
                <h2>For Employer</h2>
                <ul>
                <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
                  <li><NavLink to="/faq">Faqs</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 ">
              <div className="foot-nav animated bounceInDown">
                <h2>Social Links</h2>
               <ul>
                 <li><NavLink to="#">Facebook </NavLink></li>
                 <li><NavLink to="#">Twitter </NavLink></li>
                 <li><NavLink to="#">Pinterest </NavLink></li>
                 <li><NavLink to="#">Linkedin </NavLink></li>
                 <li><NavLink to="#">Instagram </NavLink></li>
               </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-12">
          <div className="foot-b animated bounceInDown">
            <hr />
            <NavLink to="#">All Right Reserved @4Strokes 2020</NavLink>
          </div>
        </div> */}
      </div>
    </div>
  </footer>
            </div>
        )
    }
}

export default Footer;