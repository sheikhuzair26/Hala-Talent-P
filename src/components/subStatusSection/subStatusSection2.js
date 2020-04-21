import React from 'react'
import payment from '../../img/payment.jpg'

class SubStatusSection2 extends React.Component{
    render(){
        return(
            <div>
                

<div class="container">
  <div class="row">
    <div class="payment mt-5">
    <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-6">
            <img src={payment} width="100%" class="img-responsive" alt="" />
          </div>
          <div class="col-lg-6 bg-light">
            <div class="row">
              <div class="col-lg-12">
                <div class="lf">
                  <input type="number" placeholder="Card Number" />
                </div>
              </div>
              <div class="col-lg-8">
                <div class="lf">
                  <input type="date" placeholder="Expiration Date" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="lf">
                  <input type="number" placeholder="CVC" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="lf">
                  <input type="text" placeholder="Coupon Code" />
                </div>
              </div>
              <div class="col-lg-12 mt-5">
                <button class="btn btn-primary" type="submit" disabled >Renew Subscription</button>
              </div>
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

export default SubStatusSection2;