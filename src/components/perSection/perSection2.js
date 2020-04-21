import React from "react";
import { NavLink } from "react-router-dom";
import QuestionsCardsSec2 from "../perSection/QuestionsCardsSec2";
import "../perSection/QuestionCardsSec2.css";

class PerSection2 extends React.Component {
  render() {
    return (
      <div>
        <QuestionsCardsSec2
          questionNo="Question 1"
          question=" You are exhausted because your week was endless and less than great. 
          How are you going to spend your weekend? "
          alphabet1="E"
          option1=" I’ll call my friends to ask about their plans. I
           heard that a new restaurant opened, a nice comedy is playing in the cinema, 
          there are big discounts at the paintball club."
          alphabet2="I"
          option2="I’ll switch on the “Don’t disturb “mode on my phone and stay at home. 
          I’ll watch a new episode of my favourite TV show, do a puzzle, and taking along bath with a book."
          //   option3="Temporary…Manage"
          //   option4="Careful … Belie"
        />

        {/* Question 2 */}
        <QuestionsCardsSec2
          questionNo="Question 2"
          question=" Which of these two descriptions suits you more?"
          alphabet1="S "
          option1="The most important thing for me is what’s happening here and now. 
          I assess real situations and pay attention to details."
          alphabet2="N"
          option2="Facts are boring. I love to dream and play over upcoming events in my mind. 
          I rely more on intuition than information."
        />
        {/* Question3 */}
        <QuestionsCardsSec2
          questionNo="Question 3"
          question=" A competitor of your current employer is trying to entice you. 
          You have doubts because the salary is much higher there, but the staff here is great. 
          Moreover, the head of your department hinted that he would recommend you to the bosses 
          when he retires. How are you going to make a decision?  "
          alphabet1="T "
          option1="I’ll learn all the available information about the competitor,
           ask my HR manager for advice, and draw a chart with all the pros and cons. In such cases, it’s important to weight up all the arguments and assess the situation with a sharp mind.  "
          alphabet2="F"
          option2="I’ll listen to my feelings. I always try to follow my heart."
        />
        {/* Question 4 */}
        <QuestionsCardsSec2
          questionNo="Question 4"
          question=" Only two weeks are left before your close friends’ wedding. How are the preparations going?"
          alphabet1="J "
          option1=" One month ago, I chose the saxophonist who will play a medley of our school songs, collected the couple’s 
          photo love story, composed a poem, pressed my suit. "
          alphabet2="P"
          option2="Why prepare? I’ll be having fun and enjoying myself at the party.
           I’ll improvise my wedding speech.
           The best things happen spontaneously. "
        />

        {/* NAvLink */}
        <NavLink to="/candRegForm">
          {" "}
          <center>
            <button type="button" className="btn btn-primary mt-5">
              Submit
            </button>
          </center>
        </NavLink>

        <div className="container">
          {/* <!-- The Modal --> */}
          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h4 className="modal-title">HalaTalent</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">Personality Submited...</div>

                {/* <!-- Modal footer --> */}
                <div className="modal-footer">
                  <NavLink to="/candRegForm">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Next
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PerSection2;
