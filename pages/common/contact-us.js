import {
  Box,
  Typography,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import Header from "components/headerComponent/Header";
import React from "react";

const contactUs = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: "#fff",
          overflow: "hidden",
          padding: "5px",
          margin: "70px 0px 10px",
          fontWeight: "700",
        }}
      >
        <Typography component={"h2"} variant="h4">
          We would love to listen from you !
        </Typography>
        <Typography component={"p"}>
          Do you want to promote your offers on FreeKaaMaal.com or would like to
          share any queries, thoughts, ideas, feedback ? We are always there to
          help you. Just fill up the short form below and we will contact you
          soon
        </Typography>
        <Box>
          <FormControl sx={{ width: "100%", marginBlock: "20px" }}>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            {/* <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText> */}
          </FormControl>
          <FormControl sx={{ width: "100%", marginBlockEnd: "20px" }}>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select One</InputLabel>
            <Select
              sx={{ border: "none", outline: "none", marginBlock: "10px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={age}
              label="Select One"
              //   onChange={handleChange}
            >
              <MenuItem value={10}>Advertising / Partnership Query</MenuItem>
              <MenuItem value={20}>General</MenuItem>
              <MenuItem value={30}>Cashback or Reward Related Query</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "100%", marginBlockEnd: "20px" }}>
            <InputLabel htmlFor="my-input">Subject</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl sx={{ width: "100%", marginBlockEnd: "20px" }}>
            <InputLabel htmlFor="my-input">Message</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </Box>
        <Box
          width={"60%"}
          backgroundColor="#eeeeee"
          padding={"10px"}
          border={"1px solid #999"}
          borderRadius={"5px"}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              component={"input"}
              type="checkbox"
              sx={{ width: "30px", height: "30px" }}
            ></Typography>
            <Typography component={"span"}>I&#39;m not a robot</Typography>
            <Typography
              component={"img"}
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
            />
          </Box>
          <Box textAlign={"right"}>
            <Typography>reCAPTCHA</Typography>
            <Typography component={"div"}>
              <Typography component={"span"}>Privacy -</Typography>
              <Typography component={"span"}>Terms</Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            margin: "20px",
          }}
        >
          <Button sx={{ fontWeight: "600" }} variant="outlined">
            Submit
          </Button>
        </Box>
        <div>
          <div className="contact-info">
            <h2>Contact Us</h2>
            <span>Email:</span> <br />
            <span>Support[at]freekaamaal.com</span> <br /> <br />
            <span>Support Timeline:</span> <br />
            <span>Monday To Saturday 9AM-6PM</span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7637.850195870972!2d77.3767628831543!3d28.63066854144106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff0b7507d05%3A0xb7acb98f54d99b41!2sFreeKaaMaal.com!5e0!3m2!1sen!2sin!4v1519626143912"
            frameborder="0"
            width={"100%"}
            height={"400px"}
          ></iframe>
        </div>
      </Box>
      <style jsx>
        {`
          .contact-info {
            background-image: url(https://m.freekaamaal.com/images/contact-us-bottom.png);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: right;
            padding: 10px;
          }
        `}
      </style>
    </>
  );
};

export default contactUs;
