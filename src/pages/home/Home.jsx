import React from "react";
import "./home.scss";
import { Header } from "../../components/index";
import bannerImg from "../../assets/images/banner/banner-1.png";
import bannerBackgroundImg from "../../assets/images/banner/banner-1-background.png";
import lap1 from "../../assets/images/portfolio/lap1.png";
import lap2 from "../../assets/images/portfolio/lap2.png";
import lap3 from "../../assets/images/portfolio/lap3.png";
import lap4 from "../../assets/images/portfolio/lap4.png";
import pluton from "../../assets/images/portfolio/pluton.png";
import character from "../../assets/images/portfolio/character.png";
function Home() {
  return (
    <div id="home">
      {/* ==============================section-banner========================== */}
      <section id="banner">
        <Header />
        <div className="main-banner">
          <div className="banner-container">
            <div className="sec-padding">
              <div className="row">
                <div className="col-md-6">
                  <div className="main-banner-content">
                    <div className="content">
                      <h2>One of the Top</h2>
                      <h1>Blockchain</h1>
                      <h2>Company at your disposal</h2>
                    </div>
                    <div className="banner-btn">
                      <button className="btn btn-primary ">Get Quote</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="main-banner-image">
                    <div className="image text-center">
                      <img
                        src={bannerBackgroundImg}
                        alt="banner-background-image"
                        className="banner-background-img"
                      />
                      <img
                        src={bannerImg}
                        alt="banner-image"
                        className="banner-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============================section-about========================== */}
      <section id="home-about">
        <div className="main">
          <div className="container">
            <div className="sec-padding">
              <div className="line">
                <div className="straight-line"></div>
                <span className="ellipse"></span>
              </div>

              <div className="main-about text-center">
                <div className="heading">
                  <h6>About</h6>
                  <h1>Providing Assistance with Excellence!</h1>
                </div>

                <div className="para">
                  <p>
                    Pluton’s establishment was laid in 2018. Our experience
                    started determined to utilize state-of-the-art innovation to{" "}
                    <br />
                    carry transparency and trustworthiness to organization
                    processes.
                  </p>{" "}
                  <p>
                    {" "}
                    Pluton’s group was created as extra innovative aficionados
                    joined the organization. We have faith in framing <br />
                    associations as opposed to clients to interface our vision
                    with theirs and pursue a shared objective.
                  </p>{" "}
                  <p>
                    With capability, imagination, and advancement, we fathom
                    your vision and assist you with transforming it into the{" "}
                    <br />
                    real world by coordinating innovation into corporate cycles
                    and upgrading and scaling specialized items. We desire{" "}
                    <br /> to increment dependence.
                  </p>{" "}
                  <p>
                    Pluton is one of the most mind-blowing innovative
                    administrations suppliers across the globe. We accept to use
                    of <br /> the best mechanical answers for resolving your
                    concerns. You can entrust Pluton Limited with your dreams,
                    as our <br />
                    group is talented and experienced and endeavors to give
                    flawlessness. We’ve joined forces with the best to carry out{" "}
                    <br />
                    cutting edge innovations to our clients.{" "}
                  </p>
                  <p>
                    We have obliged a few organizations in web and application
                    improvement, Games advancement, NFTs, Blockchain <br /> and
                    ICO, and so forth whether it is a CMS Web plan and Software
                    improvement or custom PHP advancement, <br /> WordPress
                    improvement or web-based business web improvement, SEO or
                    SMM, Android App improvement, or iOS <br /> application
                    advancement, or it is a coin and NFTs by utilizing Ethereum
                    or Solana. We have you covered!
                  </p>
                </div>

                <div className="about-btn">
                  <button className="btn home-about-btn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============================section-portfolio========================== */}
      <section id="home-portfolio">
        <div className="main">
          <div className="banner-container">
            <div className="sec-padding">
              <div className="main-portfolio">
                <div className="row">
                  <div className="col-md-2">
                    <div className="tabbing-link">
                      <div className="heading">
                        <h1>Our Featured Portfolio</h1>
                        <span className="underline"></span>
                      </div>
                      <div className="links">
                        <ul>
                          <li>
                            <a href="#">All</a>
                          </li>
                          <li>
                            <a href="#">Static Website</a>
                          </li>
                          <li>
                            <a href="#">Responsive Website</a>
                          </li>
                          <li>
                            <a href="#">Custom Website</a>
                          </li>
                          <li>
                            <a href="#">Game</a>
                          </li>
                          <li>
                            <a href="#">Video</a>
                          </li>
                          <li>
                            <a href="#">Logo Design</a>
                          </li>
                          <li>
                            <a href="#">Character Design</a>
                          </li>
                          <li>
                            <a href="#">Case Studyes</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="tabbing-img">
                      <div className="row gx-0">
                        <div className="col-md-5 m-0 p-0">
                          <div className="tabbing-card">
                            <img
                              src={lap1}
                              alt="portfolio-images"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="col-md-5  m-0 p-0">
                          <div className="tabbing-card">
                            <img
                              src={lap2}
                              alt="portfolio-images"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="col-md-2 m-0 p-0">
                          <div className="tabbing-card">
                            <img
                              src={pluton}
                              alt="portfolio-images"
                              className="w-100"
                            />
                          </div>
                        </div>

                        <div className="col-md-2 m-0 p-0">
                          <div className="tabbing-card">
                            <img
                              src={character}
                              alt="portfolio-images"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="col-md-5 m-0 p-0">
                          <div className="tabbing-card">
                            <img
                              src={lap3}
                              alt="portfolio-images"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="col-md-5 m-0 p-0">
                          <div className="tabbing-card">
                            <img
                              src={lap4}
                              alt="portfolio-images"
                              className="w-100"
                            />
                          </div>
                        </div>
                      </div>
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
}

export default Home;
