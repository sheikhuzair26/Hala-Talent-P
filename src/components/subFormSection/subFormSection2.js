import React from "react";
import { NavLink } from "react-router-dom";
import subscribe from "../../img/card_subs.png";
import "../../components/subFormSection/subFormSection.css";

class SubFormSection2 extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h2>Subcription Form</h2>
          </div>
          <hr />

          <div className="row">
            <aside className="col-sm-6">
              <article className="card">
                <div className="row">
                  <img className="cardSubsPic" src={subscribe} alt="" />
                </div>
              </article>
            </aside>

            <aside className="col-sm-6">
              <article className="card">
                <div className="card-body p-5">
                  <ul
                    className="nav bg-light nav-pills rounded nav-fill mb-3"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="pill"
                        href="#nav-tab-card"
                      >
                        <i className="fa fa-credit-card"></i> Credit Card
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#nav-tab-paypal"
                      >
                        <i className="fa fa-paypal"></i> Paypal
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#nav-tab-bank"
                      >
                        <i className="fa fa-university"></i> Bank Transfer
                      </a>
                    </li> */}
                  </ul>

                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="nav-tab-card"
                    >
                      <p className="alert alert-success">
                        Some text success or error
                      </p>
                      <form role="form">
                        <div className="form-group">
                          <label for="username">Full name (on the card)</label>
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder=""
                            required=""
                          />
                        </div>

                        <div className="form-group">
                          <label for="cardNumber">Card number</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              name="cardNumber"
                              placeholder=""
                              required
                            />
                            <div className="input-group-append">
                              <span className="input-group-text text-muted">
                                <i className="fa fa-cc-visa"></i>  {" "}
                                <i className="fa fa-cc-amex"></i>  
                                <i className="fa fa-cc-mastercard"></i>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-8">
                            <div className="form-group">
                              <label>
                                <span className="hidden-xs">Expiration</span>{" "}
                              </label>
                              <div className="input-group">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="MM"
                                  name=""
                                  required
                                />
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="YY"
                                  name=""
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label
                                data-toggle="tooltip"
                                title=""
                                data-original-title="3 digits code on back side of the card"
                              >
                                CVV <i className="fa fa-question-circle"></i>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                required=""
                              />
                            </div>
                          </div>
                        </div>

                        <button
                          className="subscribe btn btn-primary btn-block"
                          type="submit"
                        >
                          {" "}
                          Confirm{" "}
                        </button>
                      </form>
                    </div>

                    <div className="tab-pane fade" id="nav-tab-paypal">
                      <p>Paypal is easiest way to pay online</p>
                      <p>
                        <button type="submit" className="btn btn-primary">
                          {" "}
                          <i className="fa fa-paypal"></i> Log in my Paypal{" "}
                        </button>
                      </p>
                      <p>
                        <strong>Note:</strong> Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.{" "}
                      </p>
                    </div>
                    <div className="tab-pane fade" id="nav-tab-bank">
                      <p>Bank accaunt details</p>
                      <dl className="param">
                        <dt>BANK: </dt>
                        <dd> THE WORLD BANK</dd>
                      </dl>
                      <dl className="param">
                        <dt>Accaunt number: </dt>
                        <dd> 12345678912345</dd>
                      </dl>
                      <dl className="param">
                        <dt>IBAN: </dt>
                        <dd> 123456789</dd>
                      </dl>
                      <p>
                        <strong>Note:</strong> Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default SubFormSection2;
