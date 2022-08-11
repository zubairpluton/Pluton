import React from "react";

function BlogSection({ heading, para1, para2 }) {
  return (
    <section id="why-choose" className="blog-section">
      <div className="container">
        <div className="sec-padding">
          <div className="row">
            <div className="col-lg-12">
              <div className="main">
                <div className="heading">
                  {/* <h6>Services</h6> */}
                  <h1>
                    {/* Why is Blockchain the Future <br /> of Hybrid Projects? */}
                    {heading}
                  </h1>
                  <span className="underline"></span>
                </div>
                <div className="para">
                  <p>{para1}</p>
                  <p>{para2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
