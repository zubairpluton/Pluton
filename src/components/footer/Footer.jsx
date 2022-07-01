import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Twitter, LinkedIn, YouTube } from "@mui/icons-material";
import {
  // Linkedin,
  // youtube,
  // twitter,
  arrow,
  pk,
  uk,
  canada,
} from "./../../assets/images/index";
import { memo } from "react";
import "./footer.scss";
function Footer() {
  return (
    <>
      <footer>
        <div className="banner-container">
          <div className="sec-padding">
            <Row className="my-5">
              <div className="col-xxl-4 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                {/* <Link to={"/"} className="logo"> */}

                {/* <img src={logo} /> */}
                {/* </Link> */}
                <div className="footer-about ">
                  <Link to={"/"} className="text-decoration-none">
                    <h2>Pluton</h2>
                  </Link>
                  <p>
                    Pluton Limited is a software firm that <br /> provides
                    services such as websites, <br /> mobile apps, game
                    creation, block <br /> chain development, and NFTs, <br />{" "}
                    among others.
                  </p>
                </div>

                <div className="social-icons">
                  <ul className="footer-menu social-icons-menu">
                    <li>
                      <a href="#">
                        {/* <img src={twitter} alt="Twitter" /> */}
                        <Twitter fontSize="inherit" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        {" "}
                        <LinkedIn fontSize="inherit" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <YouTube fontSize="inherit" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="useful-links">
                  <h4>Useful Links</h4>

                  <ul className="footer-menu">
                    <li>
                      <Link to={"/career"}>Career</Link>
                    </li>

                    <li>
                      <Link to={"/services"}>Services</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="useful-links news-letter-main">
                  <h4>Newsletter</h4>
                  <p>
                    Subscribe us to get all <br />
                    Latest News, Offer and Promotions
                  </p>{" "}
                  <form action="#">
                    <div className="footer-news-letter d-inline-flex">
                      <span>
                        <input type="text" placeholder="Enter Email Address" />
                      </span>
                      <span>
                        <button type="submit">
                          <img src={arrow} alt="" />
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="main-address">
                  <div className="address">
                    <img src={uk} alt="United Kingdom" />
                    <h4>United Kingdom</h4>
                    <address>
                      134 Spackmans Way, SL1 2SB, Slough, <br /> Berkshire,
                      United Kingdome.
                    </address>
                  </div>
                  <div className="address">
                    <img src={pk} alt="Pakistan" />
                    <h4>Pakistan</h4>
                    <address>
                      134 Spackmans Way, SL1 2SB, Slough, <br /> Berkshire,
                      United Kingdome.
                    </address>
                  </div>
                  <div className="address">
                    <img src={canada} alt="canada" />
                    <h4>Canada</h4>
                    <address>
                      134 Spackmans Way, SL1 2SB, Slough, <br /> Berkshire,
                      United Kingdome.
                    </address>
                  </div>
                </div>
              </div>
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
