import React, { useEffect, useState } from "react";
import resetPasswordImage from "../../public/images/reset-password.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import axios from "axios";
import { resetPasswordAPI } from "service/API";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const apiAuth = process.env.API_AUTH;

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [otpInput, setOtpInput] = useState("")
  const [customError, setCustomeError] =  useState()
  const [customValid, setCustomeValid] =  useState()
  const [password_token, setPassword_token] = useState()
  const [showPass, setShowPass] = useState(true)

  useEffect(()=>{
    if(sessionStorage.getItem("forgot-password-token")){
      setPassword_token(sessionStorage.getItem("forgot-password-token"))
    }
  },[])

  // console.log(password_token)

  const router = useRouter();

  const showPassFun = ()=>{
    setShowPass(!showPass)
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    //  console.log(otpInput,newPassword, conformPassword)
     if(newPassword.length < 6 ){
      setCustomeError("New Password must be at least 6  characters")
     }else{
      if(newPassword !== conformPassword){
        setCustomeError("New Password & Conform Password Are Not Match")
       }else{
        if(otpInput.length < 6 ){
          setCustomeError("OTP must be at least 6 characters")
        }else{
           try {
               const {data} = await axios.post(resetPasswordAPI,{
                apiAuth: apiAuth,
                verifycode: otpInput,
                newpass: newPassword,
               },{
                 headers: {
                  "Content-Type": "application/json",
                   Authorization:password_token
                  },
               }) 
               if(data.status == 0){
                setCustomeError(data.message)
               }else{
                if(data.status == 1){
                  setCustomeValid(data.message)
                  sessionStorage.removeItem("forgot-password-token");
                  setOtpInput("")
                  setConformPassword("");
                  setNewPassword("");
                  setTimeout(() => {
                    router.push("/login");
                  }, 2000);
                 }
               }

              //  console.log(data)
           } catch (error) {
            // console.log(error)
           }
        }
       }
     }
   
  };

  const newPasswordChangeHandler = (e) => {
    setCustomeError("")
    setNewPassword(e.target.value);
  };
  const conformPasswordChangeHandler = (e) => {
    setCustomeError("")
    setConformPassword(e.target.value);
  };
  const otpChangeHandler = (e)=>{
    setCustomeError("")
    setOtpInput(e.target.value)
  }

  const headeTitle = "Reset Password | Freekaamaal";
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
            src={resetPasswordImage}
            alt="resetPassword "
            width={300}
            height={300}
            style={{}}
          ></Image>
        </div>
        <div style={{ width: "100%", padding: " 5px 20px" }}>
       
          <h1 >
            <strong style={{ fontWeight: "400",fontSize: "29px",color: "rgb(65, 61, 61)" }}>Reset Password</strong>
          </h1>
          <h4 className="heading_text">
            Don&apos;t worry ! It happens. Please enter the address Associated
            with your acount.
          </h4>
          <form style={{ paddingTop: "30px" }} onSubmit={onSubmit}>
          <input
              style={{ width: "100%", marginTop: "10px" }}
              className="input_style"
              id="otpInput"
              value={otpInput}
              onChange={otpChangeHandler}
              type="number"
              placeholder="Enter OTP"
            />
        <div style={{position:"relative"}}>
        <input
              style={{ width: "100%", marginTop: "10px" }}
              className="input_style"
              id="newPassword"
              value={newPassword}
              onChange={newPasswordChangeHandler}
              type={showPass? "password":"text"}
              placeholder="New Password"
            />
        <span className="eye_span_box_ab" onClick={showPassFun}>{showPass? <BsEyeFill  /> : <BsEyeSlashFill />}</span>
        </div>
           
     
            <input
              style={{ width: "100%", marginTop: "10px" }}
              className="input_style"
              id="conformPassword"
              value={conformPassword}
              onChange={conformPasswordChangeHandler}
              type={showPass? "password":"text"}
              placeholder="Confirm Password"
            />
            <p style={{color:"#329330",padding:"10px 0 0 10px"}}>{customValid}</p>
            <p style={{color:"#df6060",padding:"10px 0 0 10px"}}>{customError}</p>
            <button
              className="full_with_button"
              style={{
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
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
