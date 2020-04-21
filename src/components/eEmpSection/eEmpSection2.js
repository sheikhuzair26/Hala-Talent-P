import React from "react";
import "../eEmpSection/eEmproSection2.css";

class EEmpProSection2 extends React.Component {
  render() {
    return (
      <div>
        <form action="edit_candidate_profile.html">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="row bdr mt-4">
                  <div class="col-lg-12">
                    <div class="text-left pt-4">
                      <h4 style={{ fontWeight: "800", color: "black" }}>
                        Profile Detail
                      </h4>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="lf">
                      <input type="text" placeholder="Company_Name" required />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="lf">
                      <input type="text" placeholder="Sector" required />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="lf">
                      <input type="text" placeholder="Location" required />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="lf">
                      <input type="text" placeholder="Founded Since" required />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="lf">
                      <input type="text" placeholder="Head Count" required />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row bdr mt-4">
              <div class="text-center mt-5">
                <h4 style={{ fontWeight: "800", color: "Black" }} class="pl-3">
                  Company Detail
                </h4>
              </div>
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="edit-area">
                      <textarea
                        placeholder="Summary . . . "
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12 mt-5">
                <button type="submit" class="btn btn-primary">
                  Save & Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EEmpProSection2;
