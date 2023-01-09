import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import enterOtpImage from "../../public/images/enter-otp.png";
// import OTPInput  from "otp-input-react";
// import OTPInput, { ResendOTP } from "otp-input-react";
import { Box, Button, Typography, TextField, Alert} from "@mui/material";
import Image from "next/image";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import {verifyUser} from  "service/API.js"
import axios from 'axios';


const EnterOtp = () => {
  const [OTP, setOTP] = useState();
  const [OtpErr, setOtpErr] = useState(false);
  const [serverErr, setServerErr] = useState()
  const [registerToken, setRegisterToken] = useState()
  const router = useRouter();

  const apiAuth = process.env.API_AUTH
  useEffect(()=>{
   
  },[])
 
  // console.log(registerToken)
  
  const onSubmit = async (e) => {
    e.preventDefault()
      setRegisterToken(JSON.parse(localStorage.getItem("registerToken")).token)
     if(OTP){
      try {
       

        // let result = await fetch(verifyUser, {
        //   method: "post",
        //   headers:headers ,
        //   mode: 'cors',
        //   body: JSON.stringify({
        //     apiAuth:apiAuth,
        //     phoneotp:OTP
        //   }),
        // });
        // result = await result.json();
       
        // if(result.status == 1){
  
        //    setTimeout(() => {
        //      localStorage.clear("registerToken")
        //      setOTP("");
        //       router.push("/login");
        //     }, 1000);
        // }else{
        //   setServerErr(result)
         
        // }
        let { result } = await axios.post(verifyUser, {
              apiAuth:apiAuth,
              phoneotp:OTP
            },{
              headers:{
                'Access-Control-Allow-Origin':'*',
                Authorization:registerToken
                
              }
            })
        console.log(result)
      } catch (error) {
      }
     }
     else{
      setOtpErr(true)
  };
  }

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
              onChange={ (e) => setOTP(e.target.value)}
              type="number"
              placeholder=" Enter 6 digit OTP "
              variant="outlined"
            />
            {
               OtpErr ?<Box sx={{paddingTop:"10px"}}><Alert severity="error">Please Enter Valid OTP</Alert></Box>:""
            }
              {
                serverErr? <Box sx={{paddingTop:"10px"}}><Alert severity="error">{serverErr.message}</Alert></Box>:""
            }
           
            {/* <OTPInput
              value={OTP}
              inputClassName="input_otp_box"
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              timeInterval="120"
              otpType="number"
              disabled={false}
            /> */}
            {/* <ResendOTP
              handelResendClick={() => console.log("Resend clicked")}
            /> */}
            <Button
              variant="contained"
              sx={{
                width: "100%",
                color: "#fff",
                fontWeight: "bold",
                margin: "20px 0",
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
}

export default EnterOtp
