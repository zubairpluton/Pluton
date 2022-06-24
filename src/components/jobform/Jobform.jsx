import React from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

// import { Twitter, LinkedIn, YouTube } from "@mui/icons-material";
import "./jobform.scss";

function Jobform() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <section id="form">
      <div className="container">
        <div className="main-form">
          <div className="row">
            <div className="col-lg-12">
              <div className="signup-body">
                <div className="d-flex justify-content-center align-items-center ">
                  <div className="main-box">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="heading">
                          <h3>Personal Info</h3>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="main-form">
                        <div className="row">
                          <div className="col-lg-12 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-6 my-3">
                            <Box
                              sx={{
                                width: 500,
                                maxWidth: "100%",
                              }}
                            >
                              <TextField
                                fullWidth
                                label="First Name"
                                id="fullWidth"
                              />
                            </Box>
                          </div>
                          <div className="col-lg-6 my-3">
                            <Box
                              sx={{
                                width: 500,
                                maxWidth: "100%",
                              }}
                            >
                              <TextField
                                fullWidth
                                label="Last Name"
                                id="fullWidth"
                              />
                            </Box>
                          </div>
                          <div className="col-lg-12 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-12 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-3 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-3 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-3 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-3 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-4 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-4 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-4 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-8 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-4 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    Age
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                  >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-3 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-3 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-3 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center my-5">
                  <div className="main-box">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="heading d-flex justify-content-between">
                          <h3>Education</h3>
                          <AddIcon sx={{ fontSize: 40, color: "white" }} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="main-form">
                        <div className="close-icon d-flex justify-content-end">
                          <CloseIcon />
                        </div>
                        <div className="row">
                          <div className="col-lg-12 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-12 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-12 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-12 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Email"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center my-5">
                  <div className="main-box">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="heading d-flex justify-content-between">
                          <h3>Experience</h3>
                          <AddIcon sx={{ fontSize: 40, color: "white" }} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="main-form">
                        <div className="close-icon d-flex justify-content-end">
                          <CloseIcon />
                        </div>
                        <div className="row">
                          <div className="col-lg-12 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Name Of Company"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-12 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Title, Skills, Certifications,"
                                  id="fullWidth"
                                />
                              </Box>
                            </div>
                          </div>
                          <div className="col-lg-12 my-3">
                            <div className="row">
                              <div className="col-lg-2">
                                {" "}
                                <div className="email">
                                  <Box
                                    sx={{
                                      maxWidth: "100%",
                                    }}
                                  >
                                    <TextField
                                      fullWidth
                                      label="Email"
                                      id="fullWidth"
                                    />
                                  </Box>
                                </div>
                              </div>
                              <div className="col-lg-2">
                                {" "}
                                <div className="email">
                                  <Box
                                    sx={{
                                      maxWidth: "100%",
                                    }}
                                  >
                                    <TextField
                                      fullWidth
                                      label="Email"
                                      id="fullWidth"
                                    />
                                  </Box>
                                </div>
                              </div>
                              <div className="col-lg-2">
                                {" "}
                                <div className="email">
                                  <Box
                                    sx={{
                                      maxWidth: "100%",
                                    }}
                                  >
                                    <TextField
                                      fullWidth
                                      label="Email"
                                      id="fullWidth"
                                    />
                                  </Box>
                                </div>
                              </div>
                              <div className="col-lg-2">
                                {" "}
                                <div className="email">
                                  <Box
                                    sx={{
                                      maxWidth: "100%",
                                    }}
                                  >
                                    <TextField
                                      fullWidth
                                      label="Email"
                                      id="fullWidth"
                                    />
                                  </Box>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 my-3">
                            <div className="email">
                              <Box
                                sx={{
                                  maxWidth: "100%",
                                }}
                              >
                                <TextareaAutosize
                                  maxRows={4}
                                  aria-label="maximum height"
                                  placeholder="plz input details about it"
                                  style={{ width: "100%", height: 200 }}
                                />
                              </Box>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row my-5">
                  <div className="col-lg-6 col-md-6 col-xs-6">
                    <div className="dropZone" aria-disabled="false">
                      <CloudUploadIcon sx={{ fontSize: 100 }} />
                      <p className="dropZone-text">
                        Drop file here or click to upload
                      </p>
                      <input type="file" multiple="" autocomplete="off" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit">
                <button className="btn btn-primary submit">submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jobform;
