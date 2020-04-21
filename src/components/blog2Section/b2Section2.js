import React from "react";
import b1 from "../../img/blog-bg1.jpg";

class B2Section2 extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="row" style={{ alignItems: "baseline" }}>
              <div className="col-lg-12">
                <div className="row" style={{ alignItems: "baseline" }}>
                  <div className="col-lg-4">
                    <div className="emp-sidebar">
           
           
                      <hr />
                      <div className="emp-date">
                        <h4>Archives</h4>
                        <div className="date-txt">
                          <ul>
                            <li>
                              <input type="checkbox" />
                              October 2019
                            </li>
                            <li>
                              <input type="checkbox" />
                              May 2019
                            </li>
                          </ul>
                        </div>
                      </div>
                      <hr />
                      <div className="emp-date">
                        <h4>Search</h4>
                        <div className="date-txt">
                          <p style={{ fontSize: "14px" }}>
                            Type and Press Enter to Search
                          </p>
                          <input
                            type="text"
                            placeholder="Search"
                            style={{
                              border: "1px solid lightgrey",
                              borderRadius: "3px",
                              paddingLeft: "10px",
                              height: "40px",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="blog-detail">
                      <img src={b1} width="100%;" alt="" />
                      <div className="blog-d-txt">
                        <h4>1. What Kind of Learner Are You?</h4>
                        <p>
                          {" "}
                          Were you an A student at school? Or did you find
                          yourself distracted at every opportunity?
                          Understanding your learning style is the key to
                          ensuring that the work you put in is useful and
                          worthwhile.
                          <br /> Personal learning development has never been
                          more critical, especially in a world where talent is
                          more competitive than ever. Thankfully, it's also
                          never been easier to improve your skills and set
                          yourself apart from the rest of your industry. But
                          first, it's essential to understand the role that your
                          learning style plays in your career success. So, what
                          are learning techniques, and how do you find yours?
                        </p>
                      </div>
                      <div className="blog-d-txt">
                        <h4>2. Visual Learners</h4>
                        <p>
                          Visual learners respond better to visual formats like
                          pictures, diagrams, or written text. Visual learners
                          can be subcategorized into 'readers' and 'individual
                          learners. Readers, as the name suggests, like to learn
                          through reading and writing activities. These learners
                          respond well to coaching that involves essay writing,
                          reading the news, case studies, and so on.
                          <br />
                          Individual visual learners, on the other hand, have a
                          different natural inclination. Individual learners
                          respond better to visual aids when faced with new
                          information. Written information is still beneficial,
                          but through highlighted or bolded text. These learners
                          also respond well to videos, graphics, and images.
                          Games and quizzes (especially multiple choice) are the
                          ideal way of testing what knowledge these kinds of
                          learners have gained.
                        </p>
                      </div>
                      <div className="blog-d-txt">
                        <h4>3. Auditory Learners</h4>
                        <p>
                          Do you ever move your lips or mutter to yourself when
                          carrying out a task? You might be an auditory learner!
                          These individuals respond better to hearing new
                          information overseeing it presented on a page or a
                          video etc. <br />
                          These learners will also be more inclined to use
                          mnemonics, jingles, and songs to retain information.
                          They have a positive response to brainstorming ideas,
                          and can learn better in group situations. On the other
                          hand, reading and writing for an extended period may
                          hurt their learning, leading to disengagement or
                          actively seeking distraction. <br />
                          Auditory learners respond well to introductions and
                          recaps, book-ending the information provided in the
                          learning session. Presenting the data as questions
                          also helps to aid these individuals in engaging with
                          new information. Listening and communication are
                          essential for these learners, and so they will respond
                          better to brainstorming and games, as opposed to
                          traditional exams and tests.
                        </p>
                      </div>
                      <div className="blog-d-txt">
                        <h4>4. Kinaesthetic Learners</h4>
                        <p>
                          {" "}
                          This refers to people who respond best to touching and
                          sensing new information. They respond well to lab
                          situations, where they have the opportunity to break
                          things apart and then figure out how to put them back
                          together again.
                          <hr />
                          To spot a tactile learner, you can look at their
                          physical responses when they are taking in new
                          information – they might tap a pen on a desk or
                          shaking their leg. They are likely ‘hand talkers’ —
                          using broad gestures with their hands to illustrate
                          their point — and may even draw letters in the air
                          when spelling out words. <br />
                          These learners need breaks and action – long lectures
                          won’t do these people any good!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default B2Section2;
