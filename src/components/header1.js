import React from "react";
import HeaderAuth from "./headerAuth";
import HeaderNonAuth from "./headerNonAuth";
import { getToken } from "../getToken/getToken";
import NavAuth from "./navAuth";
import NavNonAuth from "./navNonAuth";

class Header1 extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //    isAuth: false
  //   };
  // }
  // componentDidMount(){
  //   getToken().then(function (response) {
  //     console.log(response)
  //     if(response.data !== null ){
  //         this.setState({isAuth: true})
  //     } else if (response.data === null ) {
  //         this.setState({isAuth: false})
  //     }
  //   }.bind(this))
  //   .catch(function (error) {
  //     console.log(error);
  //   }.bind(this));

  //  }
  render() {
    return (
      <div>
        <HeaderNonAuth />
        <NavAuth />
      </div>
    );
  }
}

export default Header1;
