import React, { useState } from "react";
import resetPasswordImage from "../../public/images/reset-password.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { Box, Button, Typography, TextField } from "@mui/material";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(
    //   `New Password = ${newPassword}, Conform Password =${conformPassword}`
    // );
    setTimeout(() => {
      setNewPassword("");
      setConformPassword("");
      router.push("/login");
    }, 1000);
  };

  const newPasswordChangeHandler = (e) => {
    setNewPassword(e.target.value);
  };
  const conformPasswordChangeHandler = (e) => {
    setConformPassword(e.target.value);
  };
  const headeTitle = "Reset Password | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
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
            src={resetPasswordImage}
            alt="resetPassword "
            width={300}
            height={300}
            style={{}}
          ></Image>
        </Box>
        <Box component="div" style={{ width: "100%", padding: " 5px 20px" }}>
          <Typography variant="h5" component="h5">
            <strong style={{ fontWeight: "800" }}>Reset Password</strong>
          </Typography>
          <Typography variant="body1" component="p">
            {" "}
            Don&apos;t worry ! It happens. Please enter the address Associated
            with your acount.
          </Typography>
          <form style={{ paddingTop: "30px" }} onSubmit={onSubmit}>
            <TextField
              sx={{ width: "100%", marginTop: "10px" }}
              size="small"
              id="newPassword"
              value={newPassword}
              onChange={newPasswordChangeHandler}
              type="text"
              label="New Password"
              placeholder="New Password"
              variant="outlined"
            />

            <TextField
              sx={{ width: "100%", marginTop: "10px" }}
              size="small"
              id="conformPassword"
              value={conformPassword}
              onChange={conformPasswordChangeHandler}
              type="text"
              label="Conform Password"
              placeholder="Conform Password"
              variant="outlined"
            />
            <Button
              variant="contained"
              sx={{
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
            </Button>
          </form>
        </Box>
      </div>
    </>
  );
};

export default ResetPassword;
