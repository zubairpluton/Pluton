import React from "react";

import {
  ServiceBanner,
  TechServices,
  Footer,
  Card,
  BlogSection,
} from "../../../components/index";
import { Link } from "react-router-dom";
// import { lap1, lap2, lap3, lap4 } from "../../../assets/images";s
import Slider from "react-slick";
import "./software-dev.scss";
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
import { CustomSoftwareDevelopment } from "../../../components/fake-data/TechServicesData";
function SoftwareDev() {
  let data = CustomSoftwareDevelopment;
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
    <div id="web-dev">
      {/* =========================banner============ */}
      <ServiceBanner
        title={`Custom Software Development Service`}
        titleSmall="We develop innovative and industry based software systems"
        //         para="with cornerstone digital assets.
        //  Build your presence with superb designs
        // and functionality."
      />

      {/* ==================================custom-blockchain-services================== */}
      <section id="home-services">
        <div className="main blockchain-dev-sol">
          <div className="container">
            <div className="sec-padding">
              <div className="main-about main-services text-center">
                <TechServices
                  heading={"Services we offer Develop an efficient process"}
                  para={
                    "We developed a transparent and fast development process that encompasses everything from requirements analysis to post-release support"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===============================why-choose-us================ */}
      <BlogSection
        heading={"Why choose us"}
        para1={
          "Pluton is a company that offers software product development services to clients all around the world. Our abilities are extensive and flexible. In the great scale of things, our goal is to reinvent how people engage with technology by seeing novel opportunities in uncharted realms. To have an influence that lasts and goes far beyond the product, we want to change the DNA of entire businesses"
        }
      />
      {/* ==================================Mobile-dev-process================== */}
      <section id="home-services">
        <div className="main dev-process blockchain-dev-sol">
          <div className="container">
            <div className="sec-padding">
              <div className="main-about main-services text-center">
                <TechServices
                  heading={"Custom Software Development process"}
                  para={
                    "Custom apps are designed particularly through the software design process to fulfill the demands. To detect the glitches we follow the three step procedure:"
                  }
                />

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
                            <h2>Project Planning</h2>
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
                            <h2>UI/UX Design</h2>
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
        heading={"World-famous Custom Software Development Company"}
        para1={
          "Pluton was designed to ease the work of innovators and developers. We achieve this by continuously abstracting away work that adds little value and is redundant, while never restricting a developer's ability to assume total control. "
        }
        para2={
          " If you required a dynamic team for your company to support, develop and analyze the complete procedure of the Custom Software Development. With a team that will set up software delivery process for a bright future, take a firm market lead."
        }
      />
      {/* ==================================blockchain-app-dev-service-stack================== */}
      <section id="home-services">
        <div className="slider-cards blockchain-dev-sol">
          <div className="container">
            <div className="sec-padding">
              <div className="main-about main-services text-center">
                <TechServices
                  heading={"Custom Software development technology stack"}
                  para={
                    "Experience pure creativity, skill, and expertise in Technologies for Web Development."
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
                              <h2>
                                Frontend <br /> Development
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
                            <h2>Backend Development</h2>
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
                            <h2> Infrastructure</h2>
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

export default SoftwareDev;
