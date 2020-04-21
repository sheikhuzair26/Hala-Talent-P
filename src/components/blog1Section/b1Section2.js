import React from "react";
import b1 from "../..//img/blog-bg1.jpg";

class B1Section2 extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="row" style={{ alignItems: "baseline" }}>
              <div className="col-lg-12">
                <div className="row " style={{ alignItems: "baseline" }}>
                  <div className="col-lg-4">
                    <div className="emp-sidebar">
                      {/* <div className="emp-date">
                        <h4>Categories</h4>
                        <div className="date-txt">
                          <ul>
                            <li>
                              <input type="checkbox" />
                              Career Advice
                            </li>
                            <li>
                              <input type="checkbox" />
                              Interview Question
                            </li>
                            <li>
                              <input type="checkbox" />
                              News
                            </li>
                            <li>
                              <input type="checkbox" />
                              Productivity
                            </li>
                            <li>
                              <input type="checkbox" />
                              Skills
                            </li>
                          </ul>
                        </div>
                      </div> */}
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
                      <img src={b1} width="100%" alt="" />
                      <div className="blog-d-txt">
                        <h4>
                          1. 8 Recruitment Strategies to Attract the Best Talent
                        </h4>
                        <p>
                          Implementing these 8 recruitment strategies will help
                          you attract and hire the best talent. The current job
                          market is hugely competitive. A strong and planned
                          recruitment strategy can help you stand out from this
                          competition.
                        </p>
                        {/* <!--  <p>Job descriptions that are hastily-created and omit company and position details are a red flag.</p>
                <p>In a 2017 CareerBuilder Candidate Experience Study, surveying more than 5,000 job seekers, 82 percent of workers said knowing the company’s team structure and 
                where they would fit was important to determine before applying.</p>
                <p>Job seekers are also interested in details such as salary, benefits, company strength, culture, and more. Just as you don’t want to be in a state of constant 
                hiring, they want to avoid a situation where they’ll be searching for work again in a few months because the job expectations weren’t made clear from the start.</p> --> */}
                      </div>
                      <div className="blog-d-txt">
                        <h4>
                          2. How to attract the best talent in the current job
                          market?
                        </h4>
                        <p>
                          The current job market is hugely competitive. There
                          are numerous job vacancies every day, but how many
                          attract the potential candidate is the question?
                          <br />
                          <hr />
                          Recruiters often struggle to find and hire the ideal
                          job candidate. A correct approach to hiring the best
                          talents is the need of the hour. The recruiters to
                          pick up the creamy layers, have to make amendments in
                          their recruitment policies.
                        </p>
                      </div>
                      <div className="blog-d-txt">
                        <h4>3.Best strategies to attract top talent</h4>
                        <p>
                          Apart from being a unique market player, here are 8
                          key recruitment strategies you can adapt to attract
                          the best talent!
                        </p>
                      </div>
                      <div className="blog-d-txt">
                        <h4>
                          4. Recruitment strategy #1: A broader job vacancy
                        </h4>
                        <p>
                          Job seekers look for clarity in the job advertisements
                          in terms of the profile, company history, pay scale,
                          career opportunities, etc. A smart recruiter provides
                          a clear picture of every required detail in the job
                          notification. You should be able to communicate job
                          requirements and how one can benefit from this
                          profile. There are many ways to craft a job post that
                          will stand out. State your company’s culture
                          mentioning how the employees have that life-work
                          balance in your company and the perks they are
                          entitled to. A short video or a link to the company's
                          career blog is an excellent idea to express these plus
                          points.
                        </p>
                      </div>
                      <div className="blog-d-txt">
                        <h4>5. Recruitment strategy #2: Campus recruiting</h4>
                        <p>Recruitment strategy #2: Campus recruiting </p>
                        <p>
                          The colleges are full of young and dynamic talents who
                          show immense enthusiasm in their work. A tie-up with
                          renowned universities and colleges and be a part of
                          their placement cells. Campus recruiting is a great
                          way to recruit students and recent graduates. The best
                          ways to attract these young talents are:
                          <hr />
                          <li> Get featured in c ampus newspapers</li>
                          <li>
                            {" "}
                            Conduct work shops and seminars in different
                            colleges to showcase your company and the career
                            opportunities you have
                          </li>
                          <li>
                            {" "}
                            Sponsor college festivals and other cultural events{" "}
                          </li>
                          <li>
                            {" "}
                            Invite students for an industry t our to learn about
                            the company structure and functioning and make them
                            interact with a few of the eminent stakeholders of
                            your company
                          </li>
                          <li>
                            {" "}
                            Offer internship programs where interested students
                            can intern with your company
                          </li>
                          <li>
                            {" "}
                            Have a different recruitment team for these
                            fresher’s who themselves are young professionals and
                            understand the budding minds.
                          </li>
                          <br />
                          Top companies like Microsoft, Google, Facebook, and
                          TCS every year hire some brimming talents from
                          universities only.
                        </p>
                      </div>

                      <div className="blog-d-txt">
                        <h4>6. Recruitment strategy #3: Be flexible </h4>
                        <p>
                          Employees look for companies where work pressure
                          doesn't affect their personal life. A modern-day
                          company offers so much to its employees. The work
                          conditions should be balanced, and it shouldn't become
                          monotonous to work all day. Give them something extra
                          like work from home options at times, weekly offs,
                          open environment office. Many companies conduct
                          friendly sports matches to keep the employees
                          entertained. A sense of rejuvenation and freedom is
                          very crucial else it would become a traditional
                          workplace of 9-5. In short, get away from the
                          conventional working standards.
                        </p>
                      </div>
                      <div className="blog-d-txt">
                        <h4>7. Recruitment strategy #4: Add perks</h4>
                        <p>
                          Big shots like Google and Facebook are dream companies
                          for every job seeker. Why? Their work environment
                          makes them an all-time favorite. A buffet meal to
                          offer, both side cab facilities, health insurance
                          policies, bonuses and allowances, family holidays, and
                          much more to attract talents. A well-maintained and
                          beautiful office area is also one way to add
                          positivity and constant energy flow.{" "}
                        </p>
                      </div>
                      <div className="blog-d-txt">
                        <h4>
                          8. Recruitment strategy #5: Organize competitions{" "}
                        </h4>
                        <p>
                          As per reports, digital media has become the main
                          source for finding jobs today. Organize online talent
                          hunt programs for students and professionals to
                          participate and display their skills.
                          <br />
                          For example, Sarah holds a marketing completion
                          ‘Brandstrom' for students where they can act as
                          managers in the making throughout the competition.
                          Such competitions enable seekers to know the company
                          and recognize the brand. They are let to live a
                          professional life realizing responsibilities before
                          even becoming professionals—this way; you give them a
                          taste of your company's style and format of working.
                        </p>
                      </div>
                      <div className="blog-d-txt">
                        <h4>
                          9.Recruitment strategy #6: Social media recruiting
                        </h4>
                        <p>
                          The Human Resource team should be active enough on
                          social media to attract the best talent. They should
                          search for potential candidates and encourage them to
                          apply to their company. Build a reputation and a
                          strong connection through social media recruiting.
                          Learn how to promote your employer brand on social
                          media effectively.
                          <hr />
                          Many experts can provide you assignment help in
                          Australia to learn the art of using social media as a
                          mainstream device to advertise yourself as an
                          enchanting recruiter. These specialists know exactly
                          how to publicize brands on different social media
                          platforms and use them for posting jobs that stand
                          out. With their guidance, you can also be members of
                          employment groups and pages.
                        </p>
                      </div>
                      <div className="blog-d-txt">
                        <h4>
                          10. Recruitment strategy #7: Employee referral program{" "}
                        </h4>
                        <p>
                          Setting up an employee referral program is a great way
                          to hire promising candidates and also make your
                          current employees happy. Use your employees as brand
                          ambassadors for the company. <br />
                          Ask them to refer their qualified friends and family
                          and earn rewards. Motivate them by offering appealing
                          employee referral rewards. An Amazon gift card for one
                          referral or an exotic holiday package for 5 referrals.
                          A great deal, no?
                        </p>
                      </div>
                      <div className="blog-d-txt">
                        <h4>
                          11. Recruitment strategy #8: Shorter time to hire
                        </h4>
                        <p>
                          Many talents are lost because recruitment agencies
                          take too long to decide or contact. Meanwhile,
                          competitors are waiting to hire your potential
                          candidate. By the time you respond, either the person
                          has bagged another job or has lost interest in your
                          company due to the delay.
                          <hr />
                          Value the time of others as you value yours. Let the
                          students, professionals, not wait and contact them
                          instantly as you scan through their profile and find
                          them deserving. Speed up your recruitment services to
                          avoid the risks of a delayed recruitment process!
                        </p>
                      </div>
                      <div className="blog-d-txt">
                        <h4>A final tip to help you attract the best talent</h4>
                        <p>
                          Flaunt your needs in such a way that they seem to be
                          opportunities one can’t miss.Remember, you are selling
                          yourself as a brand so that the capable ones can buy
                          you. Be smart and tactful in doing so, and you will be
                          able to recruit the right people for your company
                          efficiently!
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

export default B1Section2;
