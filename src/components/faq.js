import React from 'react'
import FSection1 from './faqSection/fSection1'
import FSection2 from './faqSection/fSection2'

class Faq extends React.Component{
    render(){
        return(
            <div>
                {/* <Header1 /> */}
                {/* <NavHeader /> */}
                <FSection1 />
               <FSection2 />

                {/* <Footer /> */}
            </div>
        )
    }
}

export default Faq;