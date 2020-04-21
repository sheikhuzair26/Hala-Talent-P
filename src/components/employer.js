import React from 'react'
import ESection1 from './employerSection/eSection1.h'
import ESection2 from './employerSection/eSection2'

class Employer extends React.Component{

    render(){
        return(
            <div>
              {/* <Header1 /> */}
              {/* <NavHeader /> */}
              <ESection1 />
              <ESection2 />
             {/* <Footer /> */}
            </div> 
        )
    }
}

export default Employer;