import React from 'react'
import { NavLink } from 'react-router-dom';
import '.././forget.css'

class Forget extends React.Component{
    render(){
        return(
            <div>
                
 <div class="container-fluid">
 	<div class="emp-bg">
 		<div class="row">
 			<div class="col-lg-12">
 				<div class="emp-iner">
 					<div class="text-center">
 						<h2 style={{color: "white"}}>Forget</h2>
 					</div>
 				</div>
 			</div>
 		</div>
 	</div>
 </div>
 <div class="container register">
  <div class="row">
      <div class="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
          <h3>Welcome</h3>
          <p>Select the profile from Talent or Employer, and log in to your account.</p>
          <NavLink to="/signup"><input type="submit" name="" value="Signup"/></NavLink><br/>
      </div>
      <div class="col-md-9 register-right">
        
          <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <h3 class="register-heading" style={{fontWeight: "bold"}}>Reset Password</h3>
                  <div class="row register-form">
                      <div class="col-md-12 mt-4">
                          <div class="form-group">
                              <div class="ls">
                                <input type="email" class="form-control" placeholder="Email *" value="" required />
                              </div>
                          </div>
                          
                          
                          
                      </div>
                      <div class="col-md-12">
                          <input type="submit" class="btnRegister"  value="Register"/>
                      </div>
                  </div>
              </div>
              
          </div>
      </div>
  </div>

</div>


            </div>
        )
    }
}

export default Forget;