import React from 'react'
import ASection1 from './aboutSection/aSection1';
import ASection2 from './aboutSection/aSection2';
import ASection3 from './aboutSection/aSection3';
import ASection4 from './aboutSection/aSection4';

class About extends React.Component{
    render(){
        return(
            <div className='About'>
             {/* <Header1 /> */}
             {/* <NavHeader /> */}
            <ASection1 />
            <ASection2 />
            <ASection3 />
            <ASection4 />
            {/* <Footer /> */}
            </div>
        )
    }
}

export default About;