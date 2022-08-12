import { Plan, Design, Development } from "../../assets/images/index";
import { Link } from "react-router-dom";
const DevProcess = ({ card_href, card_title, card_para }) => {
  return (
    <>
      <div className="main-services-card">
        <Link to={card_href}>
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
                      Business analysis <br /> Documenting specifications
                      Preparing wireframess Getting client approval
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
                      Crafting app prototype <br /> Making changes Getting
                      client approval Implementing feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xlg-4 col-lg-4 col-md-12 col-sm-6 col-xsm-12">
              <div className="dev-process-box">
                <div className="box-image">
                  <img src={Development} className="img" alt="BlockChain" />
                </div>
                <div className="box-border-3"></div>
                <div className="box-content">
                  <div className="box-heading">
                    <h2>Development</h2>
                  </div>
                  <div className="box-para">
                    <p>
                      Development strategy <br /> Testing strategy Product
                      development Product release
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default DevProcess;
