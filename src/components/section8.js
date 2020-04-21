import React from 'react'
import { NavLink } from 'react-router-dom';

class Section8 extends React.Component{
    render(){
        return(
            <div>
                
  <section className="get-start">
    <div className="container-fluid">
      <div className="get">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-8">
                  <div className="get-txt">
                    <h2 className="animated bounceInLeft">START BUILDING <span>OUR OWN JOB BOARD NOW</span></h2>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="get-btn animated bounceInRight">
                    <NavLink to="/signup">Get Started</NavLink>
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
        )
    }
}

export default Section8;