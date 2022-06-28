import React from "react";
import { Footer, Header } from "../../components";
import { CareerBanner } from "../career/Career";
import "./aboutus.scss";

function AboutUs() {
  return (
    <div id="about">
      {/* =========================banner============ */}
      <section id="banner">
        <CareerBanner
          page="about"
          para={`WE’RE AN INDEPENDENT DIGITAL AGENCY WITH A TEAM OF DESIGNERS & CREATIVE DEVELOPERS WHO LOVE IN CRAFTING DIGITAL EXPERIENCES`}
        />
      </section>
      <section id="about-content">
        <div className="container">
          <div className="sec-padding">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-about-para">
                  <p>
                    Pluton’s establishment was laid in 2018. Our experience
                    started fully intent on utilizing state-of-the-art
                    innovation to carry receptiveness and trustworthiness to
                    organization processes{" "}
                  </p>
                  <p>
                    Pluton’s group was created as extra innovative devotees
                    joined the organization. We have faith in framing
                    organizations as opposed to clients to associate our vision
                    with theirs and pursue a shared objective.
                  </p>{" "}
                  <p>
                    With capability, inventiveness, and advancement, we
                    understand your vision and assist you with transforming it
                    into the real world. By incorporating innovation into
                    corporate cycles and improving and scaling specialized
                    items, we desire to increment dependence.
                  </p>{" "}
                  <p>
                    Pluton is one of the most mind-blowing innovative and
                    technological services suppliers across the globe. We accept
                    to use of the best solutions and technical answers for
                    resolving your concerns. You can entrust Pluton Limited with
                    your dreams, as our group is gifted and experienced and
                    endeavors to give flawlessness. We’ve cooperated with the
                    best to carry best-in-class advances to our clients.
                  </p>{" "}
                  <p>
                    We have obliged many organizations in web and app
                    development, Games advancement, NFTs, Blockchain and ICO,
                    and so forth. Whether it is a CMS Web plan and Software
                    improvement or custom PHP advancement, WordPress improvement
                    or internet business web advancement, SEO or SMM, Android
                    App improvement, or iOS application improvement, or it is a
                    coin and NFTs by utilizing Ethereum or Solana. we have you
                    covered! However, all of our prosperity would be unwarranted
                    on the off chance that it was not so much for our organizer
                    and founders, Ajaz Ali Agha, and his prime supporter,
                    cofounder Arsalan Shahzad. It is their soul of advancement
                    and pushing the limits for Pluton which fills in as our most
                    noteworthy inspiration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-lg-12">
                <div className="heading">
                  <h2>Future Perfect, Full Service, and Full Stack</h2>
                  <hr className="line" />
                </div>
                <div className="para">
                  <p>
                    You’re putting away more than cash – it’s additionally
                    energy, knowledge, brand, and the extending capability of
                    your business. Pluton interprets this interest into a
                    significant effect for yourself as well as your crowd.
                  </p>
                  <p>
                    Everything under one rooftop implies less gambling and a
                    durable group to guarantee positive progress. From item
                    system to item plan to full-stack designing, Pluton handles
                    each part of advanced item improvement so your knowledge and
                    insight bring about more than an adequate award.
                  </p>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-lg-12">
                <div className="heading">
                  <h2>Exact Delivery</h2>
                  <hr className="line" />
                </div>
                <div className="para">
                  <p>
                    Our groups never think twice about conveying the total
                    arrangement of products and solutions we guaranteed, when we
                    guaranteed.
                  </p>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-lg-12">
                <div className="heading">
                  <h2>Talented Personnel</h2>
                  <hr className="line" />
                </div>
                <div className="para">
                  <p>
                    Frameworks Limited’s specialized and business experts give
                    imaginative thoughts, profound ability, and the will to
                    succeed. Our group exceeds everyone’s expectations to give
                    absolute fulfillment. Your satisfaction is generally our
                    chief need.
                  </p>
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

export default AboutUs;
