import React from 'react'
import team1 from '../../img/team/team1.jpg'
import team2 from '../../img/team/team2.jpg'
import team3 from '../../img/team/team3.jpg'
import team4 from '../../img/team/team4.jpg'
import team5 from '../../img/team/team5.jpg'

class ASection4 extends React.Component{
    render(){
        return(
            <div className="app">
                <section>
  <div className="container">
    <div className="text-center mb-5">
      <h2>Our Mission</h2>
      <p>Our mission is to ease the selection process for employers and getting jobs for talents as well.</p>
    </div>
            <div className="row blog">
                <div className="col-md-12">
                    <div id="blogCarousel" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li data-target="#blogCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#blogCarousel" data-slide-to="1"></li>
                        </ol>

                        {/* <!-- Carousel items --> */}
                        <div className="carousel-inner mb-5">

                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={team1} alt="Image" style={{ maxWidth:"100%"}} />
                                        </a>
                                        <div className="team-inner222">
                                          <h2>Jaden Horo</h2>
                                          <p>Front End</p>
                                          <ul>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                          </ul>
                                        </div>

                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={team2} alt="Image" style={{ maxWidth:"100%"}} />
                                        </a>
                                        <div className="team-inner222">
                                          <h2>Jaden Horo</h2>
                                          <p>Front End</p>
                                          <ul>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                          </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={team3} alt="Image" style={{ maxWidth:"100%"}} />
                                        </a>
                                        <div className="team-inner222">
                                          <h2>Jaden Horo</h2>
                                          <p>Front End</p>
                                          <ul>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                          </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={team4} alt="Image" style={{ maxWidth:"100%"}} />
                                        </a>
                                        <div className="team-inner222">
                                          <h2>Jaden Horo</h2>
                                          <p>Front End</p>
                                          <ul>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                          </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--.row--> */}
                            </div>
                            {/* <!--.item--> */}

                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={team5} alt="Image" style={{ maxWidth:"100%"}} />
                                        </a>
                                        <div className="team-inner222">
                                          <h2>Jaden Horo</h2>
                                          <p>Front End</p>
                                          <ul>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                          </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={team1} alt="Image" style={{ maxWidth:"100%"}} />
                                        </a>
                                        <div className="team-inner222">
                                          <h2>Jaden Horo</h2>
                                          <p>Front End</p>
                                          <ul>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                          </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={team2} alt="Image" style={{ maxWidth:"100%"}} />
                                        </a>
                                        <div className="team-inner222">
                                          <h2>Jaden Horo</h2>
                                          <p>Front End</p>
                                          <ul>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                          </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">
                                            <img src={team3} alt="Image" style={{ maxWidth:"100%"}} />
                                        </a>
                                        <div className="team-inner222">
                                          <h2>Jaden Horo</h2>
                                          <p>Front End</p>
                                          <ul>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                          </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--.row--> */}
                            </div>
                            {/* <!--.item--> */}

                        </div>
                        {/* <!--.carousel-inner--> */}
                    </div>
                    {/* <!--.Carousel--> */}

                </div>
            </div>
</div>
</section>


            </div>
        )
    }

}
export default ASection4;