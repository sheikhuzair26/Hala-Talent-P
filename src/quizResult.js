import React from 'react'
import { NavLink } from 'react-router-dom'
import "../src/result.css";


class QuizResult extends React.Component{
    render(){
        return(<div>

            <div class="container-fluid">
 	<div class="emp-bg">
 		<div class="row">
 			<div class="col-lg-12">
 				<div class="emp-iner">
 					<div class="text-center">
 						<h2 style={{color: "white"}}>Quiz Result</h2>
 					</div>
 				</div>
 			</div>
 		</div>
 	</div>
 </div>


<section>
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col-lg-8 offset-2 bg-light">
        {/* <!-- <div class="row">
          <div class="col-lg-12">
            <div class="result-img text-center">
              <img src="assets/img/result/2808343.jpg" width="50%" alt="">
            </div>
          </div>
        </div> --> */}
        <div class="row pt-5">
          <div class="col-lg-4">
              <div class="progress blue">
                  <span class="progress-left">
                      <span class="progress-bar"></span>
                  </span>
                  <span class="progress-right">
                      <span class="progress-bar"></span>
                  </span>
                  <div class="progress-value">80%</div>
              </div>
          
          </div>
          <div class="col-lg-8">
            <div class="result-txt">
              <ul>
                <li class="clock"><i class="fa fa-clock-o"></i>1 minute 2 seconds</li>
                <li class="cancle"><i class="fa fa-remove"></i>6 incorect answer</li>
                <li class="check"><i class="fa fa-check"></i>7 out of 13 points</li>
              </ul>
            </div>
          </div>
        </div>  
        <div class="row mt-5 pb-5">
          <div class="col-lg-12">
            <div class="row text-center">
              <div class="col-lg-6">
                <NavLink to='/quiz'><button class="btn btn-primary">Re -Test</button></NavLink>
              </div>
              <div class="col-lg-6">
                <NavLink to='/personality'><button class="btn btn-primary">Register</button></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


            {/* <Footer /> */}
        </div>)
    }
}

export default  QuizResult;