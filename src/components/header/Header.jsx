import React from "react";
import Logo from "../../assets/images/logo/logo.png";
import Navlogo from "../../assets/images/logo/navbar-btn.png";
function Header() {
  return (
    <div>
      <header>
        <div className="main">
          <div className="banner-container pt-5">
            <div className="row">
              <div className="col-md-4">
                <div className="logo">
                  <img src={Logo} alt="Logo.png" />
                  logo here
                </div>
              </div>
              <div className="col-md-8 d-flex justify-content-end">
                <div className="nav-btn">
                  <img src={Navlogo} alt="" />
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
