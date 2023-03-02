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
        <Box sx={{ p: 2 }}>
          <Box
            component="div"
            style={{
              backgroundColor: "#f27935",
              padding: "10px 20px",
              borderRadius: "10px",
            }}
          >
            <Grid
              container
              justifyContent="space-around"
              alignItems="center"
              style={{ color: "#fff" }}
            >
              <Grid item>
                <Avatar
                  alt="Freekaamaal"
                  sx={{ border: "3px solid #fff" }}
                  src="/static/images/avatar/1.jpg"
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ fontWeight: "600" }}
                >
                  {" "}
                  Freekaamaal
                </Typography>
                <Typography variant="p" component="p" fontSize="12px">
                  {" "}
                  Thanks for chosing freekaamaal
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box component="div" style={{ width: "100%", padding: " 5px 13px" }}>
            <Typography variant="h6" component="h5">
              <strong style={{ fontWeight: "800" }}>
                Edit Your Information
              </strong>
            </Typography>

            <form onSubmit={onEdit}>
              <label style={{ marginTop: "10px", display: "block" }}>
                Name
              </label>
              <TextField
                sx={{ width: "100%", marginTop: "3px" }}
                size="small"
                id="name"
                value={userName}
                onChange={userNameChangeHandler}
                type="text"
                placeholder="Name"
                variant="outlined"
              />
              <p style={{ color: "#f27935", paddingLeft: "5px" }}>
                {userNameErr ? "Please Enter Valid Name" : ""}
              </p>
              <label style={{ marginTop: "10px", display: "block" }}>
                Password
              </label>
              <TextField
                sx={{ width: "100%", marginTop: "3px" }}
                id="password"
                value={password}
                onChange={passwordChangeHandler}
                type="password"
                size="small"
                name="password"
                placeholder="Password"
                variant="outlined"
              />
              <p style={{ color: "#f27935", paddingLeft: "5px" }}>
                {passwordErr ? "Please Enter Valid Password" : ""}
              </p>
              <label style={{ marginTop: "10px", display: "block" }}>
                Mobile No.
              </label>
              <TextField
                sx={{ width: "100%", marginTop: "3px" }}
                id="mobile"
                value={mobile}
                onChange={mobileChangeHandler}
                type="number"
                size="small"
                name="mobile"
                placeholder="Mobile No."
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
                  Edit Details
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
                  Edit Details
                </Button>
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
          </Box>
        </Box>
      </div>
    </>
  );
};

export default UserEditDetails;
