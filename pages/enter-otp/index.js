import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import enterOtpImage from "../../public/images/enter-otp.png";

import { Box, Button, Typography, TextField, Alert } from "@mui/material";
import Image from "next/image";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { verifyUser } from "service/API.js";
import axios from "axios";

const EnterOtp = () => {
  const [OTP, setOTP] = useState();
  const [OtpErr, setOtpErr] = useState(false);
  const [serverErr, setServerErr] = useState();
  const [registerToken, setRegisterToken] = useState();
  const [time, setTime] = useState(90);
  const [successAlert, setSuccessAlert] = useState(false);
  const [checkVerified, setCheckVerified] = useState()
  const router = useRouter();

  const apiAuth = process.env.API_AUTH;
  useEffect(() => {
   
    setRegisterToken(JSON.parse(localStorage.getItem("registerToken")).token);
  
    resendOTP();
  }, []);
  useEffect(()=>{
    setCheckVerified(localStorage.getItem("verified"))
    if(checkVerified){
      router.push("/login");
    }
  },[checkVerified, router])

  const resendOTP = () => {};
  
  useEffect(() => {
    if (time == 0) {
      setTime(time);
    } else {
      const timer = setInterval(function () {
        setTime(time - 1);
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [time]);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (OTP) {
      try {
        let { data } = await axios.post(
          verifyUser,
          {
            apiAuth: apiAuth,
            phoneotp: OTP,
          },
          {
            headers: {
              Authorization: registerToken,
            },
          }
        );
        if (data.status == 1) {
          setTimeout(()=>{
            setSuccessAlert(true)
          },500);
          setTimeout(()=>{
            router.push("/login")
            localStorage.setItem("verified", "successfully");
          },1000);
        }
      } catch (error) {
        setServerErr(error.response.data);
      }
    } else {
      setOtpErr(true);
    }
  };

  const headeTitle = "Enter OTP | Freekaamaal";
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
            src={enterOtpImage}
            alt="LogIn "
            height={300}
            width={300}
            style={{}}
          ></Image>
        </Box>
        <Box component="div" style={{ width: "100%", padding: " 5px 20px" }}>
          <Typography variant="h5" component="h5">
            <strong style={{ fontWeight: "800" }}>Enter OTP</strong>
          </Typography>
          <Typography variant="body1" component="p" sx={{ padding: "5px 0" }}>
            An 6 digit code has been sand to
          </Typography>
          <form
            className="enter_otp_component"
            style={{ paddingTop: "10px" }}
            onSubmit={onSubmit}
          >
            <TextField
              sx={{ width: "100%", marginTop: "10px" }}
              size="small"
              id="otp"
              maxLength="6"
              value={OTP}
              label="Enter 6 digit OTP"
              onChange={(e) => {
                setOtpErr(false);
                setOTP(e.target.value);
              }}
              type="number"
              placeholder=" Enter 6 digit OTP "
              variant="outlined"
            />
            {OtpErr ? (
              <Box sx={{ paddingTop: "10px" }}>
                <Alert severity="error">Please Enter Valid OTP</Alert>
              </Box>
            ) : (
              ""
            )}
            {serverErr ? (
              <Box sx={{ paddingTop: "10px" }}>
                <Alert severity="error">{serverErr.message}</Alert>
              </Box>
            ) : (
              ""
            )}
            {successAlert ? (
              <Box sx={{ paddingTop: "10px" }}>
                <Alert severity="success">You are verified Successfully</Alert>
              </Box>
            ) : (
              ""
            )}

            <Box
              sx={{
                display: "flex",
                padding: "10px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize={"21px"}
                fontWeight={"600"}
                color={"#f27935"}
              >
                00:{time}s
              </Typography>
              {time == 0 ? (
                <Button variant="outlined">Re send OTP</Button>
              ) : (
                <Button disabled variant="outlined">
                  Re send OTP
                </Button>
              )}
            </Box>

            <Button
              variant="contained"
              sx={{
                width: "100%",
                color: "#fff",
                fontWeight: "bold",
                margin: "10px 0",
                letterSpacing: "1px",
                fontSize: "17px",
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

export default EnterOtp;
