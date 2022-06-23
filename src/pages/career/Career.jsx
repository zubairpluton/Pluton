import React from "react";
import "./career.scss";
import { JobOpnings } from "../../assets/images/index";
function Career() {
  return (
    <div id="career">
      <section className="home-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4>Careers</h4>
              <div className="title-home">
                <h1>Join The Team</h1>
                <hr className="line" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="icon-section mt-4">
        <div className="title-home">
          <h2 className="parallax-title text-center text-capitalize">
            How We Hire
          </h2>
          <hr className="line" />
        </div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-sm-2 box-img">
              <img src={JobOpnings} />
            </div>

            <div className="col-sm-2 box-img">
              <img src={JobOpnings} />
            </div>
            <div className="col-sm-2 box-img">
              <img src={JobOpnings} />
            </div>
            <div className="col-sm-2 box-img">
              <img src={JobOpnings} />
            </div>
            <div className="col-sm-2 box-img">
              <img src={JobOpnings} />
            </div>
            <div className="col-sm-2 box-img">
              <img src={JobOpnings} />
            </div>
          </div>
        </div>
      </section>
      <section className="from-section mt-4">
        <div className="container">
          <div className="title-header">
            <h2 className="parallax-title text-center text-capitalize">
              Open Positions
            </h2>
            <hr className="line" />
          </div>
          <div className="row"></div>
        </div>
      </section>
    </div>
  );
}

export default Career;
