import React from "react";
import {
  Footer,
  Header,
  BlogSection,
  TechServices,
  ServiceBanner,
  Card,
} from "../../../components";

import { Link } from "react-router-dom";
// import { lap1, lap2, lap3, lap4 } from "../../../assets/images";s
import Slider from "react-slick";
import "./blockchain.scss";
import { Cardano, Quorum, Hyperledger } from "../../../assets/images/index";
import {
  BlockchainServices,
  BlockchainDevProcess,
} from "../../../components/fake-data/TechServicesData";

function BlockChain() {
  let data = BlockchainServices;
  let devProcessdata = BlockchainDevProcess;
  var settings = {
    dots: true,
    infinite: true,
    // fade: true,
    speed: 500,
    autoPlay: true,
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
        title={`Function-based system of Blockchain App Development Services`}
        titleSmall="We provide consistency and continuity"
        para="Blockchain app development solutions that are nourished by creativity and influenced by the most recent international standards."
      />

      {/* ==================================custom-blockchain-services================== */}
      <section id="home-services">
        <div className="blockchain-dev-sol">
          <div className="container">
            <div className="sec-padding">
              <div className="main-about main-services text-center">
                <TechServices
                  heading={"Custom Blockchain Development Solutions We Offer "}
                  para={
                    "Enjoy heightened security, efficiency, and transparency. Gain the very best in blockchain application development, integration and adaptation from the top Blockchain Development Company in USA."
                  }
                />
                <div className="tech-services">
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
                      {/* <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
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
                            potential. From market research, project feasibility
                            assessment and blockchain platform analysis, to
                            preferred tool selection and feature prioritization,
                            we cover every area required.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div> */}
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
        id="why-choose"
        heading={"Why choose Our Blockchain Development Services?"}
        para1={
          "  Accurate data-driven consultation to develop and implement your blockchain development projects with ease."
        }
        para2={
          "We harness scalability with niche expertise through our time-tested development process. Our Blockchain app development services offer data-driven solutions to match your business needs, whether you’re a startup or enterprise. We help you secure and validate ownership of your digital assets and decentralize your network to  manage your data with smart contracts. Our custom blockchain app development solutions fit businesses searching for optimum scalability in fintech, e-commerce, gaming, financial institutions, IoT, education, retail,  health, and much more."
        }
      />
      {/* ==================================blockchain-dev-process================== */}
      <section id="home-services">
        <div className="blockchain-dev-sol">
          <div className="container">
            <div className="sec-padding">
              <div className="main-about main-services text-center">
                <TechServices
                  heading={"Blockchain Development Process"}
                  para={
                    "Leverage our refined process - Run rapid tests and achieve product maturity at the earliest stages to transform your ideas into scalable and robust applications. Our tailored process is optimized to meet existing blockchain industry changes."
                  }
                />

                {/* <div className="line">
                <img src={LineBlack} alt="" />
              </div> */}

                {/* <div className="main-about main-services text-center"> */}
                <div className="main-services-card">
                  <div className="row gx-0">
                    {devProcessdata.map((data, ind) => (
                      <Card
                        key={ind}
                        card_href={data.card_href}
                        card_title={data.card_title}
                        card_para={data.card_para}
                      />
                    ))}
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================================why-chose====================== */}
      <BlogSection
        heading={"Why is Blockchain the Future of Hybrid Projects?"}
        para1={
          " Security is always the number one reason enterprises opt for custom blockchain application development solutions and blockchain app development company A major pain point when it comes to the future of blockchain usage is scalability. The idea of hybrid solutions can solve many issues related to scalability, a traditionally known limitation."
        }
        para2={
          "  A fully functional hybrid blockchain seamlessly integrating a public chain with a private network is a tremendous achievement. A hybrid blockchain comprises a permissioned blockchain with a public blockchain, allowing entities to enjoy secure background transactions with associates while allowing consumers to access product information on an open ledger."
        }
      />
      {/* ==================================blockchain-app-dev-service-stack================== */}
      <section id="home-services">
        <div className="slider-cards blockchain-dev-sol">
          <div className="container">
            <div className="sec-padding">
              <div className="main-about main-services text-center">
                <TechServices
                  heading={"Blockchain App Development - Technology Stack"}
                  para={
                    "We offer Custom Blockchain development service with scalable and tested technologies to deliver excellence."
                  }
                />

                <div className="main-services-card">
                  {/* <div className="row gx-0 p-5 m-1"> */}
                  <Slider {...settings}>
                    <div>
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
                              analysis, to preferred tool selection and feature
                              prioritization, we cover every area required.
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div>
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
                            experience, and are based on system blueprint design
                            comprising technical components. Moreover, user
                            preferences play a critical role in the eventual
                            technical design.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
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
                    <div>
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
                              analysis, to preferred tool selection and feature
                              prioritization, we cover every area required.
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div>
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
                            experience, and are based on system blueprint design
                            comprising technical components. Moreover, user
                            preferences play a critical role in the eventual
                            technical design.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
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
                  {/* </div> */}
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
