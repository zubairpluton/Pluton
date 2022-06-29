import "./service-banner.scss";
import { Header } from "../index";
import { memo } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    color: "white",
  },
});
const ServiceBanner = ({ page, title, titleSmall, para }) => {
  const classes = useStyles();
  return (
    <div className="home-section section ">
      <div>
        <Header />
      </div>
      <div className="banner-container">
        <div className="row mt-5 align-items-center">
          <div className="col-lg-6 d-flex  flex-column align-items-start justify-content-end ">
            <div className="title-home">
              <h1>{title}</h1>
              <hr className="line" />
              <h3>{titleSmall}</h3>
              <h6 className="para">{para}</h6>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form">
              <form action="" className="d-flex justify-content-end">
                <div className="main-form">
                  <div className="heading">
                    <h4>Request for proposal</h4>
                  </div>
                  <div className="fields">
                    {" "}
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          m: 1,
                          width: "500px",
                          maxWidth: "100%",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="name"
                        label="Name"
                        variant="standard"
                        inputProps={{ className: classes.input }}
                      />
                    </Box>
                  </div>
                  <div className="fields">
                    {" "}
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          m: 1,
                          width: "500px",
                          maxWidth: "100%",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="email" label="Email" variant="standard" />
                    </Box>
                  </div>
                  <div className="fields">
                    {" "}
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          m: 1,
                          width: "500px",
                          maxWidth: "100%",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField id="phone" label="Phone" variant="standard" />
                    </Box>
                  </div>
                  <div className="fields">
                    {" "}
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          m: 1,
                          width: "500px",
                          maxWidth: "100%",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="message"
                        label="Message"
                        variant="standard"
                      />
                    </Box>
                  </div>
                  <div className="fields">
                    {" "}
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          m: 1,
                          width: "500px",
                          maxWidth: "100%",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="standard-basic"
                        label="Standard"
                        variant="standard"
                      />
                    </Box>
                  </div>
                  <div className="button">
                    <button className="custom-btn" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(ServiceBanner);
