import React from 'react'
import LSection1 from './loginSection/lSection1'
import LSection2 from './loginSection/lSection2'

class Login extends React.Component{
    render(){
        return(
            <div>
              <LSection1 />
              <LSection2 />
 
            </div>
        )
    }
}

export default Login;