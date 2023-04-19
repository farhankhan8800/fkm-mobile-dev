import React, { useState } from "react";
import resetPasswordImage from "../../public/images/reset-password.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
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
              id="newPassword"
              value={newPassword}
              onChange={newPasswordChangeHandler}
              type="text"
              placeholder="New Password"
             
            />

            <input
              style={{ width: "100%", marginTop: "10px" }}
              className="input_style"
              id="conformPassword"
              value={conformPassword}
              onChange={conformPasswordChangeHandler}
              type="text"
              placeholder="Conform Password"
            />
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
