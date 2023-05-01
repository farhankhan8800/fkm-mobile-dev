// signup page ---------

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import signupImage from "../../public/images/signup.png";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { registerApi } from "../../service/API";
import axios from "axios";
import { useDispatch } from "react-redux";
import { registerToken } from "redux-store/slices/authSlice";
import { ImWarning } from "react-icons/im";
import { BsCheckCircle, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import authPageProtect from "service/auth-page-protect";
import  {GoogleAuth} from "components/social-auth/SocialAuth";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [showPass, setShowPass] = useState(true)
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [userNameErr, setUserNameErr] = useState(false);
  const [mobileErr, setMobileErr] = useState(false);
  const [signupError, setSignupError] = useState("");

  const [callWarning, SetCallWarning] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.removeItem("verified");
  }, []);

  const showPassFun = ()=>{
    setShowPass(!showPass)
  }

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
            device_type:DEVICE_TYPE,
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
          dispatch(registerToken(data))
          // console.log(data)
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
          setSignupError(data.message);
        }
      } catch (error) {
        // console.log(error);
        setSignupError(error.response?.data.message);
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
        <div
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
        </div>
        <div  style={{ width: "100%", padding: " 5px 20px" }}>
           <h1>
              <strong style={{ fontWeight: "400",fontSize: "29px",color: "rgb(65, 61, 61)" }}>SignIn </strong>
           </h1>
          <form onSubmit={onSubmit}>
            <input
              style={{ width: "100%", marginTop: "10px" }}
              id="name"
              value={userName}
              onChange={userNameChangeHandler}
              type="text"
              placeholder="Name"
              className="input_style"
            />
            <p style={{ color: "#f27935", paddingLeft: "5px" }}>
              {userNameErr ? "Please Enter Valid Name" : ""}
            </p>
            <input
              style={{ width: "100%", marginTop: "10px" }}
              id="email"
              value={email}
              onChange={emailChangeHandler}
              type="text"
              placeholder="Email ID"
              className="input_style"
            />
            <p style={{ color: "#f27935", paddingLeft: "5px" }}>
              {emailErr ? "Please Enter Valid Email" : ""}
            </p>
            <div style={{position:"relative"}}>
            <input
              style={{ width: "100%", marginTop: "10px" }}
              id="password"
              value={password}
              onChange={passwordChangeHandler}
              type={showPass? "password":"text"}
              name="password"
              placeholder="Password"
              className="input_style"
            />
             <span className="eye_span_box_ab" onClick={showPassFun}>{showPass? <BsEyeFill  /> : <BsEyeSlashFill />}</span>
            </div>
           
            <p style={{ color: "#f27935", paddingLeft: "5px" }}>
              {passwordErr ? "Please Enter Valid Password" : ""}
            </p>
            <input
              style={{ width: "100%", marginTop: "10px" }}
              id="mobile"
              value={mobile}
              onChange={mobileChangeHandler}
              type="number"
              placeholder="Number"
              name="mobile"
              className="input_style"
            />
            <p style={{ color: "#f27935", paddingLeft: "5px" }}>
              {mobileErr ? "Please Enter Valid Mobile No." : ""}
            </p>
            {showSignUp ? (
              <button
                className="full_with_button"
                disabled
                style={{
                  width: "100%",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "7px 15px",
                  margin: "20px 0 10px 0",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
                type="submit"
              >
                Sign Up
              </button>
            ) : (
              <button
              className="full_with_button"
                style={{
                  width: "100%",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "7px 15px",
                  margin: "20px 0 10px 0",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
                type="submit"
              >
                Sign Up
              </button>
            )}
          </form>
         
          <div component="div" style={{ padding: "10px 0" }}>
            {showSignUp ? (
                <div  className="alert_warning_class" style={{background:"#5cc64a4f",color:"green"}}> <span><BsCheckCircle /></span> <p> Kindly Verify Your OTP And Confirm</p> </div>
              
            ) : (
              ""
            )}
            {callWarning ? (
               <div  className="alert_warning_class"> <span><ImWarning /></span> <p>Please fill out the form</p> </div>
     
            ) : (
              ""
            )}
            {signupError ? (
               <div  className="alert_warning_class"> <span><ImWarning /></span> <p>{signupError} </p></div>
            ) : (
              ""
            )}
            <button
              style={{
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
            </button>
          </div>
          <div  style={{ padding: "10px", display: "flex" }}>
            <div className="d_flex" style={{justifyContent:"space-around",alignItems:"center",width:"100%"}}>
             <GoogleAuth Authpage="Signe Up" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default authPageProtect(SignUp) ;
