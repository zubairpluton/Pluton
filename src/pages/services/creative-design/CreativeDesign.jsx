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
import "./creative-design.scss";
import {
  Cardano,
  Quorum,
  Hyperledger,
  Plan,
  Design,
  Development,
} from "../../../assets/images/index";
import { CreativeDesignServices } from "../../../components/fake-data/TechServicesData";
function CreativeDesign() {
  let data = CreativeDesignServices;
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
        title={`Creative Design Development`}
        titleSmall="Lead your company "
        para="With our effective team-based approach to creative design and development provides organizations with top-tier solutions."
      />

      {/* ==================================custom-blockchain-services================== */}
      <section id="home-services">
        <div className="main blockchain-dev-sol">
          <div className="container">
            <div className="sec-padding">
              <div className="main-about main-services text-center">
                <TechServices
                  heading={"Why engage Pluton Creative Design Service?"}
                  para={
                    "Pluton can handle all aspects of your illustration needs, including logo design, campaign design, and company profile design, as well as E-book design. We remain on top of the latest trends to make sure your finished product is creative and only one. Our approach is built on interaction, collaboration, and the delivery of quality of visuals that will make your company flourish."
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
          "In order to make your engagement as easy as possible, our methodology assists you in coordinating your strategy with your creative and the campaign. We'll collaborate closely with your media agency or social media partner to make sure we're testing as much as we can and closely monitoring the ongoing roll-out of the assets."
        }
      />
      {/* ==================================Mobile-dev-process================== */}
      <section id="home-services">
        <div className="main dev-process blockchain-dev-sol">
          <div className="container">
            <div className="sec-padding">
              <div className="main-about main-services text-center">
                <TechServices
                  heading={"Creative Desiging process"}
                  para={
                    "Our three-step procedure guarantees complete transparency for all of your campaigns and initiatives."
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
                              Setting measurable objectives Identifying
                              deliverables Scheduling Planning tasks
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
                            <h2>Designing</h2>
                          </div>
                          <div className="box-para">
                            <p>
                              Empathize user requirements. Define roles of users
                              Generate concepts. Prototype come with solutions.
                              Test ideas out.
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
                              Discovery <br /> Issuance Initiate Quality
                              Assurance Review and report
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
        heading={"Worldwide Famous Creative Designing Company"}
        para1={
          "Our company has top-notch designers who answered the transformative questions explored by the heart, body, and intellect through the creative process. In order to reach your target audience's emotions and sentiments, it's essential to remain up to date on the most recent creative trends. Although most communication is dreary and forgettable in reality, we work hard to build iconic scenes."
        }
      />
      {/* ==================================blockchain-app-dev-service-stack================== */}
      <section id="home-services">
        <div className="slider-cards blockchain-dev-sol">
          <div className="container">
            <div className="sec-padding">
              <div className="main-about main-services text-center">
                <TechServices
                  heading={"Creative Designing technology"}
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

export default CreativeDesign;
