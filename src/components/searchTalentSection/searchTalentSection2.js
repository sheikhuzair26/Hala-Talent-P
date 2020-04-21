import React from 'react'
import c1 from '../../img/candidate/candidate1.jpg'
import c2 from '../../img/candidate/candidate2.jpg'
import c3 from '../../img/candidate/candidate3.jpg'
import c5 from '../../img/candidate/candidate5.jpg'
import c6 from '../../img/candidate/candidate6.jpg'
import c7 from '../../img/candidate/candidate7.jpg'
import c8 from '../../img/candidate/candidate8.jpg'
import c9 from '../../img/candidate/candidate9.jpg'
import c11 from '../../img/candidate/candidate11.jpg'
import { NavLink } from 'react-router-dom'

class SearchTalentSection2 extends React.Component{
    render(){
        return(
            <div>
                

 <section>
 	<div class="container">
    <div class="text-center">
      <h2>Hala Talents</h2>
      <p>Find the best talents here now, here you can choose the right one and check his/her details,<br />
       once you see the best match call him/her for an interview for hiring</p>
    </div>
 		<div class="row">
 			<div class="col-lg-4">
 				<div class="emp-sidebar">
           <div class="profile-f">
             <input type="text" placeholder="Search Talent" />
           </div>
 				<div class="emp-date">
 					<h4>Experience</h4>
 					<div class="date-txt">
 						<ul>
 						<li><input type="checkbox" /><a href="#">Less than 1 Year</a></li>
 						<li><input type="checkbox" /><a href="#">1 Year</a></li>
 						<li><input type="checkbox" /><a href="#">1-2 Year</a></li>
 						<li><input type="checkbox" /><a href="#">2-3 Year</a></li>
 						<li><input type="checkbox" /><a href="#">3-4 Year</a></li>
 						<li><input type="checkbox" checked="checked" /><a href="#">All</a></li>
 					</ul>
 					</div>
 				</div>
 				<hr />	
 				<div class="emp-date">
 					<h4>Category</h4>
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
 					<h4>Degree Level</h4>
 					<div class="date-txt">
 						<ul>
 						<li><input type="checkbox" /><a href="#">Certificate</a></li>
 						<li><input type="checkbox" /><a href="#">Diploma</a></li>
 						<li><input type="checkbox" /><a href="#">Associate</a></li>
 						<li><input type="checkbox" /><a href="#">Degree Bachelor</a></li>
                        <li><input type="checkbox" /><a href="#">Master Degree</a></li>
                        <li><input type="checkbox" /><a href="#">Matric</a></li>
 						<li><input type="checkbox" /><a href="#">Associate</a></li>
 					</ul>
 					</div>
 				</div>
        <div class="emp-date">
          <h4>Job Type</h4>
          <div class="date-txt">
            <ul>
            <li><input type="checkbox" /><a href="#">Full Time</a></li>
            <li><input type="checkbox" /><a href="#">Part Time</a></li>
            <li><input type="checkbox" /><a href="#">Contract</a></li>
            <li><input type="checkbox" /><a href="#">Internship</a></li>
            <li><input type="checkbox" /><a href="#">New Grad</a></li>
          </ul>
          </div>
        </div>
        <div class="emp-date">
          <h4>Skills</h4>
          <div class="date-txt">
            <ul>
            <li><input type="checkbox" /><a href="#">Html5</a></li>
            <li><input type="checkbox" /><a href="#">Css3</a></li>
            <li><input type="checkbox" /><a href="#">Bootstrap</a></li>
            <li><input type="checkbox" /><a href="#">Javascript</a></li>
            <li><input type="checkbox" /><a href="#">Jquery</a></li>
            <li><input type="checkbox" /><a href="#">Core Php</a></li>
            <li><input type="checkbox" /><a href="#">Laravel</a></li>
            <li><input type="checkbox" /><a href="#">Codeigniter</a></li>
          </ul>
          </div>
        </div>
        <div class="emp-date">
          <h4>Location</h4>
          <div class="date-txt">
            <ul>
            <li><input type="checkbox" /><a href="#">Karachi</a></li>
            <li><input type="checkbox" /><a href="#">Lahore</a></li>
            <li><input type="checkbox" /><a href="#">Islamabad</a></li>
            <li><input type="checkbox" /><a href="#">Multan</a></li>
            <li><input type="checkbox" /><a href="#">Hyderabad</a></li>
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
                 <NavLink to="/candidateProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <span class="promotepof-badge"><i class="fa fa-star" title="Featured"></i></span>
                    <span class="urgntpkg-candv1">urgent</span>
                    <img src={c1} alt="" />
                    <h4>Wanda Montgomery</h4>
                    <h5>Charted Accountant</h5>
                    <h6>United States</h6>
                    <p>Sector <span>Construction</span></p>
                  </div>
                 </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/candidateProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <img src={c2} alt="" />
                    <h4>Lori Ramos</h4>
                    <h5>Property Agent</h5>
                    <h6>Pakistan</h6>
                     <p>Sector <span>Construction</span></p>
                  </div>
                  </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/candidateProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <img src={c3} alt="" />
                    <h4>Randall Warren</h4>
                    <h5>System Administrator</h5>
                    <h6>united-kingdom</h6>
                     <p>Sector <span>Construction</span></p>
                  </div>
                  </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/candidateProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <img src={c5} alt="" />
                    <h4>Michele Snyder</h4>
                    <h5>Cashier</h5>
                    <h6>united-kingdom</h6>
                     <p>Sector <span>Construction</span></p>
                  </div>
                 </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/candidateProfile" style={{textDecoration: "none"}}>
                     <div class="candidate-grid">
                    <img src={c6} alt="" />
                    <h4>Martha Griffin</h4>
                    <h5>Medical Professed</h5>
                    <h6>united-kingdom</h6>
                     <p>Sector <span>Construction</span></p>
                  </div>
                   </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/candidateProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <img src={c7} alt="" />
                    <span class="careerfy-candidate-grid-status" style={{backgroundColor: "#40d184"}}></span>
                    <h4>Christina Fischer</h4>
                    <h5>Medical Professed</h5>
                    <h6>united-kingdom</h6>
                     <p>Sector <span>Construction</span></p>
                  </div>
                  </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/candidateProfile" style={{textDecoration: "none"}}>
                     <div class="candidate-grid">
                    <img src={c8} alt="" />
                    <span class="careerfy-candidate-grid-status" style={{backgroundColor: "#40d184"}}></span>
                    <h4>Kathleen Moreno</h4>
                    <h5>Marketing Expert</h5>
                    <h6>United States</h6>
                     <p>Sector <span>Construction</span></p>
                  </div>
                   </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/candidateProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <img src={c9} alt="" />
                    <span class="careerfy-candidate-grid-status" style={{backgroundColor: "#40d184"}}></span>
                    <h4>Linda Henderson</h4>
                    <h5>Print Media Designer</h5>
                    <h6>Pakistan</h6>
                     <p>Sector <span>Construction</span></p>
                  </div>
                  </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/candidateProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <img src={c11} alt="" />
                    <span class="careerfy-candidate-grid-status" style={{backgroundColor: "#40d184"}}></span>
                    <h4>Lori Ramos</h4>
                    <h5>Print Media Designer</h5>
                    <h6>Pakistan</h6>
                     <p>Sector <span>Construction</span></p>
                  </div>
                  </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/candidateProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <img src={c1} alt="" />
                    <span class="careerfy-candidate-grid-status" style={{backgroundColor: "#40d184"}}></span>
                    <h4>Lori Ramos</h4>
                    <h5>Print Media Designer</h5>
                    <h6>Pakistan</h6>
                     <p>Sector <span>Construction</span></p>
                  </div>
                  </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/candidateProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <img src={c2} alt="" />
                    {/* <!-- <span class="careerfy-candidate-grid-status" style="background-color: #40d184;"></span> --> */}
                    <h4>Lori Ramos</h4>
                    <h5>Print Media Designer</h5>
                    <h6>Pakistan</h6>
                     <p>Sector <span>Construction</span></p>
                  </div>
                  </NavLink>
                </div>
                <div class="col-lg-4">
                <NavLink to="/candidateProfile" style={{textDecoration: "none"}}>
                    <div class="candidate-grid">
                    <img src={c5} alt="" />
                    {/* <!-- <span class="careerfy-candidate-grid-status" style={{backgroundColor: "#40d184"}}></span> --> */}
                    <h4>Lori Ramos</h4>
                    <h5>Print Media Designer</h5>
                    <h6>Pakistan</h6>
                     <p>Sector <span>Construction</span></p>
                  </div>
                  </NavLink>
                </div>
                <div class="col-lg-12">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                  </nav>
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

export default SearchTalentSection2;