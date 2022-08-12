import {
  Apple,
  Android,
  Flutter,
  Reactnative,
} from "../../assets/images/index";

const TechWeWork = () => {
  return (
    <section id="home-technologies" className="tech-we-work">
      <div className="main">
        <div className="case-container">
          <div className="sec-padding">
            <div className="main-portfolio">
              <div className="row">
                <div className="col-md-12 d-flex align-items-sm-end">
                  <div className="heading">
                    <h1>
                      Technologies
                      <br /> we work with
                    </h1>

                    <span className="underline"></span>
                  </div>
                </div>
                <div className="tech-icons-main">
                  <div className="col-md-12 pb-3">
                    <div className="main-technical-icons">
                      <div className="tech-icons">
                        <img src={Apple} alt="" />
                        <h4>IOS</h4>
                      </div>
                      <div className="tech-icons">
                        <img src={Android} alt="" />
                        <h4>Android</h4>
                      </div>
                      <div className="tech-icons">
                        <img src={Flutter} alt="" />
                        <h4>Flutter</h4>
                      </div>
                      <div className="tech-icons">
                        <img src={Reactnative} alt="" />
                        <h4>React Native</h4>
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
  );
};

export default TechWeWork;
