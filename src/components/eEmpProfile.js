import React from 'react'
import EEmpProSection1 from './eEmpSection/eEmpSection1'
import EEmpProSection2 from './eEmpSection/eEmpSection2'

class EEmpProfile extends React.Component{
    render(){
        return(
            <div>
                {/* <Header1 /> */}
                {/* <NavHeader /> */}
                <EEmpProSection1 />
                <EEmpProSection2 />



                {/* <Footer /> */}

            </div>
        )
    }
}

export default EEmpProfile;