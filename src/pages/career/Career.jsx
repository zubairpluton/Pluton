import React from "react";
import "./career.scss";
import { Link } from "react-router-dom";
import { JobOpnings } from "../../assets/images/index";
import Box from "@mui/material/Box";
import {
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import { Header } from "../../components";
//  d-flex flex-coloumn align-content-md-start justify-content-start h-50
export const CareerBanner = ({ page, title, para }) => {
  return (
    <div className="home-section">
      <div>
        <Header />
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 d-flex  flex-column align-items-start justify-content-end "
            style={{ height: "30vh" }}
          >
            <div className="heading">
              <h4>{page}</h4>
            </div>
            <div className="title-home">
              <h1>{title}</h1>
              <h6 className="para">{para}</h6>
              <hr className="line" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Career() {
  const [arrange, setArrange] = useState(true);
  const [asscending, setAsscending] = useState(true);
  const arrangeHandle = () => {
    setArrange(!arrange);
  };
  const handleOrder = () => {
    setAsscending(!asscending);
  };
  const handleChange = (event) => {
    setArrange(event.target.value);
  };
  return (
    <div id="career">
      <CareerBanner page="career" title="Join the Team" />
      <section className="icon-section mt-4">
        <div className="title-home">
          <h2 className="parallax-title text-center text-capitalize">
            How We Hire
          </h2>
          <hr className="line" />
        </div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-sm-2 box-img">
              <img src={JobOpnings} />
            </div>

            <div className="col-sm-2 box-img">
              <img src={JobOpnings} />
            </div>
            <div className="col-sm-2 box-img">
              <img src={JobOpnings} />
            </div>
            <div className="col-sm-2 box-img">
              <img src={JobOpnings} />
            </div>
            <div className="col-sm-2 box-img">
              <img src={JobOpnings} />
            </div>
            <div className="col-sm-2 box-img">
              <img src={JobOpnings} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="btn d-flex justify-content-center">
                <button className="custom-btn view-btn">
                  {" "}
                  View Open Roles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="form-section mt-4">
        <div className="container">
          <div className="title-header">
            <h2 className="parallax-title text-center text-capitalize">
              Open Positions
            </h2>
            <hr className="line" />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-5">
                  <div className="keywords">
                    <span>Keywords:</span>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="search-jobs d-flex justify-content-end">
                    <span className="mr-5">
                      {" "}
                      <Link to={"/#"}>Search Jobs</Link>
                    </span>
                    <span className="ml-5">
                      {" "}
                      <Link to={"/job-apply"}>Apply</Link>
                    </span>
                    {/* <button className="btn btn-primary m-lg-1">Apply</button> */}
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12">
                  <div className="input-field d-flex">
                    <Box
                      sx={{
                        width: 500,
                        maxWidth: "100%",
                      }}
                    >
                      <TextField
                        fullWidth
                        label="Enter Keywords e.g. software engineer)"
                        id="fullWidth"
                      />
                    </Box>
                    <div className="search-btn mx-4">
                      <button className="custom-btn">Search Jobs</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="job-list">
        <div className="container">
          <div className="sec-padding">
            <div className="main-job-list">
              <div className="row">
                <div className="col-lg-12">
                  <div className="table-header d-flex justify-content-between">
                    <div className="jobs-heading">
                      <h3>233+ jobs</h3>
                    </div>
                    <div className="arrange">
                      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">Arrange</InputLabel>
                        <Select
                          labelId="demo-select-small"
                          id="demo-select-small"
                          value={arrange}
                          label="Arrange By"
                          onChange={handleChange}
                        >
                          {/* <MenuItem value="">
                            <em>None</em>
                          </MenuItem> */}
                          <MenuItem value={1}>Date</MenuItem>
                          <MenuItem value={2}>Title</MenuItem>
                          <MenuItem value={3}>Job#</MenuItem>
                          <MenuItem value={4}>Location</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="order">
                      <h4 onClick={handleOrder}>
                        {asscending !== false ? "Asscending" : "Descending"}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="jobs">
                    <div className="row no-gutters main-row">
                      <div className="col-8 col-sm-8 col-md-8 col-lg-9 col-xl-10 clickable">
                        <div className="row no-gutters">
                          <div className="col-12 col-sm-12 col-md-12 job-row-info-section">
                            <h4 className="job-title-upper can-hover">
                              <a className="job-title clickable can-hover">
                                Senior Software Developer
                              </a>
                            </h4>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 pl-1">
                            <p
                              style={{
                                fontSize: "12px",
                                color: "rgb(134, 142, 150)",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                              }}
                            >
                              <span>
                                The Division: Travisoft is a subsidiary of the
                                Volaris operating group of Constellation
                                Software Inc. With over 25-years' experience,
                                combined with an innovative team. Travisoft
                                produces feature-rich, flexible benefits
                                administration software solutions covering
                                COBRA, Retirees, Direct Billing, Cafeteria
                                Plans, and more. Travisoft is dedicated to
                                partner with clients for unique needs allow...
                              </span>
                            </p>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 m-l-0 p-l-0">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-4 p-l-21 job-row-d text-capitalize">
                                23/06/2022
                              </div>
                              <div className="col-12 col-sm-12 col-md-4 job-row-d job-row-d-xs">
                                22-00506
                              </div>
                              <div className="col-12 col-sm-12 col-md-4 job-row-d job-row-d-xs">
                                Karachi, Sindh
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-2 align-self-center float-right">
                        <Link to={"/job-apply"}>
                          {" "}
                          <button className="btn btn-outline-primary w-100">
                            {" "}
                            Apply
                          </button>
                        </Link>
                      </div>
                      <div className="col-md-12 col-xs-12 not-last-job-in-list">
                        <div className="line-separator"></div>
                      </div>
                      <hr />
                    </div>
                    <div className="row no-gutters main-row">
                      <div className="col-8 col-sm-8 col-md-8 col-lg-9 col-xl-10 clickable">
                        <div className="row no-gutters">
                          <div className="col-12 col-sm-12 col-md-12 job-row-info-section">
                            <h4 className="job-title-upper can-hover">
                              <a className="job-title clickable can-hover">
                                software quality assurance
                              </a>
                            </h4>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 pl-1">
                            <p
                              style={{
                                fontSize: "12px",
                                color: "rgb(134, 142, 150)",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                              }}
                            >
                              <span>
                                The Division: Travisoft is a subsidiary of the
                                Volaris operating group of Constellation
                                Software Inc. With over 25-years' experience,
                                combined with an innovative team. Travisoft
                                produces feature-rich, flexible benefits
                                administration software solutions covering
                                COBRA, Retirees, Direct Billing, Cafeteria
                                Plans, and more. Travisoft is dedicated to
                                partner with clients for unique needs allow...
                              </span>
                            </p>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 m-l-0 p-l-0">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-4 p-l-21 job-row-d text-capitalize">
                                23/06/2022
                              </div>
                              <div className="col-12 col-sm-12 col-md-4 job-row-d job-row-d-xs">
                                22-00506
                              </div>
                              <div className="col-12 col-sm-12 col-md-4 job-row-d job-row-d-xs">
                                Karachi, Sindh
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-2 align-self-center float-right">
                        <Link to={"/job-apply"}>
                          <button className="btn btn-outline-primary w-100">
                            {" "}
                            Apply
                          </button>
                        </Link>
                      </div>
                      <div className="col-md-12 col-xs-12 not-last-job-in-list">
                        <div className="line-separator"></div>
                      </div>
                      <hr />
                    </div>
                    <div className="row no-gutters main-row">
                      <div className="col-8 col-sm-8 col-md-8 col-lg-9 col-xl-10 clickable">
                        <div className="row no-gutters">
                          <div className="col-12 col-sm-12 col-md-12 job-row-info-section">
                            <h4 className="job-title-upper can-hover">
                              <a className="job-title clickable can-hover">
                                Principal Software Engineer
                              </a>
                            </h4>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 pl-1">
                            <p
                              style={{
                                fontSize: "12px",
                                color: "rgb(134, 142, 150)",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                              }}
                            >
                              <span>
                                The Division: Travisoft is a subsidiary of the
                                Volaris operating group of Constellation
                                Software Inc. With over 25-years' experience,
                                combined with an innovative team. Travisoft
                                produces feature-rich, flexible benefits
                                administration software solutions covering
                                COBRA, Retirees, Direct Billing, Cafeteria
                                Plans, and more. Travisoft is dedicated to
                                partner with clients for unique needs allow...
                              </span>
                            </p>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 m-l-0 p-l-0">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-4 p-l-21 job-row-d text-capitalize">
                                23/06/2022
                              </div>
                              <div className="col-12 col-sm-12 col-md-4 job-row-d job-row-d-xs">
                                22-00506
                              </div>
                              <div className="col-12 col-sm-12 col-md-4 job-row-d job-row-d-xs">
                                Karachi, Sindh
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-2 align-self-center float-right">
                        <Link to={"/job-apply"}>
                          <button className="btn btn-outline-primary w-100">
                            {" "}
                            Apply
                          </button>
                        </Link>
                      </div>
                      <div className="col-md-12 col-xs-12 not-last-job-in-list">
                        <div className="line-separator"></div>
                      </div>
                      <hr />
                    </div>
                    <div className="row no-gutters main-row">
                      <div className="col-8 col-sm-8 col-md-8 col-lg-9 col-xl-10 clickable">
                        <div className="row no-gutters">
                          <div className="col-12 col-sm-12 col-md-12 job-row-info-section">
                            <h4 className="job-title-upper can-hover">
                              <a className="job-title clickable can-hover">
                                Senior UI/Ux Developer
                              </a>
                            </h4>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 pl-1">
                            <p
                              style={{
                                fontSize: "12px",
                                color: "rgb(134, 142, 150)",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                              }}
                            >
                              <span>
                                The Division: Travisoft is a subsidiary of the
                                Volaris operating group of Constellation
                                Software Inc. With over 25-years' experience,
                                combined with an innovative team. Travisoft
                                produces feature-rich, flexible benefits
                                administration software solutions covering
                                COBRA, Retirees, Direct Billing, Cafeteria
                                Plans, and more. Travisoft is dedicated to
                                partner with clients for unique needs allow...
                              </span>
                            </p>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 m-l-0 p-l-0">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-4 p-l-21 job-row-d text-capitalize">
                                23/06/2022
                              </div>
                              <div className="col-12 col-sm-12 col-md-4 job-row-d job-row-d-xs">
                                22-00506
                              </div>
                              <div className="col-12 col-sm-12 col-md-4 job-row-d job-row-d-xs">
                                Karachi, Sindh
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-2 align-self-center float-right">
                        <Link to={"/job-apply"}>
                          <button className="btn btn-outline-primary w-100">
                            {" "}
                            Apply
                          </button>
                        </Link>
                      </div>
                      <div className="col-md-12 col-xs-12 not-last-job-in-list">
                        <div className="line-separator"></div>
                      </div>
                      <hr />
                    </div>
                    <div className="row no-gutters main-row">
                      <div className="col-8 col-sm-8 col-md-8 col-lg-9 col-xl-10 clickable">
                        <div className="row no-gutters">
                          <div className="col-12 col-sm-12 col-md-12 job-row-info-section">
                            <h4 className="job-title-upper can-hover">
                              <a className="job-title clickable can-hover">
                                Graphic Designer
                              </a>
                            </h4>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 pl-1">
                            <p
                              style={{
                                fontSize: "12px",
                                color: "rgb(134, 142, 150)",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                              }}
                            >
                              <span>
                                The Division: Travisoft is a subsidiary of the
                                Volaris operating group of Constellation
                                Software Inc. With over 25-years' experience,
                                combined with an innovative team. Travisoft
                                produces feature-rich, flexible benefits
                                administration software solutions covering
                                COBRA, Retirees, Direct Billing, Cafeteria
                                Plans, and more. Travisoft is dedicated to
                                partner with clients for unique needs allow...
                              </span>
                            </p>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 m-l-0 p-l-0">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-4 p-l-21 job-row-d text-capitalize">
                                23/06/2022
                              </div>
                              <div className="col-12 col-sm-12 col-md-4 job-row-d job-row-d-xs">
                                22-00506
                              </div>
                              <div className="col-12 col-sm-12 col-md-4 job-row-d job-row-d-xs">
                                Karachi, Sindh
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-2 align-self-center float-right">
                        <Link to={"/job-apply"}>
                          <button className="btn btn-outline-primary w-100">
                            {" "}
                            Apply
                          </button>
                        </Link>
                      </div>
                      <div className="col-md-12 col-xs-12 not-last-job-in-list">
                        <div className="line-separator"></div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Career;
