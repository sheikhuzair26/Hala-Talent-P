import React from "react";
import About from "./components/about";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Employer from "./components/employer";
import CandidateProfile from "./components/candidate_profile";
import JobPacakegs from "./components/jobpackages";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Privacy from "./components/privacy";
import Login from "./components/login";
import Signup from "./components/signup";
import Candidate from "./components/candidate";
import EditCandidateProfile from "./components/eCandProfile";
import EmployerProfile from "./components/employerProfile";
import EEmpProfile from "./components/eEmpProfile";
import Blog1 from "./components/blog1";
import Blog2 from "./components/blog2";
import Blog3 from "./components/blog3";
import Quiz1 from "./components/quiz1";
import RegForm from "./components/regForm";
import Signup1 from "./components/signup1";
import Subscriptionform from "./components/subcriptionForm";
import PersonalityTest from "./components/personality";
import SubscriptionStatus from "./components/subscriptionStatus";
import MessageInbox from "./components/messageInbox";
import CompanyListing from "./components/companyListing";
import QuizResult from "./quizResult";
import BestMatch from "./components/bestMatch";
import SearchTalent from "./components/searchTalent";
import Header1 from "./components/header1";
import Footer from "./components/footer";
import Forget from "./components/forget";
import CandRegForm from "./components/candRegForm";
import blog3 from "./components/blog3";
import Quiz from "./components/quiz";

class App extends React.Component {
  render() {  
    return (
      <BrowserRouter>
        <div className="App">
          <Header1 />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/about" component={About} />
            <Route exact path="/employer" component={Employer} />
            <Route
              exact
              path="/candidateProfile"
              component={CandidateProfile}
            />
            <Route exact path="/candidate" component={Candidate} />
            <Route exact path="/candRegForm" component={CandRegForm} />
            <Route exact path="/employerProfile" component={EmployerProfile} />
            <Route exact path="/jobPackage" component={JobPacakegs} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route
              exact
              path="/edit_candidate_profile"
              component={EditCandidateProfile}
            />
            <Route
              exact
              path="/edit_employer_profile"
              component={EEmpProfile}
            />
            <Route exact path="/blog1" component={Blog1} />
            <Route exact path="/blog2" component={Blog2} />
            <Route exact path="/blog3" component={Blog3} />
            <Route exact path="/quiz" component={Quiz1} />
            <Route exact path="/quizOld" component={Quiz} />
            <Route exact path="/regForm" component={RegForm} />
            <Route
              exact
              path="/subscriptionForm"
              component={Subscriptionform}
            />
            <Route exact path="/signup1" component={Signup1} />
            <Route exact path="/personality" component={PersonalityTest} />
            <Route exact path="/subStatus" component={SubscriptionStatus} />
            <Route exact path="/messageInbox" component={MessageInbox} />
            <Route exact path="/companyList" component={CompanyListing} />
            <Route exact path="/result" component={QuizResult} />
            

            <Route exact path="/bestMatch" component={BestMatch} />
            <Route exact path="/searchTalent" component={SearchTalent} />
            <Route exact path="/forget" component={Forget} />
          </Switch>
          <Footer />

          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h4 className="modal-title">HalaTalents</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <NavLink to="/login" style={{ textDecoration: "none" }}>
                    <span style={{ color: "#662d91" }}> Please</span> Login...{" "}
                    <span style={{ color: "#662d91" }}>to Proceed</span>
                  </NavLink>
                </div>

                {/* <!-- Modal footer --> */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
