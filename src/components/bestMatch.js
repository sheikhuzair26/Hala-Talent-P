import  React  from "react";
import BestMatchSection1 from './bestMatchSection/bestMatchSection1';
import BestMatchSection2 from "./bestMatchSection/bestMatchSection2";

class BestMatch extends React.Component {
    render(){
        return(
            <div>
                {/* <Header1 /> */}
                {/* <NavHeader /> */}
                <BestMatchSection1 />
                <BestMatchSection2 />
                 {/* <Footer /> */}
            </div>
        )
    }
}

export default BestMatch;