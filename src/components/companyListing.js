import React from 'react'
import CompListSection1 from './compListSection/compListSection1'
import CompListSection2 from './compListSection/compListSection2'

class CompanyListing extends React.Component{
    render(){
        return(
            <div>
                {/* <Header1 /> */}
                {/* <NavHeader /> */}
               <CompListSection1 />
               <CompListSection2 />
                {/* <Footer /> */}

            </div>
        )
    }
}

export default CompanyListing;