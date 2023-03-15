// login page --------------------

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import logInImage from "../../public/images/login.png";
import {
  Box,
  Button,
  Typography,
  TextField,
  Divider,
  Alert,
} from "@mui/material";
import Link from "next/link";
import googleImage from "public/images/google.png";
import facebookImage from "public/images/facebook.png";
import Image from "next/image";
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";
import { loginUser } from "service/API";
import { useDispatch } from "react-redux";
import { loginFun } from "store/slices/UserSlice"; 


const apiAuth = process.env.API_AUTH;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [callWarning, SetCallWarning] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [userdata, setUserdata] = useState();
  const [serverErr, setServerErr] = useState("");
  const headeTitle = "Login | Freekaamaal";
  const router = useRouter();

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
        let result = await fetch(loginUser, {
          method: "POST",
          body: JSON.stringify({
            apiAuth: apiAuth,
            email: email,
            password: password,
          }),
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        result = await result.json({});
        if (result.status == 1) {
          localStorage.setItem("user", JSON.stringify(result));
          dispatch(loginFun(result))
          setEmail("");
          setPassword("");
          setTimeout(() => {
            router.push("/");
          }, 300);
        } else {
          setServerErr(result);
          console.log(result.message);
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
            src={logInImage}
            alt="LogIn "
            width={300}
            height={300}
            style={{}}
          ></Image>
        </Box>
        <Box component="div" style={{ width: "100%", padding: " 5px 20px" }}>
          <Typography variant="h5" component="h5">
            <strong style={{ fontWeight: "800" }}>LogIn</strong>
          </Typography>
          <form onSubmit={onSubmit}>
            <TextField
              sx={{ width: "100%", marginTop: "10px" }}
              size="small"
              id="email"
              value={email}
              onChange={emailChangeHandler}
              type="text"
              label="Email/User ID"
              placeholder="Email/User ID"
              variant="outlined"
            ></TextField>
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
            ></TextField>
            <p style={{ color: "#f27935", paddingLeft: "5px" }}>
              {passwordErr ? "Please Enter Strong Password" : ""}
            </p>
            <Box
              component="div"
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
            </Box>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                color: "#fff",
                fontWeight: "bold",
                margin: "10px 0",
                fontSize: "17px",
                letterSpacing: "1px",
              }}
              type="submit"
            >
              LogIn
            </Button>
            {callWarning ? (
              <Alert severity="warning">Please fill out the form </Alert>
            ) : (
              ""
            )}
            {serverErr ? (
              <Alert severity="warning">{serverErr.message}</Alert>
            ) : (
              ""
            )}
          </form>
          <Divider textAlign="center">OR</Divider>
          <Box component="div" sx={{ p: 1 }}>
            <Button
              variant="contained"
              sx={{ width: "100%", bgcolor: "#f2793552", marginBottom: "15px" }}
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
            </Button>
            <Button
              variant="contained"
              sx={{ width: "100%", bgcolor: "#f2793552", marginBottom: "15px" }}
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
            </Button>
          </Box>
          <Box component="div" sx={{ p: 1 }}>
            <Button
              sx={{
                width: "100%",
                marginBottom: "5px",
                color: "gray",
                textTransform: "capitalize",
              }}
            >
              New To FreeKaaMaal ?{" "}
              <Link
                href="/signup"
                style={{
                  color: "#4343e9",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                &nbsp; Register
              </Link>
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Login;
