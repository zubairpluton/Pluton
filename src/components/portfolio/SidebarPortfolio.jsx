import React from "react";

function SidebarPortfolio() {
  return (
    <div className="portfolio-sidebar">
      <div className="tabbing-link">
        <div className="heading">
          <h1>Our Featured Portfolio</h1>
          <span className="underline"></span>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#">All</a>
            </li>
            <li>
              <a href="#">Static Website</a>
            </li>
            <li>
              <a href="#">Responsive Website</a>
            </li>
            <li>
              <a href="#">Custom Website</a>
            </li>
            <li>
              <a href="#">Game</a>
            </li>
            <li>
              <a href="#">Video</a>
            </li>
            <li>
              <a href="#">Logo Design</a>
            </li>
            <li>
              <a href="#">Character Design</a>
            </li>
            <li>
              <a href="#">Case Studyes</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SidebarPortfolio;
