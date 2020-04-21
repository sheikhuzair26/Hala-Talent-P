import React from 'react'

class CuSection2 extends React.Component{
    render(){
        return(
            <div>
                
<section>
  <div className="container">
    <div className="text-center">
      <h2>Contact Us</h2>
      <p>We are available 24/7 for online support if you need<br />
       anything urgent just shoot us a message or call at any time. </p>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="contact">
          <div className="row">
          <div className="col-lg-6">
            <div className="contact-left">
              <h4>Contact Information</h4>
              <p>Ducimus qui blanditiis praesentium voluptatum<br />
               deleniti atque corrupti quos...</p>
               <ul>
                 <li><a href="#"><i className="fa fa-map-marker"></i>International Noel Nawab Street Los Alamitos<br />
                  AC 0000, USA</a></li>
                 <li><a href="#"><i className="fa fa-envelope"></i>Email: info@website.com</a></li>
                 <li><a href="#"><i className="fa fa-phone"></i>Call : +92-000-000-000</a></li>
                 <li><a href="#"><i className="fa fa-home"></i>Fax : (800) 000 0000 00</a></li>
               </ul>
               <div className="contact-b">
                 <ul>
                   <li><i className="fa fa-facebook-f"></i></li>
                   <li><i className="fa fa-twitter"></i></li>
                   <li><i className="fa fa-linkedin"></i></li>

                 </ul>
               </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form">
              <h4>We want to hear from you !</h4>
              <div className="row">
                <div className="col-lg-6">
                  <div className="can-inp">
                    <input type="text" placeholder="Enter Your Name"  required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="can-inp">
                    <input type="text" placeholder="Subject" required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="can-inp">
                    <input type="text" placeholder="Enter Your Email Address" required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="can-inp">
                    <input type="text" placeholder="Enter Your Phone Number" required />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="can-inp">
                    <textarea name="" id="" cols="30" rows="10" required>Enter Your Message</textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="can-inp">
                    <button type='submit' className="btn btn-primary mt-4">Submit</button>
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
        )
    }
}

export default CuSection2;