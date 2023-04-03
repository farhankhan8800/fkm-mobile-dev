// login page --------------------

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import logInImage from "../../public/images/login.png";

import Link from "next/link";
import googleImage from "public/images/google.png";
import facebookImage from "public/images/facebook.png";
import Image from "next/image";
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import { loginUser } from "service/API";
import { useDispatch } from "react-redux";
import { loginFun } from "redux-store/slices/UserSlice"; 
import axios from "axios";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { ImWarning } from "react-icons/im";


const apiAuth = process.env.API_AUTH;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [callWarning, SetCallWarning] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [userdata, setUserdata] = useState();
  const [serverErr, setServerErr] = useState("");
  const [showPass, setShowPass] = useState(true)
  const headeTitle = "Login | Freekaamaal";

  const router = useRouter();

  const showPassFun = ()=>{
    setShowPass(!showPass)
  }

  const dispatch = useDispatch()
  
  useEffect(() => {
    setUserdata(localStorage.getItem("user"));
    if (userdata) {
      router.push("/");
    }
  }, [router, userdata]);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (email.length < 4 || password.length < 6) {
      SetCallWarning(true);
    } else {
      try {
        let {data} = await axios.post(loginUser, {
            apiAuth: apiAuth,
            email: email,
            password: password,
           },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
        );

        // console.log(data.data)
        if (data.status == 1) {
          localStorage.setItem("user", JSON.stringify(data));
          dispatch(loginFun(data))
          setEmail("");
          setPassword("");
          setTimeout(() => {
            router.push("/");
          }, 300);
        } else {
          setServerErr(data);
        
        }
      } catch (err) {}
    }
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
    setPassword(item);
    SetCallWarning(false);
  };


  return (
    <>
      <HeadTag headeTitle={headeTitle} />
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
            src={logInImage}
            alt="LogIn "
            width={300}
            height={300}
          ></Image>
        </div>
        <div  style={{ width: "100%", padding: " 5px 20px" }}>
          <h1 >
            <strong style={{ fontWeight: "400",fontSize: "29px",color: "rgb(65, 61, 61)" }}>LogIn</strong>
          </h1>
          <form onSubmit={onSubmit}>
            <input
              style={{ width: "100%", marginTop: "10px" }}
              id="email"
              className="input_style"
              value={email}
              onChange={emailChangeHandler}
              type="text"
              name="email"
              placeholder="Email/User ID"
             />
            <p style={{ color: "#f27935", paddingLeft: "5px" }}>
              {emailErr ? "Please Enter Valid Email" : ""}
            </p>
            <div style={{position:"relative"}}>
            <input
              style={{ width: "100%", marginTop: "10px" }}
              id="password"
              value={password}
              className="input_style"
              onChange={passwordChangeHandler}
              type={showPass? "password":"text"}
              name="password"
              placeholder="Password"
            />
             <span className="eye_span_box_ab" onClick={showPassFun}>{showPass? <BsEyeFill  /> : <BsEyeSlashFill />}</span>
            </div>
           
            <p style={{ color: "#f27935", paddingLeft: "5px" }}>
              {passwordErr ? "Please Enter Strong Password" : ""}
            </p>
            <div
              style={{ width: "100%", padding: " 10px 0", textAlign: "right" }}
            >
              {" "}
              <Link
                style={{
                  color: "#4343e9",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                href="/forgot-password"
              >
                Forgot Password ?
              </Link>
            </div>
            <button
              className="full_with_button"
              style={{
                padding: "6px 15px",
                margin: "10px 0",
                fontSize: "17px",
              }}
              type="submit"
            >
              LogIn
            </button>

           
            {callWarning ? (
               <div  className="alert_warning_class"> <span><ImWarning /></span> <p>Please fill out the form</p> </div>
             
            ) : (
              ""
            )}
            {serverErr ? (
              <div  className="alert_warning_class"> <span><ImWarning /></span> <p>{serverErr.data.message}</p> </div>
            ) : (
              ""
            )}
          </form>
          <div className="divider_line_class">
            <span className="divider_ab_text">OR</span>
          </div>
          <div  style={{ padding: "8px" }}>
            <button
             className="full_with_button"
              style={{padding: "8px 15px", width: "100%", background: "#f2793552", marginBottom: "15px" }}
            >
              {" "}
              <Link
                href="/"
                style={{
                  color: "#000",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  height={20}
                  width={20}
                  style={{ marginRight: "10px" }}
                  src={googleImage}
                  alt="Google"
                ></Image>{" "}
                <span>Login With Google</span>
              </Link>{" "}
            </button>
            <button
              className="full_with_button"
              style={{ padding: "8px 15px", width: "100%", background: "#f2793552", marginBottom: "15px" }}
            >
              {" "}
              <Link
                href="/"
                style={{
                  color: "#000",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  height={20}
                  width={20}
                  style={{ marginRight: "10px" }}
                  src={facebookImage}
                  alt="Google"
                ></Image>{" "}
                <span>Login With Facebook</span>
              </Link>{" "}
            </button>
          </div>
          <div  style={{ padding: "10px" }}>
            <button
           
              style={{
                width: "100%",
                marginBottom: "5px",
                color: "gray",
                textTransform: "capitalize",
              }}
            >
              New To FreeKaaMaal ?{" "}
              <Link
              className="text_button"
                href="/signup"
                style={{
                  color: "#4343e9",
                  textDecoration: "none",
                  
                }}
              >
                &nbsp; Register
              </Link>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`

        .divider_line_class{
          position: relative;
          width: 100%;
          height: 1px;
          background: #b0acac;
          margin: 23px 0;
          opacity: .7;
        }
        .divider_ab_text{
          position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: var(--second-color);
    display: inline-block;
    padding: 2px;
    opacity: 1;
        }
       
        `}
      </style>
    </>
  );
};

export default Login;
