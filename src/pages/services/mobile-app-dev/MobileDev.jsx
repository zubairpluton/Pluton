import React from "react";
import {
  ServiceBanner,
  TechServices,
  Footer,
  Header,
  Card,
  BlogSection,
  DevProcess,
} from "../../../components/index";
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
import {
  MobileAppServices,
  MobileAppDevProcess,
} from "../../../components/fake-data/TechServicesData";
function MobileAppDev() {
  let data = MobileAppServices;
  let devProcessdata = MobileAppDevProcess;
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
        title={`Custom Mobile App Development Company`}
        titleSmall="We build"
        para="Primary function mobile apps with your success in mind, delivering finesse through a refined process."
      />

      {/* ==================================custom-blockchain-services================== */}
      <section id="home-services">
        <div className="main blockchain-dev-sol">
          <div className="container">
            <div className="sec-padding">
              {/* <div className="line">
                <img src={lineImage} alt="" />
              </div> */}

              <div className="main-about main-services text-center">
                <TechServices
                  heading={"Mobile app development services"}
                  para={
                    "We guarantee excellent service because we have the best web and mobile app development team in the industry. With a grade of pure professionals, project completion is always on time and strictly adheres to coding standards."
                  }
                />

                <div className="main-services-card">
                  <div className="row gx-0">
                    {data.map((data, ind) => (
                      <Card
                        key={ind}
                        card_href={data.card_href}
                        card_title={data.card_title}
                        card_para={data.card_para}
                      />
                    ))}
                    {/* <div className="col-xlg-3 col-lg-6 col-md-6 col-sm-6 col-xsm-12">
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================================why-chose====================== */}
      {/* <section id="why-choose" className="blog-section">
        <div className="container">
          <div className="sec-padding">
            <div className="row">
              <div className="col-lg-12">
                <div className="main">
                  <div className="heading">
               
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
      </section> */}
      {/* ================================why-chose====================== */}
      <BlogSection
        heading={
          "Collaborate with a globally recognized mobile app development firm"
        }
        para1={
          "  According to estimates, the market for mobile application development services will be worth over $6 billion by 2023. Since we started our adventure in 2008, we have been at the forefront of American mobile app design."
        }
        para2={
          " We are known as one of the most desirable mobile app development businesses in the globe. Our mobile app designers, strategists, and developers are inspired by a passion for app design. Over this, people consider our mobile app services to be some of the finest."
        }
      />
      {/* ==================================Mobile-dev-process================== */}
      <section id="home-services">
        <div className="main dev-process blockchain-dev-sol">
          <div className="container">
            <div className="sec-padding">
              <div className="main-about main-services text-center">
                <TechServices
                  heading={"Application Development Process"}
                  para={
                    "Pluton is one of the leading providers of mobile app development, promises user-friendly, performance-driven, and lifestyle-oriented mobile apps. We develop mobile apps from creative ideas."
                  }
                />

                {/* {devProcessdata.map((data, ind) => (
                  <DevProcess
                    key={ind}
                    card_href={data.card_href}
                    card_title={data.card_title}
                    card_para={data.card_para}
                  />
                ))} */}

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
      <BlogSection
        heading={"Renowned Mobile App Development Company "}
        para1={
          "Considering that mobile applications sufficient material for around 58 %, it is crucial for your company to make an investment in one. Imagine the potential of combining your e-commerce site's large consumer base with a mobile app."
        }
        para2={
          "Pluton is a top-notch mobile app development company that stimulates you to achieve your goals. We consider your specific needs before working to design the ideal software solution! And it all begins with a solid strategy that not only establishes the aspects of your project's specifications but also thoroughly identifies and considers the volume and scope of programming necessary. This detailed strategy is compared to a constrained deadline to guarantee delivery on time."
        }
        para3={
          "We value each and every one of our customers and strive to elevate every interaction. Therefore, whatever kind of programme you want to create, we can create it from start to you."
        }
      />
      {/* ==================================blockchain-app-dev-service-stack================== */}
      <section id="home-services">
        <div className="slider-cards blockchain-dev-sol">
          <div className="container">
            <div className="sec-padding">
              <div className="main-about main-services text-center">
                <TechServices
                  heading={"Mobile app development – technology stack"}
                  para={
                    " We create mobile apps with scalable and tested technology stack to deliver apps par excellence."
                  }
                />

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
                              <h2>Language</h2>
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
                            <h2>Database</h2>
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
                            <h2> Framework</h2>
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
