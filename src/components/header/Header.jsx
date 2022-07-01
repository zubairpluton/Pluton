import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.png";
import Navlogo from "../../assets/images/logo/navbar-btn.png";
import "./header.scss";
function Header() {
  return (
    <div>
      <header>
        <div className="main">
          <div className="banner-container pt-5">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <div className="logo">
                  <Link to="/">
                    {" "}
                    <img src={Logo} alt="Logo.png" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                <div className="nav-btn-main">
                  <div className="nav-btn">
                    <img src={Navlogo} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
