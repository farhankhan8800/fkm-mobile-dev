import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import enterOtpImage from "../../public/images/enter-otp.png";

import { Box, Button, Typography, TextField, Alert } from "@mui/material";
import Image from "next/image";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { verifyUser } from "service/API.js";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { clearToken, loginVarifid } from "redux-store/slices/authSlice";
import { BiErrorCircle } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";

const EnterOtp = () => {
  const [OTP, setOTP] = useState();
  const [OtpErr, setOtpErr] = useState(false);
  const [serverErr, setServerErr] = useState();
  const [registerToken, setRegisterToken] = useState();
  const [time, setTime] = useState(90);
  const [successAlert, setSuccessAlert] = useState(false);
  const [checkVerified, setCheckVerified] = useState()
  const router = useRouter();

  const token=  useSelector((state)=>{return state.authSlice})
   console.log(registerToken)
  const dispatch = useDispatch()
  const apiAuth = process.env.API_AUTH;

  useEffect(() => {
    setRegisterToken(token.data?.token);
    resendOTP();
  },[token]);
  useEffect(()=>{
    setCheckVerified(token.verified == "successfully")
    if(checkVerified){
      router.push("/login");
    }
  },[checkVerified,token, router])

  const resendOTP = () => {};
  
  // useEffect(() => {
  //   if (time == 0) {
  //     setTime(time);
  //   } else {
  //     const timer = setInterval(function () {
  //       setTime(time - 1);
  //     }, 1000);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }
  // }, [time]);
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
            // localStorage.setItem("verified", "successfully");
            dispatch(loginVarifid("successfully"))
            dispatch(clearToken(null))
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
        <div
        
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
        </div>
        <div component="div" style={{ width: "100%", padding: " 5px 20px" }}>
           <h1>
              <strong style={{ fontWeight: "400",fontSize: "29px",color: "rgb(65, 61, 61)" }}>Enter OTP </strong>
           </h1>
           <h4 className="heading_text"  >  An 6 digit code has been sand to</h4> 
          <form
            className="enter_otp_component"
            style={{ paddingTop: "10px" }}
            onSubmit={onSubmit}
          >
            <input
              style={{ width: "100%", marginTop: "10px" }}
              id="otp"
              maxLength="6"
              value={OTP}
              onChange={(e) => {
                setOtpErr(false);
                setOTP(e.target.value);
              }}
              type="number"
              placeholder=" Enter 6 digit OTP "
              className="input_style"
            />
            
            {OtpErr ? (
              <div style={{ paddingTop: "10px" }}>
                <div  className="alert_warning_class" style={{background:" #f0462b4f"}}> <span><BiErrorCircle /></span> <p>Please Enter Valid OTP</p> </div>
               
              </div>
            ) : (
              ""
            )}
            {serverErr ? (
              <div style={{ paddingTop: "10px" }}>
                <div  className="alert_warning_class" style={{background:" #f0462b4f"}}> <span><BiErrorCircle /></span> <p>{serverErr.message}</p> </div>
                
              </div>
            ) : (
              ""
            )}
            {successAlert ? (
              <div style={{ paddingTop: "10px" }}>
                 <div  className="alert_warning_class" style={{background:"#5cc64a4f",color:"green"}}> <span><BsCheckCircle /></span> <p> Kindly You are verified Successfully</p> </div>
               
              </div>
            ) : (
              ""
            )}

            <div
              style={{
                display: "flex",
                padding: "10px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3
              className=""
              style={{fontSize:"21px", fontWeight:"600",color:"#f27935"}}
                
              >
                00:{time}s
              </h3>
              {time == 0 ? (
                <button className="border_button">Re send OTP</button>
              ) : (
                <button disabled className="border_button">
                  Re send OTP
                </button>
              )}
            </div>

            <button
              className="contain_button"
              style={{
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
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EnterOtp;
