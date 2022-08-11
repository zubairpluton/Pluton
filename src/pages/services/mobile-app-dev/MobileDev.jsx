import React from "react";
import { Footer, Header } from "../../../components";
import { ServiceBanner } from "../../../components/index";
import { Link } from "react-router-dom";
// import { lap1, lap2, lap3, lap4 } from "../../../assets/images";s
import Slider from "react-slick";
import "./mobile-dev.scss";
import {
  BlockchainIcon,
  BlockchainIconWhite,
  lineImage,
  Cardano,
  Quorum,
  Hyperledger,
  Plan,
  Design,
  Development,
} from "../../../assets/images/index";

function MobileAppDev() {
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
    <div id="mobile-app">
      {/* =========================banner============ */}
      <ServiceBanner
        title={`Full-stack mobile app development company`}
        titleSmall="Delivering Sophistication through a"
        para="Refined Process — We build purpose-driven mobile apps with your success in mind."
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
                    Mobile app <br /> development services
                  </h1>
                  <span className="underline"></span>
                </div>

                <div className="para">
                  <p>
                    We promise you top-notch service as we have the
                    best-in-class web and mobile app development team. With a
                    grade of pure professionals, project delivery is always on
                    schedule with strict adherence to coding standards.
                  </p>{" "}
                </div>

                <div className="main-services-card">
                  <div className="row gx-0">
                    <div className="col-xlg-3 col-lg-6 col-md-6 col-sm-6 col-xsm-12">
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
                              App <br /> Development
                            </h2>
                          </div>
                          <div className="service-card-para">
                            <p>
                              Develop visually pleasing apps optimized to
                              swiftly grow your global business revenue.
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-xlg-3 col-lg-6 col-md-6 col-sm-6 col-xsm-12">
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
                            Blockchain <br /> Development
                          </h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            Be it cryptocurrency development or an ICO launch,
                            our blockchain experts create secure decentralized
                            apps.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-3 col-lg-6 col-md-6 col-sm-6 col-xsm-12">
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
                            Augmented <br /> Reality
                          </h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            Let your customers experience the beauty and power
                            of AR, VR and motion capture technologies.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-3 col-lg-6 col-md-6 col-sm-6 col-xsm-12">
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
                            Game
                            <br /> Development
                          </h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            Build spectacular 2D and 3D multiplayer games for
                            mobile devices powered by addictive gameplay.
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
      <section id="why-choose" className="blog-section">
        <div className="container">
          <div className="sec-padding">
            <div className="row">
              <div className="col-lg-12">
                <div className="main">
                  <div className="heading">
                    {/* <h6>Services</h6> */}
                    <h1>
                      Work with a globally-recognized <br />
                      mobile app development company
                    </h1>
                    <span className="underline"></span>
                  </div>
                  <div className="para">
                    <p>
                      Mobile application development services hold a gigantic
                      chunk in the economy, estimated to be valued over $6
                      billion by 2023. We have been in the frontline of mobile
                      app design in USA since we began our journey in 2008.
                    </p>
                    <p>
                      We are recognized as one of the world’s most desired
                      mobile app development companies. Our mobile app
                      developers, designers, and strategists are fueled with
                      creativity and passion for app design. This is why our
                      mobile app services are recognized among the best in the
                      industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================Mobile-dev-process================== */}
      <section id="home-services">
        <div className="main dev-process">
          <div className="container">
            <div className="sec-padding">
              <div className="line">
                <img src={lineImage} alt="" />
              </div>

              <div className="main-about main-services text-center">
                <div className="heading">
                  {/* <h6>Services</h6> */}
                  <h1>
                    App
                    <br /> Development Process
                  </h1>
                  <span className="underline"></span>
                </div>

                <div className="para">
                  <p>
                    Being among the top mobile app development companies, Cubix
                    guarantees intuitive mobile apps that are
                    performance-oriented and a lifestyle toolkit. We convert
                    untapped ideas into mobile apps!
                  </p>{" "}
                </div>

                <div className="main-services-card">
                  <div className="row gx-0 my-5">
                    <div className="col-xlg-4 col-lg-4 col-md-12 col-sm-6 col-xsm-12">
                      <div className="dev-process-box">
                        <div className="box-image">
                          <img src={Plan} className="img" alt="BlockChain" />
                        </div>
                        <div className="box-border-1"></div>
                        <div className="box-content">
                          <div className="box-heading">
                            <h2>Plan</h2>
                          </div>
                          <div className="box-para">
                            <p>
                              Business analysis <br /> Documenting
                              specifications Preparing wireframess Getting
                              client approval
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-12 col-sm-6 col-xsm-12">
                      <div className="dev-process-box">
                        <div className="box-image">
                          <img src={Design} className="img" alt="BlockChain" />
                        </div>
                        <div className="box-border-2"></div>
                        <div className="box-content">
                          <div className="box-heading">
                            <h2>Design</h2>
                          </div>
                          <div className="box-para">
                            <p>
                              Crafting app prototype <br /> Making changes
                              Getting client approval Implementing feedback
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-12 col-sm-6 col-xsm-12">
                      <div className="dev-process-box">
                        <div className="box-image">
                          <img
                            src={Development}
                            className="img"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="box-border-3"></div>
                        <div className="box-content">
                          <div className="box-heading">
                            <h2>Development</h2>
                          </div>
                          <div className="box-para">
                            <p>
                              Development strategy <br /> Testing strategy
                              Product development Product release
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
        </div>
      </section>
      {/* ================================why-chose====================== */}
      <section id="why-choose" className="blog-section">
        <div className="container">
          <div className="sec-padding">
            <div className="row">
              <div className="col-lg-12">
                <div className="main">
                  <div className="heading">
                    {/* <h6>Services</h6> */}
                    <h1>
                      World-famous mobile application <br /> development company
                    </h1>
                    <span className="underline"></span>
                  </div>
                  <div className="para">
                    <p>
                      Mobile apps indeed hold a significant chunk of the market,
                      currently (about 58%), making it important for your
                      business to invest in one. If you have a wide customer
                      base from your e-commerce website, imagine the power of
                      pairing that with a mobile app!
                    </p>
                    <p>
                      Cubix is a popular mobile app development company that
                      helps you achieve your goals. We examine your particular
                      need and work to develop your app solution to perfection!
                      And it all starts with a rock-solid plan that not only
                      sets the parameters of your project features, but also
                      minutely defines and strategizes the length and breadth of
                      programming required. This concrete plan is matched
                      against a strict timeline to ensure delivery on time.
                    </p>
                    <p>
                      Every customer is important to us, as we believe in taking
                      everyone who approaches us to the next level. So, no
                      matter what kind of app you are desirous of building; we
                      can build anything for you from scratch.
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
                    Mobile App Development <br /> – Technology Stack
                  </h1>
                  <span className="underline"></span>
                </div>

                <div className="para">
                  <p>
                    We create mobile apps with scalable and tested technology
                    stack to deliver apps par excellence.
                  </p>{" "}
                </div>

                <div className="main-services-card">
                  <div className="row gx-0">
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

export default MobileAppDev;
