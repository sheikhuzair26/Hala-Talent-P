import React from 'react'

class ESection2 extends React.Component{
    render(){
        return(
            <div>
                <section>
 <div className="container">
    <div className="text-center">
      <h2>Employer</h2>
      <p>Find the best talents here now, here you can choose the right one<br />
       and check his/her details, once you see the best match call him/her for an interview for hiring.</p>
    </div>
 		<div className="row">
 			<div className="col-lg-4">
 				<div className="emp-sidebar">
 					<h4 style={{fontSize: "24px", fontWeight: "700"}}>Location</h4>
 					<div className="emp-sel">
 						<h5>Country</h5>
 						<select name="" id="">
 							<option value="">Pakistan</option>
 							<option value="">America</option>
 							<option value="">Saudia Arabia</option>
 							<option value="">Turky</option>
 						</select>
 					</div>
 					<div className="emp-sel">
 						<h5>State</h5>
 						<select name="" id="">
 							<option value="">Sindh</option>
 							<option value="">Punjab</option>
 							<option value="">Balochistan</option>
 							<option value="">Azad Kashmir</option>
 							<option value="">Kpk</option>
 						</select>
 					</div>
 					<div className="emp-sel">
 						<h5>City</h5>
 						<select name="" id="">
 							<option value="">Karachi</option>
 							<option value="">Lahore</option>
 							<option value="">Islamabad</option>
 							<option value="">Peshawar</option>
 							<option value="">Multan</option>
 						</select>
 					</div>
 					<div className="side-btn">
 						<a href="#">Submit</a>
 					</div>
 				
 				<hr />	
 				<div className="emp-date">
 					<h4>Date Posted</h4>
 					<div className="date-txt">
 						<ul>
 						<li><input type="checkbox" /><a href="#">Last Hour</a></li>
 						<li><input type="checkbox" /><a href="#">Last 24 Hour</a></li>
 						<li><input type="checkbox" /><a href="#">Last 7 Days</a></li>
 						<li><input type="checkbox" /><a href="#">Last 14 Days</a></li>
 						<li><input type="checkbox" /><a href="#">Last 17 Days</a></li>
 						<li><input type="checkbox" checked="" /><a href="#">All</a></li>
 					</ul>
 					</div>
 				</div>
 				<hr />	
 				<div className="emp-date">
 					<h4>Sector</h4>
 					<div className="date-txt">
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
 				{/* <!-- <div className="emp-date">
 					<h4>Team Size</h4>
 					<div className="date-txt">
 						<ul>
 						<li><input type="checkbox"><a href="#">1-100 Member</a></li>
 						<li><input type="checkbox"><a href="#">101-200 Member</a></li>
 						<li><input type="checkbox"><a href="#">201-300 Member</a></li>
 						<li><input type="checkbox"><a href="#">301-400 Member</a></li>
 						<li><input type="checkbox"><a href="#">401-500 Member</a></li>
 						<li><input type="checkbox"><a href="#">501-600 Member</a></li>
 					</ul>
 					</div>
 				</div> --> */}
 			</div>
 			</div>
 	
 			<div className="col-lg-8">
 				<div className="emp-jobs">
 					<div className="row">
 						<div className="col-lg-12">
 							<a href="employer_profile.html" style={{textDecoration: "none"}}>
                <div className="job-in">
                <div className="job-left">
                  <h2>Front End Development</h2>
                  <ul>
                    <li className="active"><a href="#"><i className="fa fa-dropbox"></i>Facebook, Inc</a></li>
                    <li><a href="#"><i className="fa fa-globe"></i>Western City</a></li>
                  </ul>
                  <div className="rating">
                    <ul>
                      <li><a href="#"><i className="fa fa-star"></i></a></li>
                      <li><a href="#"><i className="fa fa-star"></i></a></li>
                      <li><a href="#"><i className="fa fa-star"></i></a></li>
                      <li><a href="#"><i className="fa fa-star"></i></a></li>
                      <li><a href="#"><i className="fa fa-star-half"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="job-right">
                  <ul>
                    <li><a href="#"><i className="fa fa-heart"></i>Apply Now</a></li>
                  </ul>
                  {/* <!-- <a href="#"><i className="fa fa-heart"></i>Apply Now</a> --> */}
                </div>
              </div>      
              </a>
 						</div>
 						<div className="col-lg-12">
 							<div className="job-in">
 								<div className="job-left">
 									<h2>Full Stack Developer</h2>
 									<ul>
 										<li className="active"><a href="#"><i className="fa fa-dropbox"></i>Google, Inc</a></li>
 										<li><a href="#"><i className="fa fa-globe"></i>Western City</a></li>
 									</ul>
 									<div className="rating">
 										<ul>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star-half"></i></a></li>
 										</ul>
 									</div>
 								</div>
 								<div className="job-right">
 									<ul>
 										<li><a href="#"><i className="fa fa-heart"></i>Apply Now</a></li>
 									</ul>
 									{/* <!-- <a href="#"><i className="fa fa-heart"></i>Apply Now</a> --> */}
 								</div>
 							</div>
 						</div>
 						<div className="col-lg-12">
 							<div className="job-in">
 								<div className="job-left">
 									<h2>Open Source Developer</h2>
 									<ul>
 										<li className="active"><a href="#"><i className="fa fa-dropbox"></i>NewYorktime, Inc</a></li>
 										<li><a href="#"><i className="fa fa-globe"></i>Western City</a></li>
 									</ul>
 									<div className="rating">
 										<ul>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star-half"></i></a></li>
 										</ul>
 									</div>
 								</div>
 								<div className="job-right">
 									<ul>
 										<li><a href="#"><i className="fa fa-heart"></i>Apply Now</a></li>
 									</ul>
 									{/* <!-- <a href="#"><i className="fa fa-heart"></i>Apply Now</a> --> */}
 								</div>
 							</div>
 						</div>
 						<div className="col-lg-12">
 							<div className="job-in">
 								<div className="job-left">
 									<h2>Raect Developer</h2>
 									<ul>
 										<li className="active"><a href="#"><i className="fa fa-dropbox"></i>NewYorktime, Inc</a></li>
 										<li><a href="#"><i className="fa fa-globe"></i>Western City</a></li>
 									</ul>
 									<div className="rating">
 										<ul>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star-half"></i></a></li>
 										</ul>
 									</div>
 								</div>
 								<div className="job-right">
 									<ul>
 										<li><a href="#"><i className="fa fa-heart"></i>Apply Now</a></li>
 									</ul>
 									{/* <!-- <a href="#"><i className="fa fa-heart"></i>Apply Now</a> --> */}
 								</div>
 							</div>
 						</div>
 						<div className="col-lg-12">
 							<div className="job-in">
 								<div className="job-left">
 									<h2>Back end Developer</h2>
 									<ul>
 										<li className="active"><a href="#"><i className="fa fa-dropbox"></i>NewYorktime, Inc</a></li>
 										<li><a href="#"><i className="fa fa-globe"></i>Western City</a></li>
 									</ul>
 									<div className="rating">
 										<ul>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star-half"></i></a></li>
 										</ul>
 									</div>
 								</div>
 								<div className="job-right">
 									<ul>
 										<li><a href="#"><i className="fa fa-heart"></i>Apply Now</a></li>
 									</ul>
 									{/* <!-- <a href="#"><i className="fa fa-heart"></i>Apply Now</a> --> */}
 								</div>
 							</div>
 						</div>
 						<div className="col-lg-12">
 							<div className="job-in">
 								<div className="job-left">
 									<h2>Wordpress Developer</h2>
 									<ul>
 										<li className="active"><a href="#"><i className="fa fa-dropbox"></i>NewYorktime, Inc</a></li>
 										<li><a href="#"><i className="fa fa-globe"></i>Western City</a></li>
 									</ul>
 									<div className="rating">
 										<ul>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star-half"></i></a></li>
 										</ul>
 									</div>
 								</div>
 								<div className="job-right">
 									<ul>
 										<li><a href="#"><i className="fa fa-heart"></i>Apply Now</a></li>
 									</ul>
 									{/* <!-- <a href="#"><i className="fa fa-heart"></i>Apply Now</a> --> */}
 								</div>
 							</div>
 						</div>
 						
 						<div className="col-lg-12">
 							<div className="job-in">
 								<div className="job-left">
 									<h2>UI/UX Designer</h2>
 									<ul>
 										<li className="active"><a href="#"><i className="fa fa-dropbox"></i>NewYorktime, Inc</a></li>
 										<li><a href="#"><i className="fa fa-globe"></i>Western City</a></li>
 									</ul>
 									<div className="rating">
 										<ul>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star-half"></i></a></li>
 										</ul>
 									</div>
 								</div>
 								<div className="job-right">
 									<ul>
 										<li><a href="#"><i className="fa fa-heart"></i>Apply Now</a></li>
 									</ul>
 									{/* <!-- <a href="#"><i className="fa fa-heart"></i>Apply Now</a> --> */}
 								</div>
 							</div>
 						</div>
 						<div className="col-lg-12">
 							<div className="job-in">
 								<div className="job-left">
 									<h2>Phyton Developer</h2>
 									<ul>
 										<li className="active"><a href="#"><i className="fa fa-dropbox"></i>NewYorktime, Inc</a></li>
 										<li><a href="#"><i className="fa fa-globe"></i>Western City</a></li>
 									</ul>
 									<div className="rating">
 										<ul>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star"></i></a></li>
 											<li><a href="#"><i className="fa fa-star-half"></i></a></li>
 										</ul>
 									</div>
 								</div>
 								<div className="job-right">
 									<ul>
 										<li><a href="#"><i className="fa fa-heart"></i>Apply Now</a></li>
 									</ul>
 									{/* <!-- <a href="#"><i className="fa fa-heart"></i>Apply Now</a> --> */}
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
export default ESection2;