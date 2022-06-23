import React from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

function Jobform() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="main-form">
      <div className="row">
        <div className="col-lg-12">
          <div className="signup-body">
            <div className="d-flex justify-content-center align-items-center">
              <div className="main-box">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="heading">Personal Info</div>
                  </div>
                </div>
                <div className="row">
                  <div className="main-form">
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="email">
                            <Box
                              sx={{
                                width: 100,
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
                      <div className="row">
                        <div className="col-lg-6">
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
                        <div className="col-lg-6">
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
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
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
                        <div className="col-lg-12">
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
                        <div className="col-lg-3">
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
                        <div className="col-lg-3">
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
                        <div className="col-lg-3">
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
                        <div className="col-lg-3">
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
                        <div className="col-lg-4">
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
                        <div className="col-lg-4">
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
                        <div className="col-lg-4">
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
                        <div className="col-lg-8">
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
                        <div className="col-lg-4">
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
                        <div className="col-lg-3">
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
                        <div className="col-lg-3">
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
                        <div className="col-lg-3">
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
                    </form>
                  </div>
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
  );
}

export default Jobform;
