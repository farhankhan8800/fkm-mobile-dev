// signup page ---------

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import signupImage from "../../public/images/signup.png";
import { Box, Button, Typography, TextField, Grid, Alert } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { registerApi } from "../../service/API";
import axios from "axios";

const apiAuth = process.env.API_AUTH;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [userNameErr, setUserNameErr] = useState(false);
  const [mobileErr, setMobileErr] = useState(false);
  const [signupError, setSignupError] = useState("");

  const [callWarning, SetCallWarning] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [userdata, setUserdata] = useState();
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("verified");
    setUserdata(localStorage.getItem("user"));
    if (userdata) {
      router.push("/");
    }
  }, [router, userdata]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSignupError("");
    if (
      email.length < 4 ||
      password.length < 6 ||
      userName.length < 3 ||
      mobile.length < 9
    ) {
      SetCallWarning(true);
    } else {
      try {
        let { data } = await axios.post(
          registerApi,
          {
            apiAuth: apiAuth,
            email: email,
            pass: password,
            phone: mobile,
            device_type: "1",
            name: userName,
            referral_code: "",
            app_device_id: "",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (data.status == "1") {
          localStorage.setItem("registerToken", JSON.stringify(data));
          setTimeout(() => {
            setEmail("");
            setPassword("");
            setUserName("");
            setMobile("");
            setShowSignUp(true);
          }, 500);
          setTimeout(() => {
            router.push("/enter-otp");
          }, 3000);
        } else {
        }
      } catch (error) {
        console.log(error);
        setSignupError(error.response.data.message);
      }
    }
  };

  const userNameChangeHandler = (e) => {
    const item = e.target.value;
    let nameRegex = /^[a-zA-Z]*$/;
    if (item.length < 3 || nameRegex.test(item) == false) {
      setUserNameErr(true);
      setUserName("");
    } else {
      setUserNameErr(false);
    }
    setUserName(item);
  };

  const mobileChangeHandler = (e) => {
    const item = e.target.value;
    if (item.length < 9) {
      setMobileErr(true);
      setMobile("");
    } else {
      setMobileErr(false);
    }
    setMobile(item);
  };

  const emailChangeHandler = (e) => {
    const item = e.target.value;
    if (item.length < 4) {
      setEmailErr(true);
      setEmail("");
    } else {
      setEmailErr(false);
    }
    setEmail(item);
    SetCallWarning(false);
  };

  const passwordChangeHandler = (e) => {
    const item = e.target.value;
    if (item.length < 6) {
      setPasswordErr(true);
      setPassword("");
    } else {
      setPasswordErr(false);
    }
    setPassword(e.target.value);
  };
  const headeTitle = "SignUp | Freekaamaal";

  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
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
            src={signupImage}
            alt="signUp "
            height={300}
            width={300}
            style={{}}
          ></Image>
        </Box>
        <Box component="div" style={{ width: "100%", padding: " 5px 20px" }}>
          <Typography variant="h5" component="h5">
            <strong style={{ fontWeight: "800" }}>Sign Up & Earn</strong>
          </Typography>

          <form onSubmit={onSubmit}>
            <TextField
              sx={{ width: "100%", marginTop: "10px" }}
              size="small"
              id="name"
              value={userName}
              onChange={userNameChangeHandler}
              type="text"
              label="Name"
              placeholder="Name"
              variant="outlined"
            />
            <p style={{ color: "#f27935", paddingLeft: "5px" }}>
              {userNameErr ? "Please Enter Valid Name" : ""}
            </p>
            <TextField
              sx={{ width: "100%", marginTop: "10px" }}
              size="small"
              id="email"
              value={email}
              onChange={emailChangeHandler}
              type="text"
              label="Email ID"
              placeholder="Email ID"
              variant="outlined"
            />
            <p style={{ color: "#f27935", paddingLeft: "5px" }}>
              {emailErr ? "Please Enter Valid Email" : ""}
            </p>
            <TextField
              sx={{ width: "100%", marginTop: "10px" }}
              id="password"
              value={password}
              onChange={passwordChangeHandler}
              type="current-password"
              size="small"
              name="password"
              label="Password"
              placeholder="Password"
              variant="outlined"
            />
            <p style={{ color: "#f27935", paddingLeft: "5px" }}>
              {passwordErr ? "Please Enter Valid Password" : ""}
            </p>
            <TextField
              sx={{ width: "100%", marginTop: "10px" }}
              id="mobile"
              value={mobile}
              onChange={mobileChangeHandler}
              type="number"
              size="small"
              name="mobile"
              label="Mobile No."
              variant="outlined"
            />
            <p style={{ color: "#f27935", paddingLeft: "5px" }}>
              {mobileErr ? "Please Enter Valid Mobile No." : ""}
            </p>
            {showSignUp ? (
              <Button
                variant="contained"
                disabled
                sx={{
                  width: "100%",
                  color: "#fff",
                  fontWeight: "bold",
                  margin: "20px 0 10px 0",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
                type="submit"
              >
                Sign Up
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  color: "#fff",
                  fontWeight: "bold",
                  margin: "20px 0 10px 0",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
                type="submit"
              >
                Sign Up
              </Button>
            )}
          </form>
          <Box component="div" sx={{ padding: "10px 0" }}>
            {showSignUp ? (
              <Alert sx={{ marginBottom: "10px" }} severity="success">
                Kindly Verify Your OTP And Confirm
              </Alert>
            ) : (
              ""
            )}
            {callWarning ? (
              <Alert severity="warning">Please fill out the form </Alert>
            ) : (
              ""
            )}
            {signupError ? (
              <Alert severity="warning">{signupError} </Alert>
            ) : (
              ""
            )}
            <Button
              sx={{
                width: "100%",
                marginBottom: "5px",
                color: "gray",
                textTransform: "none",
              }}
            >
              {" "}
              Already have an account ?{" "}
              <Link
                href="/login"
                style={{
                  color: "#4343e9",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                &nbsp; Login
              </Link>
            </Button>
          </Box>
          <Box component="div" sx={{ p: 1, display: "flex" }}>
            <Grid container justifyContent="space-around" alignItems="center">
              <Grid item>
                <Button variant="contained" sx={{ bgcolor: "#f2793552" }}>
                  {" "}
                  <Link
                    href="/"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    {" "}
                    Google
                  </Link>{" "}
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" sx={{ bgcolor: "#f2793552" }}>
                  {" "}
                  <Link
                    href="/"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Facebook
                  </Link>{" "}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default SignUp;
