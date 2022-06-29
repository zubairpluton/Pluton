import React from "react";
import { Footer, Header } from "../../components";
import { CareerBanner } from "../career/Career";
import "./case-study.scss";
import {
  Islandgirl1,
  Islandgirl2,
  Islandgirl3,
  Islandgirl4,
  Islandgirl5,
  Islandgirl6,
  Islandgirl7,
} from "../../assets/images/index";

function CaseStudy() {
  return (
    <div id="custom-web">
      {/* =========================banner============ */}
      <section id="banner">
        <CareerBanner title={`Custom Website`} />
      </section>
      <section id="case-study">
        <div className="container">
          <div className="sec-padding">
            <div className="row g-xl-1"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CaseStudy;
