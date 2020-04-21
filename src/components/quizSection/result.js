import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import QSection1 from './qSection1'

const Result = ({score}) => (

  <div>
    {/* <Header1 /> */}
    {/* <NavHeader /> */}
    <QSection1 />
    <br />
    <br />
    <center>
    {
      score > 2 ? 
      <div>
        <br />
        <h5>You Scored {score}/5 </h5>
        <NavLink to='/regForm'>Register Now</NavLink> <br />
        <NavLink to='/quiz'>Try Again</NavLink>
      </div>:
      <div>
        <h5>You scored {score}/5. You can't Register now</h5>
        <NavLink to='/quiz'>Try Again</NavLink>
      </div>
    }
    </center>
    <br />
    <br />
    {/* <Footer /> */}

  </div>
);

export default withRouter(Result);