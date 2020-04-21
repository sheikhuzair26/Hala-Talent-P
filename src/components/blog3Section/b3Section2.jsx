import React from "react";
import b1 from "../../img/blog-bg1.jpg";

const b3Section2 = () => {
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
                      <p>
                        {" "}
                        Hiring quality talent is the key to a successful
                        business, yet hiring new employees can be time-consuming
                        and sophisticated and can often lead to the wrong person
                        being hired. We have put together a list of some of the
                        mistakes you might be making when recruiting.{" "}
                      </p>
                    </div>
                    <div className="blog-d-txt">
                      <h4>Job adverts</h4>
                      <p>
                        A common mistake that hiring employers make is
                        forgetting that their job descriptions are an advert for
                        their role. If you do not have enticing job adverts that
                        accurately state what you are looking for and make the
                        position and company sound exciting, it is less likely
                        that you will attract a suitable candidate with the
                        qualities and skills needed. The job should be well
                        detailed and defined; otherwise, it is inevitable that
                        the person you get will be the wrong fit. Also, focus
                        your adverts more on what is required in terms of
                        performance rather than a list of skills. This will help
                        you to attract a more diverse group of people, who may
                        not tick all the 'skills' boxes, but will perform better
                        at the task in hand.
                        <br />
                        Recruiting is a two-way process, and you must also
                        persuade the candidate that they should work for you.
                        People are increasingly looking for companies that they
                        can fit in to, so highlighting the company culture is
                        essential. Reference any benefits and perks of working
                        for the company such as health insurance or flexible
                        times, as well as opportunities for professional
                        development.
                      </p>
                    </div>
                    <div className="blog-d-txt">
                      <h4> Focusing too much on qualifications and skills</h4>
                      <p>
                        A candidate may have all the suitable qualifications and
                        skills, but this does not ensure that they are
                        appropriate. There is rarely going to be a candidate who
                        is a perfect match to the job description, and so it is
                        just as important to find a candidate who has attitudes
                        and values that align with that of the company. To do
                        this, consider focusing less on finding the 'perfect'
                        candidate that checks the right boxes and focusing more
                        on learning about the candidate. You should think about
                        whether they are a good personality fit for the dynamic
                        of the company.
                      </p>
                    </div>
                    <div className="blog-d-txt">
                      <h4>Not asking the right interview questions</h4>
                      <p>
                        {" "}
                        Many employers make the mistake of not conducting the
                        interview correctly. Many interviewers spend too long
                        describing the company and the role, rather than getting
                        to know the candidate. One way to avoid this is by
                        preparing a list of interview questions beforehand so
                        that you ensure you do not miss anything important.
                        However, you must also not ask a bland and repetitive
                        list of closed questions that give the interviewee
                        little opportunity to talk properly. Use the interview
                        to get to know the candidate as much as possible by
                        asking questions that they can expand on and, therefore,
                        demonstrate their potential. Focus on the people!
                      </p>
                    </div>
                    <div className="blog-d-txt">
                      <h4>Rushing</h4>
                      <p>
                        {" "}
                        Many employers fail to find the right candidate because
                        they rush the process. Finding the right fit can take
                        time, but it is worth it. Although screening methods
                        save time and help to weed out unsuitable candidates,
                        some screening processes may mean you miss some top
                        talent - be aware of this! Many hiring employers also
                        fail to check the references. References provide a good
                        insight into what the candidate is like and how they
                        work, and former employers will usually have precious
                        things to say, so this should not be ignored. Hiring the
                        right person is essential - do not settle for less!
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
};

export default b3Section2;
