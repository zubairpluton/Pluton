import React from "react";
import { Footer, Header } from "../../../components";
import { CareerBanner } from "../../career/Career";
import { lap1, lap2, lap3, lap4 } from "../../../assets/images";
import "./custome-web.scss";

function CustomWeb() {
  return (
    <div id="custom-web">
      {/* =========================banner============ */}
      <section id="banner">
        <CareerBanner title={`Custom Website`} />
      </section>
      <section id="custom-web-card">
        <div className="container">
          <div className="sec-padding">
            <div className="row g-xl-1">
              <div className="col-lg-6 my-1">
                <div className="main-box">
                  <div className="box-img">
                    <div className="content">
                      <h3>Java Times Caffe</h3>
                      <button className="custom-btn ">View Case Study</button>
                    </div>
                    <img src={lap1} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 my-1">
                <div className="main-box">
                  <div className="box-img">
                    <div className="content">
                      <h3>Java Times Caffe</h3>
                      <button className="custom-btn ">View Case Study</button>
                    </div>
                    <img src={lap2} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 my-1">
                <div className="main-box">
                  <div className="box-img">
                    <div className="content">
                      <h3>Java Times Caffe</h3>
                      <button className="custom-btn ">View Case Study</button>
                    </div>
                    <img src={lap4} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 my-1">
                <div className="main-box">
                  <div className="box-img">
                    <div className="content">
                      <h3>Java Times Caffe</h3>
                      <button className="custom-btn ">View Case Study</button>
                    </div>
                    <img src={lap1} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 my-1">
                <div className="main-box">
                  <div className="box-img">
                    <div className="content">
                      <h3>Java Times Caffe</h3>
                      <button className="custom-btn ">View Case Study</button>
                    </div>
                    <img src={lap2} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 my-1">
                <div className="main-box">
                  <div className="box-img">
                    <div className="content">
                      <h3>Java Times Caffe</h3>
                      <button className="custom-btn ">View Case Study</button>
                    </div>
                    <img src={lap4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CustomWeb;
