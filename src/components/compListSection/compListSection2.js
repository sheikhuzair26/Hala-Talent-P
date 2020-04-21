import React from 'react'
import i1 from '../../img/emp-prf.png'
import i2 from '../../img/apple.png'
import i3 from '../../img/dawlence.png'
import { NavLink } from 'react-router-dom'

class CompListSection2 extends React.Component{
    render(){
        return(
            <div>
<section>
 	<div class="container">
    <div class="text-center">
      <h2>Company Listing</h2>
      <p>Find the best talents here now, here you can choose the right one and check his/her details,<br />
       once you see the best match call him/her for an interview for hiring</p>
    </div>
 		<div class="row">
 			<div class="col-lg-4">
 				<div class="emp-sidebar">
 				<div class="emp-date">
 					<h4>Date Posted</h4>
 					<div class="date-txt">
 						<ul>
 						<li><input type="checkbox" /><a href="#">Last Hour</a></li>
 						<li><input type="checkbox" /><a href="#">Last 24 Hour</a></li>
 						<li><input type="checkbox" /><a href="#">Last 7 Days</a></li>
 						<li><input type="checkbox" /><a href="#">Last 14 Days</a></li>
 						<li><input type="checkbox" /><a href="#">Last 17 Days</a></li>
 						<li><input type="checkbox" checked="checked" /><a href="#">All</a></li>
 					</ul>
 					</div>
 				</div>
 				<hr />	
 				<div class="emp-date">
 					<h4>Sector</h4>
 					<div class="date-txt">
 						<ul>
 						<li><input type="checkbox" /><a href="#">3d Designing</a></li>
 						<li><input type="checkbox" /><a href="#">Acounting Finance</a></li>
 						<li><input type="checkbox" /><a href="#">Automotive</a></li>
 						<li><input type="checkbox" /><a href="#">Construction</a></li>
 						<li><input type="checkbox" /><a href="#">Education</a></li>
 						<li><input type="checkbox" /><a href="#">Health Care</a></li>
 					</ul>
 					</div>
 				</div>
 				<hr />	
 				<div class="emp-date">
 					<h4>Academic Level</h4>
 					<div class="date-txt">
 						<ul>
 						<li><input type="checkbox" /><a href="#">Certificate</a></li>
 						<li><input type="checkbox" /><a href="#">Diploma</a></li>
 						<li><input type="checkbox" /><a href="#">Associate</a></li>
 						<li><input type="checkbox" /><a href="#">Degree Bachelor</a></li>
 						<li><input type="checkbox" /><a href="#">Master Degree</a></li>
 						<li><input type="checkbox" /><a href="#">Associate</a></li>
 					</ul>
 					</div>
 				</div>
         <div class="emp-date">
          <h4>Gender</h4>
          <div class="date-txt">
            <ul>
            <li><input type="checkbox" /><a href="#">Male</a></li>
            <li><input type="checkbox" /><a href="#">Female</a></li>
          </ul>
          </div>
        </div>
 			</div>
 			</div>
      <div class="col-lg-8">
        <div class="emp-jobs">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-4">
                 <NavLink to="/employerProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <span class="promotepof-badge"><i class="fa fa-star" title="Featured"></i></span>
                    <span class="urgntpkg-candv1">urgent</span>
                    <img src={i1} alt="" />
                    <h4>Relaible Movers</h4>
                    <h5>Charted Accountant</h5>
                    <h6>United States</h6>
                    {/* <!-- <p>Sector <span>Construction</span></p> --> */}
                  </div>
                 </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/employerProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <img src={i2} alt="" />
                    <h4>Apple</h4>
                    <h5>Mobile & Accessories</h5>
                    <h6>America</h6>
                     {/* <!-- <p>Sector <span>Construction</span></p> --> */}
                  </div>
                  </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/employerProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <img src={i3} alt="" />
                    <h4>Dawlence</h4>
                    <h5>Electronics</h5>
                    <h6>united-kingdom</h6>
                     {/* <!-- <p>Sector <span>Construction</span></p> --> */}
                  </div>
                  </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/employerProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <img src={i3} alt="" />
                    <h4>Dawlence</h4>
                    <h5>Electronics</h5>
                    <h6>united-kingdom</h6>
                     {/* <!-- <p>Sector <span>Construction</span></p> --> */}
                  </div>
                  </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/employerProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <img src={i2} alt="" />
                    <h4>Apple</h4>
                    <h5>Mobile & Accessories</h5>
                    <h6>America</h6>
                     {/* <!-- <p>Sector <span>Construction</span></p> --> */}
                  </div>
                  </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/employerProfile" style={{textDecoration: "none"}}>
                     <div class="candidate-grid">
                     <span class="promotepof-badge"><i class="fa fa-star" title="Featured"></i></span>
                     <span class="urgntpkg-candv1">urgent</span>
                     <img src={i1} alt="" />
                     <h4>Relaible Movers</h4>
                     <h5>Charted Accountant</h5>
                     <h6>United States</h6>
                     {/* <!-- <p>Sector <span>Construction</span></p> --> */}
                   </div>
                  </NavLink>
                 </div>
                <div class="col-lg-4">
                <NavLink to="/employerProfile" style={{textDecoration: "none"}}>
                     <div class="candidate-grid">
                     <span class="promotepof-badge"><i class="fa fa-star" title="Featured"></i></span>
                     <span class="urgntpkg-candv1">urgent</span>
                     <img src={i1} alt="" />
                     <h4>Relaible Movers</h4>
                     <h5>Charted Accountant</h5>
                     <h6>United States</h6>
                     {/* <!-- <p>Sector <span>Construction</span></p> --> */}
                   </div>
                  </NavLink>
                 </div>
                 <div class="col-lg-4">
                 <NavLink to="/employerProfile" style={{textDecoration: "none"}}>
                     <div class="candidate-grid">
                     <img src={i2} alt="" />
                     <h4>Apple</h4>
                     <h5>Mobile & Accessories</h5>
                     <h6>America</h6>
                      {/* <!-- <p>Sector <span>Construction</span></p> --> */}
                   </div>
                   </NavLink>
                 </div>
                 <div class="col-lg-4">
                 <NavLink to="/employerProfile" style={{textDecoration: "none"}}>
                     <div class="candidate-grid">
                     <img src={i3} alt="" />
                     <h4>Dawlence</h4>
                     <h5>Electronics</h5>
                     <h6>united-kingdom</h6>
                      {/* <!-- <p>Sector <span>Construction</span></p> --> */}
                   </div>
                   </NavLink>
                 </div>
                 <div class="col-lg-4">
                 <NavLink to="/employerProfile" style={{textDecoration: "none"}}>
                   <div class="candidate-grid">
                   <img src={i3} alt="" />
                   <h4>Dawlence</h4>
                   <h5>Electronics</h5>
                   <h6>united-kingdom</h6>
                    {/* <!-- <p>Sector <span>Construction</span></p> --> */}
                 </div>
                 </NavLink>
               </div>
               <div class="col-lg-4">
               <NavLink to="/employerProfile" style={{textDecoration: "none"}}>
                   <div class="candidate-grid">
                   <img src={i2} alt="" />
                   <h4>Apple</h4>
                   <h5>Mobile & Accessories</h5>
                   <h6>America</h6>
                    {/* <!-- <p>Sector <span>Construction</span></p> --> */}
                 </div>
                 </NavLink>
               </div>
               <div class="col-lg-4">
               <NavLink to="/employerProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <span class="promotepof-badge"><i class="fa fa-star" title="Featured"></i></span>
                    <span class="urgntpkg-candv1">urgent</span>
                    <img src={i1} alt="" />
                    <h4>Relaible Movers</h4>
                    <h5>Charted Accountant</h5>
                    <h6>United States</h6>
                    {/* <!-- <p>Sector <span>Construction</span></p> --> */}
                  </div>
                 </NavLink>
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

export default CompListSection2;