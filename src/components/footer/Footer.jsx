import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { memo } from "react";
import "./footer.scss";
function Footer() {
  return (
    <>
      <footer>
        <div className="banner-container">
          <div className="sec-padding">
            <Row>
              <Col lg={4} md={4}>
                {/* <Link to={"/"} className="logo"> */}
                <h2>Pluton</h2>
                {/* <img src={logo} /> */}
                {/* </Link> */}

                <p className="footer-about">
                  Pluton Limited is a software firm that <br /> provides
                  services such as websites, <br /> mobile apps, game creation,
                  block <br /> chain development, and NFTs, <br /> among others.
                </p>
              </Col>
              <Col lg={2} md={2}>
                <div className="useful-links">
                  <h4>Useful Links</h4>

                  <ul className="footer-menu">
                    <li>
                      <a href="#">Career</a>
                    </li>

                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#about">About us</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col lg={2} md={2}>
                <div className="useful-links news-letter-main">
                  <h4>Newsletter</h4>

                  <p>
                    Subscribe us to get all <br />
                    Latest News, Offer and Promotions
                  </p>
                  <div className="footer-news-letter">
                    <form action="#">
                      <input type="text" placeholder="Enter Email Address" />
                      <button type="submit">
                        <i className="fas fa-arrow-right-long"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4}>
                <div className="main-address">
                  <div className="address">
                    <i>icon</i>
                    <span>United Kingdom</span>
                    <address>
                      134 Spackmans Way, SL1 2SB, Slough, <br /> Berkshire,
                      United Kingdome.
                    </address>
                  </div>
                  <div className="address">
                    <i>icon</i>
                    <span>United Kingdom</span>
                    <address>
                      134 Spackmans Way, SL1 2SB, Slough, <br /> Berkshire,
                      United Kingdome.
                    </address>
                  </div>
                  <div className="address">
                    <i>icon</i>
                    <span>United Kingdom</span>
                    <address>
                      134 Spackmans Way, SL1 2SB, Slough, <br /> Berkshire,
                      United Kingdome.
                    </address>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* <Container className="footer-bottom">
          <p>
            {" "}
            Copyright &copy; {new Date().getFullYear()} Pluton All Rights
            Reserved
          </p>
        </Container> */}
      </footer>
    </>
  );
}

export default memo(Footer);
