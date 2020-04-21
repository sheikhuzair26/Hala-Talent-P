import React from 'react'
import { NavLink } from 'react-router-dom';

class S1Section1 extends React.Component{
    render(){
        return(
            <div>
                
<section>
  <div className="container">
    <div className="text-center">
      <h2>SignUp Employer</h2>
      <p>Register now and become the part of outstanding talents pool across the MENA</p>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6">
            <div className="tf">
              <NavLink to='/signup' style={{paddingRight: "195px"}}>Candidate</NavLink>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tf">
              <NavLink to='/signup1' className="tactive">Employer</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6">
            <div className="lf">
              <input type="text" placeholder="First Name" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lf">
              <input type="text" placeholder="Last Name"/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lf">
              <input type="text" placeholder="Email Address"/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lf">
              <input type="text" placeholder="Password"/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lf">
              <input type="text" placeholder="Confirm Password"/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lf">
              <input type="text" placeholder="Phone Number"/>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="lf">
              <input type="text" placeholder="Company Name"/>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="lf">
              <a href="#" className="btn btn-primary">Submit</a>
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

export default S1Section1;