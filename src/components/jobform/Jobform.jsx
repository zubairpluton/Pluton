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
import { useState } from "react";

function Jobform() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [inputEducationFields, setInputEducationFields] = useState([]);
  const [inputExperienceFields, setinputExperienceFields] = useState([]);

  const handleChangeEdu = (index, event) => {
    let data = [...inputEducationFields];
    data[index][event.target.name] = event.target.value;
    setInputEducationFields(data);
    console.log(data);
  };
  const handleChangeExp = (index, event) => {
    let data = [...inputExperienceFields];
    data[index][event.target.name] = event.target.value;
    setinputExperienceFields(data);
    console.log(data);
  };

  const addEducationFields = (event) => {
    let newEducationFields = {
      school: "",
      degree: "",
      year: "",
      major: "",
    };
    setInputEducationFields([...inputEducationFields, newEducationFields]);
  };

  const addExperienceFields = (event) => {
    let newExperienceFields = {
      companyName: "",
      title: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      desc: "",
    };
    console.log([...inputExperienceFields]);
    setinputExperienceFields([...inputExperienceFields, newExperienceFields]);
  };

  const removeEduFields = (index, event) => {
    let data = [...inputEducationFields];
    data.splice(index, 1);
    setInputEducationFields(data);
    console.log(data);
  };
  const removeExpFields = (index, event) => {
    let data = [...inputExperienceFields];
    data.splice(index, 1);
    setinputExperienceFields(data);
    console.log(data);
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
                                  placeholder="Enter Your Email"
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
                                placeholder="Enter Your First Name"
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
                                placeholder="Enter Your Last Name"
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
                                  label="Address 1"
                                  id="fullWidth"
                                  placeholder="Enter Your Adrress"
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
                                  label="Address 2"
                                  id="fullWidth"
                                  placeholder="Enter Your Adrress (Optional)"
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
                                  label="City Name"
                                  id="fullWidth"
                                  placeholder="Enter Your City Name"
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
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    Province
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                  >
                                    <MenuItem value={10}>
                                      Azad Jamu & Kashmir
                                    </MenuItem>
                                    <MenuItem value={20}>Balochistan</MenuItem>
                                    <MenuItem value={30}>
                                      Gilgit Baltistan
                                    </MenuItem>
                                    <MenuItem value={30}>Punjab</MenuItem>
                                    <MenuItem value={30}>
                                      Khyber PakhtunKhwa
                                    </MenuItem>
                                    <MenuItem value={30}>Sindh</MenuItem>
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
                                  label="Post Code"
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
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    Province
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                  >
                                    <MenuItem value={10}>Pakistan</MenuItem>
                                    <MenuItem value={20}>Germany</MenuItem>
                                    <MenuItem value={30}>India</MenuItem>
                                    <MenuItem value={30}>
                                      United Kingdom
                                    </MenuItem>
                                    <MenuItem value={30}>
                                      United States
                                    </MenuItem>
                                    <MenuItem value={30}>Canada</MenuItem>
                                  </Select>
                                </FormControl>
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
                                  label="Home Phone"
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
                                  label="Work Phone"
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
                                  label="Cell Phone"
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
                                  label="Current Salary"
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
                                    PKR/Hour
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                  >
                                    <MenuItem value={10}> PKR/Hour</MenuItem>
                                    <MenuItem value={20}> PKR/Month</MenuItem>
                                    <MenuItem value={30}>PKR/Year</MenuItem>
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
                                  label="Expected Salary"
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
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    PKR/Hour
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                  >
                                    <MenuItem value={10}> PKR/Hour</MenuItem>
                                    <MenuItem value={20}> PKR/Month</MenuItem>
                                    <MenuItem value={30}>PKR/Year</MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center my-5">
                  <div className="col-lg-12 col-md-12 main-box">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="heading d-flex justify-content-between">
                          <h3>Education</h3>
                          <AddIcon
                            onClick={addEducationFields}
                            sx={{
                              fontSize: 40,
                              color: "white",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="main-form">
                        {inputEducationFields.map((item, index) => {
                          return (
                            <div key={index}>
                              <div className="close-icon d-flex justify-content-end">
                                <CloseIcon
                                  onClick={removeEduFields}
                                  sx={{
                                    cursor: "pointer",
                                  }}
                                />
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
                                        label="School"
                                        id="fullWidth"
                                        name="school"
                                        value={item.school}
                                        onChange={(event) =>
                                          handleChangeEdu(index, event)
                                        }
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
                                        label="Educational Program"
                                        id="fullWidth"
                                        name="degree"
                                        value={item.degree}
                                        onChange={(event) =>
                                          handleChangeEdu(index, event)
                                        }
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
                                        label="Year"
                                        id="fullWidth"
                                        name="year"
                                        value={item.year}
                                        onChange={(event) =>
                                          handleChangeEdu(index, event)
                                        }
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
                                        label="Major"
                                        id="fullWidth"
                                        name="major"
                                        value={item.major}
                                        onChange={(event) =>
                                          handleChangeEdu(index, event)
                                        }
                                      />
                                    </Box>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center my-5">
                  <div className="col-lg-12 col-md-12 main-box">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="heading d-flex justify-content-between">
                          <h3>Experience</h3>
                          <AddIcon
                            onClick={addExperienceFields}
                            sx={{
                              fontSize: 40,
                              color: "white",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="main-form">
                        {inputExperienceFields.map((item, index) => {
                          return (
                            <div key={index}>
                              <div className="close-icon d-flex justify-content-end">
                                <CloseIcon
                                  onClick={removeExpFields}
                                  sx={{
                                    cursor: "pointer",
                                  }}
                                />
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
                                        name="companyName"
                                        value={item.companyName}
                                        onChange={(event) =>
                                          handleChangeExp(index, event)
                                        }
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
                                        name="title"
                                        value={item.title}
                                        onChange={(event) =>
                                          handleChangeExp(index, event)
                                        }
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
                                          <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">
                                              Date
                                            </InputLabel>
                                            <Select
                                              labelId="demo-simple-select-label"
                                              id="demo-simple-select"
                                              name="startMonth"
                                              label="start Month"
                                              value={item.startMonth}
                                              onChange={(event) =>
                                                handleChangeExp(index, event)
                                              }
                                            >
                                              <MenuItem value={1}>
                                                {" "}
                                                January
                                              </MenuItem>
                                              <MenuItem value={2}>
                                                {" "}
                                                Februry
                                              </MenuItem>
                                              <MenuItem value={3}>
                                                March
                                              </MenuItem>
                                              <MenuItem value={4}>
                                                April
                                              </MenuItem>
                                              <MenuItem value={5}>May</MenuItem>
                                              <MenuItem value={6}>
                                                June
                                              </MenuItem>
                                              <MenuItem value={7}>
                                                July
                                              </MenuItem>
                                              <MenuItem value={8}>
                                                August
                                              </MenuItem>
                                              <MenuItem value={9}>
                                                September
                                              </MenuItem>
                                              <MenuItem value={10}>
                                                October
                                              </MenuItem>
                                              <MenuItem value={11}>
                                                November
                                              </MenuItem>
                                              <MenuItem value={12}>
                                                December
                                              </MenuItem>
                                            </Select>
                                          </FormControl>
                                        </Box>
                                      </div>{" "}
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
                                            label="startYear"
                                            id="fullWidth"
                                            name="startYear"
                                            value={item.startYear}
                                            onChange={(event) =>
                                              handleChangeExp(index, event)
                                            }
                                          />
                                        </Box>
                                      </div>
                                    </div>
                                    <div className="col-lg-1 d-flex justify-content-center align-items-center">
                                      <span>to</span>
                                    </div>
                                    <div className="col-lg-2">
                                      {" "}
                                      <div className="email">
                                        <Box
                                          sx={{
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">
                                              Date
                                            </InputLabel>
                                            <Select
                                              labelId="demo-simple-select-label"
                                              id="demo-simple-select"
                                              label="Age"
                                              name="endMonth"
                                              value={item.endMonth}
                                              onChange={(event) =>
                                                handleChangeExp(index, event)
                                              }
                                            >
                                              <MenuItem value={1}>
                                                {" "}
                                                January
                                              </MenuItem>
                                              <MenuItem value={2}>
                                                {" "}
                                                Februry
                                              </MenuItem>
                                              <MenuItem value={3}>
                                                March
                                              </MenuItem>
                                              <MenuItem value={4}>
                                                April
                                              </MenuItem>
                                              <MenuItem value={5}>May</MenuItem>
                                              <MenuItem value={6}>
                                                June
                                              </MenuItem>
                                              <MenuItem value={7}>
                                                July
                                              </MenuItem>
                                              <MenuItem value={8}>
                                                August
                                              </MenuItem>
                                              <MenuItem value={9}>
                                                September
                                              </MenuItem>
                                              <MenuItem value={10}>
                                                October
                                              </MenuItem>
                                              <MenuItem value={11}>
                                                November
                                              </MenuItem>
                                              <MenuItem value={12}>
                                                December
                                              </MenuItem>
                                            </Select>
                                          </FormControl>
                                        </Box>
                                      </div>{" "}
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
                                            label="year"
                                            id="fullWidth"
                                            name="endYear"
                                            value={item.endYear}
                                            onChange={(event) =>
                                              handleChangeExp(index, event)
                                            }
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
                                        placeholder="Description"
                                        style={{ width: "100%", height: 200 }}
                                        name="desc"
                                        value={item.desc}
                                        onChange={(event) =>
                                          handleChangeExp(index, event)
                                        }
                                      />
                                    </Box>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
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
                      <input type="file" multiple="" autoComplete="off" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit">
                <button className="custom-btn submit">submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jobform;
