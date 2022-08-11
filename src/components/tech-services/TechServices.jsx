import React from "react";
import "./techservices.scss";
import { LineBlack } from "../../assets/images/index";

function TechServices({ heading, para }) {
  return (
    <div className="tech-services">
      <div className="line">
        <img src={LineBlack} alt="" />
      </div>

      <div className="main-about main-services text-center">
        <div className="heading">
          {/* <h6>Services</h6> */}
          <h1>{heading}</h1>
          <span className="underline"></span>
        </div>
        <div className="para">
          <p>{para}</p>{" "}
        </div>
      </div>
    </div>
  );
}

export default TechServices;
