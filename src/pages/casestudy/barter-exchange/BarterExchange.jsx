import React from "react";
import {
  Footer,
  Header,
  TechniCalities,
  TechWeWork,
  YearsOfWork,
} from "../../../components";
// import { CareerBanner } from "../career/Career";
import { Zoom } from "react-reveal";
import "./barter-exchange.scss";
import {
  BarterExchangeBannerImg,
  Cloud1,
  Cloud2,
  Cloud3,
  BarterExchange2,
  BarterExchange3,
  BarterExchange4,
  BarterExchange5,
  BarterExchangeBgLayer,
} from "../../../assets/images/index";

function BarterExchange() {
  return (
    <div id="custom-web">
      {/* =========================banner============ */}
      <section className="banner barter-exchange-banner">
        <img
          src={BarterExchangeBgLayer}
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
            <div className="row" style={{ height: "40%" }}>
              <div className="col-md-12 col-sm-12">
                <div className="main-cloud">
                  <div className="first-cloud">
                    <img src={Cloud1} alt="cloud.png" className="mt-5" />
                  </div>
                  <div className="second-cloud">
                    <img src={Cloud2} alt="cloud.png" />
                  </div>
                  <div className="third-cloud">
                    <img src={Cloud3} alt="cloud.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="banner-content mt-5">
                  <div className="title-home">
                    <h2>
                      Trite goods now <br /> barter them
                    </h2>
                    <hr
                      className="line"
                      style={{ borderTop: "6px solid #F89200", width: "50%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="banner-img">
                  <img src={BarterExchangeBannerImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="case-study-content" className="clearfix">
        <div className="container barter-container">
          <div className="sec-padding">
            <div className="row">
              <div className="col-lg-12 mt-2 d-flex  flex-column align-items-center justify-content-end ">
                <div className="banner-img-mobile d-none">
                  <Zoom>
                    <img
                      src={BarterExchangeBannerImg}
                      alt="BarterExchange.png"
                    />
                  </Zoom>
                </div>
              </div>
              <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end mb-5 ">
                <div className="content">
                  <div className="heading">
                    <h1>
                      Online platform for bartering and trades make it easier to
                      get rid of unwanted items.
                    </h1>
                    <span className="underline barter-underline"></span>
                  </div>

                  <div className="para">
                    <p>
                      Barter is the application where you can search million of
                      new items and exchange them with your old stuff, not just
                      that but also a facility of nearby purchasing and customer
                      support.
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-2 d-flex  flex-column align-items-center justify-content-end ">
                <div className="banner-img">
                  <Zoom>
                    <img src={BarterExchange2} alt="BarterExchange.png" />
                  </Zoom>
                </div>
              </div>
            </div>
            {/* <div className="row flex-column-reverse">
              <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end ">
                <div className="content">
                  <div className="heading">
                    <h1>Island Girl Game Idea</h1>
                    <span className="underline"></span>
                  </div>

                  <div className="para">
                    <p>
                      Island Girl Runner is a classic side-scrolling runner
                      wherein game users will proceed with their game character
                      (a Island Girl NFT product) picking up coins (to earn
                      rewards) on their way past monsters and obstacles as they
                      advance along a map.
                    </p>{" "}
                    <p>
                      Users will also grab power-ups that enhance their earning
                      power that can save their lives. This game is based on a
                      P2E model, and players will earn as they play a fun-filled
                      and motivating game. Island Girl is a game envisioned for
                      both, the Android and iOS, and is part of a wider plan to
                      extend action into the metaverse.
                    </p>
                    <p>
                      Island Girl was in search of a capable developer to build
                      its game to perfection.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-2 d-flex  flex-column align-items-center justify-content-end ">
                <div className="banner-img">
                  <img src={Islandgirl3} alt="Island girl image" />
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end ">
                <div className="content">
                  <div className="heading">
                    <h1>
                      Bartering and swaps are being accepted by buyers and
                      sellers in industries including vehicles, smartphones, and
                      home living items.
                    </h1>
                    <span className="underline barter-underline"></span>
                  </div>

                  <div className="para">
                    <p>
                      We embraced the ability of swapping and exchanging the
                      items. Stuff like automobile, construction, advertising
                      and media, printing, and retail industries. Our niche is
                      to exchange your old and vintage item to the brand new.
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-12 mt-2 d-flex  flex-column align-items-center justify-content-end ">
                <div className="banner-img">
                  <img src={BarterExchange3} alt="BarterExchange3.png" />
                </div>
              </div>
              <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end ">
                <div className="content">
                  <div className="heading">
                    <h1>Avail Options</h1>
                    <span className="underline barter-underline"></span>
                  </div>

                  <div className="para">
                    <p>
                      Gain the authority to hold the exchange options of your
                      choice.
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 mt-2 d-flex  flex-column align-items-center justify-content-end ">
                <div className="banner-img">
                  <img src={BarterExchange4} alt="BarterExchange3.png" />
                </div>
              </div>
              <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end ">
                <div className="content">
                  <div className="heading">
                    <h1>ChatBox</h1>
                    <span className="underline barter-underline"></span>
                  </div>

                  <div className="para ">
                    <p>
                      Our chat representatives supporting and assisting
                      customers 24/7. Sorting out all the queries with guiding
                      helplines
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5 ">
              <div className="col-lg-12 mt-2 d-flex  flex-column align-items-center justify-content-end ">
                <div className="banner-img">
                  <img src={BarterExchange5} alt="BarterExchange5.png" />
                </div>
              </div>
              <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end  ">
                <div className="content">
                  <div className="heading">
                    <h1>Nearby Exchange</h1>
                    <span className="underline barter-underline"></span>
                  </div>

                  <div className="para ">
                    <p>
                      By using our location detecting service now eligible you
                      with nearby exchange offers. We give you the picture of
                      whole map where you find all available swapping options.
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>

            <TechniCalities className="my-5" />

            <div className="row">
              <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end ">
                <div className="content">
                  <div className="heading">
                    <h1>NFTs</h1>
                    <span className="underline barter-underline"></span>
                  </div>

                  <div className="para">
                    <p>
                      Amazon, Beach, Norse gods, Pirate, sorcerer, and space.
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end ">
                <div className="content">
                  <div className="heading">
                    <h1>Marketplace</h1>
                    <span className="underline barter-underline"></span>
                  </div>

                  <div className="para">
                    <p>
                      Welcome to The marketplace! Here, you can see all of the
                      loveable Island Girl that are currently for sale by other
                      users. Interested in putting one of your MicroPets up for
                      sale? Head on over to your Inventory. Please note there is
                      a 2% fee paid on all transactions in Island Girl tokens at
                      time of listing.
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end ">
                <div className="content">
                  <div className="heading">
                    <h1>Token</h1>
                    <span className="underline barter-underline"></span>
                  </div>

                  <div className="para">
                    <p>
                      Island Girl leverages the BEP-1155 NFT standard, which
                      enables numerous benefits for its users. One of those core
                      benefits is the ability for users to buy multiple crates
                      with a single transaction fee and then pay just one
                      additional transaction fee to open all of them at once.
                    </p>{" "}
                    <p>
                      How does this add more value for the Island Girl token?
                      Well, the easier it is for users to buy more crates at
                      once the more volume will be sent through the Island Girl
                      App, further driving higher price action and utility. From
                      a marketplace perspective, users can even buy and sell
                      NFT's in stacks of their choosing!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 d-flex  flex-column align-items-start justify-content-end ">
                <div className="content">
                  <div className="heading">
                    <h1>Tokenomics</h1>
                    <span className="underline barter-underline"></span>
                  </div>

                  <div className="para">
                    <p>
                      Island Girl combines the power of reasonable buy and sell
                      taxes for the BSC space! Having portions of each
                      transaction added to liquidity ensures less price
                      volatility whereas the manual buyback is used to create
                      bullish momentum or defend key support areas. The game’s
                      marketing tax ensures not only a continuous stream of new
                      investors, but necessary funding.
                    </p>{" "}
                    <p>
                      Users buy NFT from Island Girl marketplace, and then they
                      will be playing the game while connecting their wallet.
                      The core concept of the game revolves around the idea of
                      creating a fun and engaging "Play to Earn" 2D endless
                      running game where anyone can earn coins through skilled
                      gameplay and contribution to the ecosystem. Successful
                      players who complete the game will be rewarded with the
                      collected coins directly to their wallets.
                    </p>
                  </div>
                </div>
              </div>
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

export default BarterExchange;
