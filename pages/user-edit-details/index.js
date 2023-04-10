import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { FaUser } from "react-icons/fa";

const UserEditDetails = () => {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [userNameErr, setUserNameErr] = useState(false);
  const [mobileErr, setMobileErr] = useState(false);
  const [callWarning, SetCallWarning] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const router = useRouter();
  const onEdit = (e) => {
    e.preventDefault();
    if (password.length < 6 || userName.length < 3 || mobile.length < 9) {
      SetCallWarning(true);
    } else {
      setPassword("");
      setUserName("");
      setMobile("");

      setTimeout(() => {
        setShowSignUp(true);
      }, 1000);
      setTimeout(() => {
        router.push("/login");
      }, 3000);
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
  const headeTitle = "Edit your Details | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <div style={{ padding:"15px" }}>
          <div
            style={{
              backgroundColor: "#f27935",
              padding: "10px 20px",
              borderRadius: "10px",
            }}
          >
            <div 
              className="d_flex"
             
              justifyContent="space-around"
              alignItems="center"
              style={{ color: "#fff" }}
            >
             
              <div className="avatar_div">
                <FaUser />
              </div>
              
              <div  style={{paddingLeft:"10px"}}>
                <h6
                 className="heading"
                  style={{ fontWeight: "600" }}
                >
                  {" "}
                  Freekaamaal
                </h6>
                <p className="p_tag_big" style={{color:"#fff"}}>
                  {" "}
                  Thanks for chosing freekaamaal
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{padding:"15px" }}>
          <div  style={{ width: "100%", padding: " 5px 13px" }}>
            <h6 className="heading" >
              <strong style={{ fontWeight: "800" }}>
                Edit Your Information
              </strong>
            </h6>

            <form onSubmit={onEdit}>
             
              <input
                style={{ width: "100%"}}
                className="input_style"
                id="name"
                value={userName}
                onChange={userNameChangeHandler}
                type="text"
                placeholder="Name"
               
              />
              <p style={{ color: "#f27935", paddingLeft: "5px" }}>
                {userNameErr ? "Please Enter Valid Name" : ""}
              </p>
              
              <input
                style={{ width: "100%" }}
                id="password"
                value={password}
                onChange={passwordChangeHandler}
                type="password"
                name="password"
                placeholder="Password"
                className="input_style"
              />
              <p style={{ color: "#f27935", paddingLeft: "5px" }}>
                {passwordErr ? "Please Enter Valid Password" : ""}
              </p>
             
              <input
                style={{ width: "100%" }}
                id="mobile"
                value={mobile}
                onChange={mobileChangeHandler}
                type="number"
                
                name="mobile"
                placeholder="Mobile No."
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
                    margin: "20px 0 10px 0",
                    letterSpacing: "1px",
                    fontSize: "16px",
                  }}
                  type="submit"
                >
                  Edit Details
                </button>
              ) : (
                <button
                className="full_with_button"
                  style={{
                    width: "100%",
                    color: "#fff",
                    fontWeight: "bold",
                    margin: "20px 0 10px 0",
                    letterSpacing: "1px",
                    fontSize: "16px",
                  }}
                  type="submit"
                >
                  Edit Details
                </button>
              )}
            </form>
            <Box component="div" sx={{ padding: "10px 0" }}>
              {showSignUp ? (
                <Alert sx={{ marginBottom: "10px" }} severity="success">
                  You Have Successfully Edit Your Details
                </Alert>
              ) : (
                ""
              )}
              {callWarning ? (
                <Alert severity="warning">Please fill out the form </Alert>
              ) : (
                ""
              )}
            </Box>
          </div>
        </div>
      </div>
      <style jsx>{`
        .avatar_div{
          padding: 10px;
          border: none;
          background: #cac3c3;
          border-radius: 32px;
          width: 45px;
          height: 45px;
          /* text-align: center; */
          justify-content: center;
          align-items: center;
          display: flex;
          color: #fff;
          font-size: 21px;
        }
        .input_style{
          border: 1px solid #bbb9b9;
          margin-top: 13px !important;
        }
        .full_with_button{
          padding: 6px 15px;
        }
      `}</style>
    </>
  );
};

export default UserEditDetails;
