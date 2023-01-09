import React, { useState } from "react";
import fPasswordImage from "../../public/assets/images/f-password.png";
import { useRouter } from "next/router";
import { Box, Button, Typography, TextField } from "@mui/material";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Image from "next/image";

const ForgotPassword = () => {
  const [forgotPassword, setForgotPassword] = useState("");
  const [email_Mobile_Err, setEmail_Mobile_Err] = useState(false);

  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(`email = ${forgotPassword}`)
    setTimeout(() => {
      setForgotPassword("");
      router.push("/enter-otp");
    }, 1000);
  };

  const headeTitle = "Forgot Password | Freekaamaal";
  const forgotPasswordChangeHandler = (e) => {
    setForgotPassword(e.target.value);
  };

  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <Box
          component="div"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={fPasswordImage}
            alt="LogIn "
            width={300}
            height={300}
            style={{}}
          ></Image>
        </Box>
        <Box component="div" style={{ width: "100%", padding: " 5px 20px" }}>
          <Typography variant="h5" component="h5">
            <strong style={{ fontWeight: "800" }}>Forgot Password</strong>
          </Typography>
          <Typography variant="body1" component="p">
            {" "}
            Don&apos;t worry ! It happens. Please enter the address Associated
            with your acount.
          </Typography>
          <form style={{ paddingTop: "30px" }} onSubmit={onSubmit}>
            <TextField
              sx={{ width: "100%", marginTop: "10px" }}
              size="small"
              id="forgotPassword"
              value={forgotPassword}
              onChange={forgotPasswordChangeHandler}
              type="text"
              label="Email ID / Mobile Number"
              placeholder="Email ID / Mobile Number"
              variant="outlined"
            />
            {
              <p style={{ color: "#f27935", paddingLeft: "5px" }}>
                {email_Mobile_Err ? "Please Enter Valid Name" : ""}
              </p>
            }
            <Button
              variant="contained"
              sx={{
                width: "100%",
                letterSpacing: "1px",
                fontSize: "17px",
                color: "#fff",
                fontWeight: "bold",
                margin: "20px 0",
              }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Box>
      </div>
    </>
  );
};

export default ForgotPassword;
