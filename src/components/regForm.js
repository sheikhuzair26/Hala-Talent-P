import React from 'react'
import ERegSection2 from './empRegSection/eRegSection2'
import ERegSection1 from './empRegSection/eRegSection1'


class RegForm extends React.Component{
    render(){
        return(
            <div>
                {/* <Header1 /> */}
                {/* <NavHeader /> */}
                <ERegSection1 />
                <ERegSection2 />




                {/* <Footer /> */}
            </div>
        )
    }
}

export default RegForm;