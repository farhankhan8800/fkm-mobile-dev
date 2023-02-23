import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import enterOtpImage from "public/images/enter-otp.png";

import { Box, Button, Typography, TextField, Alert } from "@mui/material";
import Image from "next/image";
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import {withdrawMoneyAPI} from "service/API"
import axios from "axios";

const VerifyWithdrawMoney = () => {
  const [OTP, setOTP] = useState();
  const [userToken, setUserToken] = useState();
  const [OtpErr, setOtpErr] = useState(false);
  const [serverErr, setServerErr] = useState();
  const [successAlert, setSuccessAlert] = useState();
  const [verifyPayment, setVerifyPayment] = useState()
  const router = useRouter();

  const apiAuth = process.env.API_AUTH;

  useEffect(() => {
    setUserToken(JSON.parse(localStorage.getItem("user")).token)
    setVerifyPayment(JSON.parse(sessionStorage.getItem("verifydata")))
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (OTP) {
      try {
        let { data } = await axios.post(
          withdrawMoneyAPI,
          {
            apiAuth: apiAuth,
            userotp: OTP,
            wallet_name:verifyPayment.wallet_name,
            code_reference:verifyPayment.code_reference,
            request_id:verifyPayment.request_id,
            option:"confirmotp",
          },
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        console.log(data)
        if (data.status == 1) {
          setTimeout(()=>{
            setSuccessAlert(data.message)
          },300);
          setTimeout(()=>{
            router.push("/cashback-summary/withdraw-money")
            sessionStorage.clear();
          },500)

        }else if(data.status == 0 ){
          data.message ? setServerErr(data.message) : setServerErr(data.msg)
        }
       
      } catch (error) {
        console.log(error);
      }
    } else {
      setOtpErr(true);
      
    }
  };


  const otpHandler = (e) => {
    setOtpErr(false);
    setOTP(e.target.value);
    setServerErr("")
  }
// console.log( "verify payment",verifyPayment)

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
            An 6 digit code has been sand to Phone/Email
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
              onChange={otpHandler}
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
                <Alert severity="error">{serverErr}</Alert>
              </Box>
            ) : (
              ""
            )}
            {successAlert ? (
              <Box sx={{ paddingTop: "10px" }}>
                <Alert severity="success">{successAlert}</Alert>
              </Box>
            ) : (
              ""
            )}

            

            <Button
              variant="contained"
              sx={{
                width: "100%",
                color: "#fff",
                fontWeight: "bold",
                margin: "10px 0",
                marginTop:"20px",
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

export default VerifyWithdrawMoney;
