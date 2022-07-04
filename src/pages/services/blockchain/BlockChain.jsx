import React from "react";
import { Footer, Header } from "../../../components";
import { ServiceBanner } from "../../../components/index";
import { Link } from "react-router-dom";
// import { lap1, lap2, lap3, lap4 } from "../../../assets/images";s
import Slider from "react-slick";
import "./blockchain.scss";
import {
  BlockchainIcon,
  BlockchainIconWhite,
  lineImage,
  Cardano,
  Quorum,
  Hyperledger,
} from "../../../assets/images/index";

function BlockChain() {
  var settings = {
    dots: true,
    infinite: true,
    // fade: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="blockchain">
      {/* =========================banner============ */}
      <ServiceBanner
        title={`Value-Driven Custom
                              Blockchain App Development Services`}
        titleSmall="We provide simple and seamless"
        para="blockchain
                    app development solutions nurtured by innovation
                        and inspired by the latest global practices."
      />

      {/* ==================================custom-blockchain-services================== */}
      <section id="home-services">
        <div className="main">
          <div className="container">
            <div className="sec-padding">
              <div className="line">
                <img src={lineImage} alt="" />
              </div>

              <div className="main-about main-services text-center">
                <div className="heading">
                  {/* <h6>Services</h6> */}
                  <h1>
                    Custom Blockchain <br /> Development Solutions We Offer
                  </h1>
                  <span className="underline"></span>
                </div>

                <div className="para">
                  <p>
                    Enjoy heightened security, efficiency, and transparency.
                    Gain the very best in blockchain application development,
                    integration and adaptation from the top Blockchain
                    Development Company in USA.
                  </p>{" "}
                </div>

                <div className="main-services-card">
                  <div className="row gx-0">
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <Link to="/blockchain-dev">
                        <div className="card">
                          <div className="service-card-image">
                            <img
                              src={BlockchainIcon}
                              className="black"
                              alt="BlockChain"
                            />
                            <img
                              src={BlockchainIconWhite}
                              className="white"
                              alt="BlockChain"
                            />
                          </div>
                          <div className="service-card-heading">
                            <h2>
                              Blockchain <br /> Consulting
                            </h2>
                          </div>
                          <div className="service-card-para">
                            <p>
                              Brainstorm and ideate <br /> blockchain solutions
                              for fintech, healthcare, telecom, real estate, and
                              media.
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>
                            Co Development <br /> Model
                          </h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            Collaborative solutions <br /> across multiple
                            technologies fusing R&D and value-chain
                            participation strategies.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>
                            {" "}
                            Smart contract <br /> development{" "}
                          </h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            Build secure and reliable <br /> crypto wallets
                            compatible with multiple cryptocurrencies.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>
                            Blockchain <br /> Decentralization
                          </h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            Ensure strict security with a <br /> decentralized
                            setup laid out by experts for every
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>
                            E-Wallet <br /> Platforms
                          </h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            Robust and secure platforms <br /> and e-wallets
                            built under one roof to serve various
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>
                            Blockchain cloud <br /> services
                          </h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            Access blockchain solutions <br /> from anywhere
                            with availability across multiple technologies.
                          </p>
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
      {/* ================================why-chose====================== */}
      <section id="why-choose">
        <div className="container">
          <div className="sec-padding">
            <div className="row">
              <div className="col-lg-12">
                <div className="main">
                  <div className="heading">
                    {/* <h6>Services</h6> */}
                    <h1>
                      Why choose Our Blockchain <br /> Development Services?
                    </h1>
                    <span className="underline"></span>
                  </div>
                  <div className="para">
                    <p>
                      Accurate data-driven consultation to develop and implement
                      your blockchain development projects with ease.{" "}
                    </p>
                    <p>
                      We harness scalability with niche expertise through our
                      time-tested development process. Our Blockchain app
                      development services offer data-driven solutions to match
                      your business needs, whether you’re a startup or
                      enterprise. We help you secure and validate ownership of
                      your digital assets and decentralize your network to
                      manage your data with smart contracts. Our custom
                      blockchain app development solutions fit businesses
                      searching for optimum scalability in fintech, e-commerce,
                      gaming, financial institutions, IoT, education, retail,
                      health, and much more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================blockchain-dev-process================== */}
      <section id="home-services">
        <div className="main">
          <div className="container">
            <div className="sec-padding">
              <div className="line">
                <img src={lineImage} alt="" />
              </div>

              <div className="main-about main-services text-center">
                <div className="heading">
                  {/* <h6>Services</h6> */}
                  <h1>
                    Blockchain <br /> Development Process
                  </h1>
                  <span className="underline"></span>
                </div>

                <div className="para">
                  <p>
                    Leverage our refined process - Run rapid tests and achieve
                    product maturity at the earliest stages to transform your
                    ideas into scalable and robust applications. Our tailored
                    process is optimized to meet existing blockchain industry
                    changes.
                  </p>{" "}
                </div>

                <div className="main-services-card">
                  <div className="row gx-0">
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <Link to="/blockchain-dev">
                        <div className="card">
                          <div className="service-card-image">
                            <img
                              src={BlockchainIcon}
                              className="black"
                              alt="BlockChain"
                            />
                            <img
                              src={BlockchainIconWhite}
                              className="white"
                              alt="BlockChain"
                            />
                          </div>
                          <div className="service-card-heading">
                            <h2>
                              Blockchain <br /> Consulting
                            </h2>
                          </div>
                          <div className="service-card-para">
                            <p>
                              We identify your organization’s blockchain
                              potential. From market research, project
                              feasibility assessment and blockchain platform
                              analysis, to preferred tool selection and feature
                              prioritization, we cover every area required.
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>Experience and Design</h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            Our engaging designs produce seamless user
                            experience, and are based on system blueprint design
                            comprising technical components. Moreover, user
                            preferences play a critical role in the eventual
                            technical design.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>
                            {" "}
                            Enterprise <br /> Blockchain
                          </h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            From ideation to design and development, our
                            blockchain developers formulate and build
                            enterprise-grade applications that are robust and
                            ready to implement for maximum ROI (Return on
                            Investment).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>Blockchain Deployement</h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            Access the platform you need at the right stage to
                            harness the true power of blockchain technology. Our
                            development team deploys permissioned and public
                            blockchain in your cloud environment too.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>Blockchain Maintenance</h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            We give you peace of mind with our monitoring system
                            through support and maintenance for your OS release,
                            3rd party upgrades, and new releases. We stand by
                            you and help you tackle any amount of minor and
                            critical issues.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>
                            Migration and <br /> Updates
                          </h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            We move your existing operation to the blockchain,
                            and we produce a roadmap that includes migration,
                            testing, and updation to ensure your business
                            processes keep running and don't suffer any
                            downtime.
                          </p>
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
      {/* ================================why-chose====================== */}
      <section id="why-choose">
        <div className="container">
          <div className="sec-padding">
            <div className="row">
              <div className="col-lg-12">
                <div className="main">
                  <div className="heading">
                    {/* <h6>Services</h6> */}
                    <h1>
                      Why is Blockchain the Future <br /> of Hybrid Projects?
                    </h1>
                    <span className="underline"></span>
                  </div>
                  <div className="para">
                    <p>
                      Security is always the number one reason enterprises opt
                      for custom blockchain application development solutions
                      and blockchain app development company A major pain point
                      when it comes to the future of blockchain usage is
                      scalability. The idea of hybrid solutions can solve many
                      issues related to scalability, a traditionally known
                      limitation.
                    </p>
                    <p>
                      A fully functional hybrid blockchain seamlessly
                      integrating a public chain with a private network is a
                      tremendous achievement. A hybrid blockchain comprises a
                      permissioned blockchain with a public blockchain, allowing
                      entities to enjoy secure background transactions with
                      associates while allowing consumers to access product
                      information on an open ledger.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================blockchain-app-dev-service-stack================== */}
      <section id="home-services">
        <div className="blockchain-app">
          <div className="container">
            <div className="sec-padding">
              <div className="line">
                <img src={lineImage} alt="" />
              </div>

              <div className="main-about main-services text-center">
                <div className="heading">
                  {/* <h6>Services</h6> */}
                  <h1>
                    Blockchain App Development <br /> – Technology Stack
                  </h1>
                  <span className="underline"></span>
                </div>

                <div className="para">
                  <p>
                    We offer Custom Blockchain development service with scalable
                    and tested technologies to deliver excellence.
                  </p>{" "}
                </div>

                <div className="main-services-card">
                  <div className="row gx-0 p-5 m-1">
                    <Slider {...settings}>
                      <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                        <Link to="/blockchain-dev">
                          <div className="card">
                            <div className="service-card-image">
                              <img src={Cardano} alt="BlockChain" />
                            </div>
                            <div className="service-card-heading">
                              <h2>
                                Blockchain <br /> Consulting
                              </h2>
                            </div>
                            <div className="service-card-para">
                              <p>
                                We identify your organization’s blockchain
                                potential. From market research, project
                                feasibility assessment and blockchain platform
                                analysis, to preferred tool selection and
                                feature prioritization, we cover every area
                                required.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                        <div className="card">
                          <div className="service-card-image">
                            <img src={Quorum} alt="BlockChain" />
                          </div>
                          <div className="service-card-heading">
                            <h2>Experience and Design</h2>
                          </div>
                          <div className="service-card-para">
                            <p>
                              Our engaging designs produce seamless user
                              experience, and are based on system blueprint
                              design comprising technical components. Moreover,
                              user preferences play a critical role in the
                              eventual technical design.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                        <div className="card">
                          <div className="service-card-image">
                            <img src={Hyperledger} alt="BlockChain" />
                          </div>
                          <div className="service-card-heading">
                            <h2>
                              {" "}
                              Enterprise <br /> Blockchain
                            </h2>
                          </div>
                          <div className="service-card-para">
                            <p>
                              From ideation to design and development, our
                              blockchain developers formulate and build
                              enterprise-grade applications that are robust and
                              ready to implement for maximum ROI (Return on
                              Investment).
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                        <Link to="/blockchain-dev">
                          <div className="card">
                            <div className="service-card-image">
                              <img src={Cardano} alt="BlockChain" />
                            </div>
                            <div className="service-card-heading">
                              <h2>
                                Blockchain <br /> Consulting
                              </h2>
                            </div>
                            <div className="service-card-para">
                              <p>
                                We identify your organization’s blockchain
                                potential. From market research, project
                                feasibility assessment and blockchain platform
                                analysis, to preferred tool selection and
                                feature prioritization, we cover every area
                                required.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                        <div className="card">
                          <div className="service-card-image">
                            <img src={Quorum} alt="BlockChain" />
                          </div>
                          <div className="service-card-heading">
                            <h2>Experience and Design</h2>
                          </div>
                          <div className="service-card-para">
                            <p>
                              Our engaging designs produce seamless user
                              experience, and are based on system blueprint
                              design comprising technical components. Moreover,
                              user preferences play a critical role in the
                              eventual technical design.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                        <div className="card">
                          <div className="service-card-image">
                            <img src={Hyperledger} alt="BlockChain" />
                          </div>
                          <div className="service-card-heading">
                            <h2>
                              {" "}
                              Enterprise <br /> Blockchain
                            </h2>
                          </div>
                          <div className="service-card-para">
                            <p>
                              From ideation to design and development, our
                              blockchain developers formulate and build
                              enterprise-grade applications that are robust and
                              ready to implement for maximum ROI (Return on
                              Investment).
                            </p>
                          </div>
                        </div>
                      </div>
                    </Slider>
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

export default BlockChain;
