import React from "react";
import {
  Footer,
  Header,
  TechniCalities,
  TechWeWork,
  YearsOfWork,
} from "../../../components";
// import { CareerBanner } from "../career/Career";
import { Zoom, Slide } from "react-reveal";
import "./oluary.scss";
import {
  Cloud1,
  Cloud2,
  Cloud3,
  Oluary1,
  Oluary2,
  Oluary3,
  Oluary4,
  Oluary5,
  Oluary6,
  OluaryryBgLayer,
} from "../../../assets/images/index";

function Oluary() {
  return (
    <div id="custom-web">
      {/* =========================banner============ */}
      <section className="banner oluary-banner barter-exchange-banner  ">
        <img
          src={OluaryryBgLayer}
          alt=""
          style={{
            zIndex: "-2",
            position: "absolute",
            height: "inherit",
            width: "100%",
          }}
        />
        <Header />
        <div className="main">
          <div className="container ">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="main-cloud">
                  <div className="first-cloud">
                    <img src={Cloud1} alt="cloud.png" className="mt-5" />
                  </div>
                  <div className="third-cloud">
                    <img src={Cloud3} alt="cloud.png" />
                  </div>
                  <div className="second-cloud">
                    <img src={Cloud2} alt="cloud.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="banner-content mt-5">
                  <div className="title-home">
                    <h2>all-in-one application</h2>
                    <hr
                      className="line"
                      style={{ borderTop: "6px solid #F89200", width: "50%" }}
                    />
                    <h4>+52 the high-quality services available</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="banner-img">
                  <img src={Oluary1} alt="Oluary.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="case-study-content" className="clearfix">
        <div className="main">
          <div className="container barter-container">
            <div className="sec-padding">
              <div className="row">
                <div className="col-lg-12 mt-2 d-flex  flex-column align-items-center justify-content-end ">
                  <div className="banner-img-mobile d-none">
                    <Zoom>
                      <img src={Oluary1} alt="Oluary.png" />
                    </Zoom>
                  </div>
                </div>
                <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end ">
                  <div className="content">
                    <div className="heading">
                      <h1>
                        Island Girl is an NFT game based on a P2E model based on
                        blockchain technology.
                      </h1>
                      <span className="underline"></span>
                    </div>

                    <div className="para">
                      <p>
                        Tokens, coins, and power-ups provide entertaining
                        amusement and earning chances as players engage in this
                        enjoyable and inspiring game. The game is part of a
                        larger strategy to bring action into the metaverse and
                        is planned for both Android and iOS devices
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-2 d-flex  flex-column align-items-center justify-content-end ">
                  <div className="banner-img">
                    <Zoom>
                      <img src={Oluary2} alt="oluary.png" />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end ">
                  <div className="content">
                    <div className="heading">
                      <h1>NFTs</h1>
                      <span className="underline"></span>
                    </div>

                    <div className="para">
                      <p>
                        Amazon, Beach, Norse gods, Pirate, sorcerer, and space.
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-2 d-flex  flex-column align-items-center justify-content-end ">
                  <div className="banner-img">
                    <Slide right>
                      <img src={Oluary3} alt="oluary.png" />
                    </Slide>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end ">
                  <div className="content">
                    <div className="heading">
                      <h1>Marketplace</h1>
                      <span className="underline"></span>
                    </div>

                    <div className="para">
                      <p>
                        Welcome to the market! All of the endearing Island Girl
                        that other people are presently selling are displayed
                        here. Are you thinking about selling one of your
                        MicroPets? Go to your Inventory now. Please be aware
                        that any Island Girl token transactions will incur a 2
                        percent charge at the time of listing.
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-2 d-flex  flex-column align-items-center justify-content-end ">
                  <div className="banner-img">
                    <Slide left>
                      <img
                        src={Oluary4}
                        alt="Island girl image"
                        className="island-girl-4"
                      />
                    </Slide>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end ">
                  <div className="content">
                    <div className="heading">
                      <h1>Token</h1>
                      <span className="underline"></span>
                    </div>

                    <div className="para">
                      <p>
                        Island Girl makes use of the BEP-1155 NFT standard,
                        which offers its users a number of advantages. One of
                        these fundamental advantages is the capability for
                        customers to purchase several crates for a single
                        transaction charge and then open all of them
                        simultaneously for a separate transaction fee.
                      </p>{" "}
                      <p>
                        How does this strengthen the Island Girl token's value?
                        As a result, more volume will be transferred through the
                        Island Girl App, further boosting price action and
                        usefulness, the easier it is for customers to purchase
                        more crates at once. Users may even purchase and sell
                        NFTs in the stacks of their choice from a marketplace
                        viewpoint!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-2 d-flex  flex-column align-items-center justify-content-end ">
                  <div className="banner-img">
                    <Zoom>
                      <img src={Oluary5} alt="oluary.png" />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end ">
                  <div className="content">
                    <div className="heading">
                      <h1>Tokenomics</h1>
                      <span className="underline"></span>
                    </div>

                    <div className="para">
                      <p>
                        For the BSC space, Island Girl combines the power of
                        fair purchase and sell taxes! Less price volatility is
                        guaranteed when bits of each transaction are added to
                        liquidity, as opposed to the manual repurchase, which is
                        employed to foster bullish momentum or protect crucial
                        support levels. The marketing fee for the game
                        guarantees not just a steady flow of new investors but
                        also essential finance.
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-2 d-flex  flex-column align-items-center justify-content-end ">
                  <div className="banner-img">
                    <Slide left>
                      <img src={Oluary6} alt="oluary.png" />
                    </Slide>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end ">
                  <div className="content">
                    <div className="heading">
                      <h1>Tokenomics</h1>
                      <span className="underline"></span>
                    </div>

                    <div className="para">
                      <p>
                        For the BSC space, Island Girl combines the power of
                        fair purchase and sell taxes! Less price volatility is
                        guaranteed when bits of each transaction are added to
                        liquidity, as opposed to the manual repurchase, which is
                        employed to foster bullish momentum or protect crucial
                        support levels. The marketing fee for the game
                        guarantees not just a steady flow of new investors but
                        also essential finance.
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <TechniCalities className="mt-5" />
            </div>
          </div>
        </div>
      </section>
      {/* ===========================tech-we-wrok======================================= */}
      <TechWeWork />

      {/* ===========================years-of-working======================================= */}
      <YearsOfWork />
      {/* ===========================footer================ */}
      <Footer />
    </div>
  );
}

export default Oluary;
