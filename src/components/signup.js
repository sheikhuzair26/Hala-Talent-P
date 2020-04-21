import React from 'react'
import SuSection1 from './signupSection/sSection1'
import SuSection2 from './signupSection/sSection2'

class Signup extends React.Component{
    render(){
        return(
            <div>
                <SuSection1 />
                <SuSection2 />

            </div>
        )
    }
}

export default Signup;