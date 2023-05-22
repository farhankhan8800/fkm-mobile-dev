import React, { useState } from "react";
import fPasswordImage from "../../public/images/f-password.png";
import { useRouter } from "next/router";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Image from "next/image";
import authPageProtect from "service/auth-page-protect";
import axios from "axios";
import { forgotPasswordAPI } from "service/API";

const apiAuth = process.env.API_AUTH;


const ForgotPassword = () => {
  const [forgotPassword, setForgotPassword] = useState("");
  const [email_Mobile_Err, setEmail_Mobile_Err] = useState(false);
  const [verifyUser,setVerifyUser]= useState("")

  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (forgotPassword.length < 4) {
      setEmail_Mobile_Err(true);
    }else{
      try {
        const {data} = await axios.post(forgotPasswordAPI,{
          apiAuth: apiAuth,
          useremail: forgotPassword,
        })

        if(data.status == 0){
          setEmail_Mobile_Err(true);
        }else{
          // console.log(data)
          if(data.status == 1){
            setVerifyUser(data.message)
            setForgotPassword("")
            sessionStorage.setItem("forgot-password-token",data.token);
            setTimeout(()=>{
             router.push("reset-password")
            },3000)
          }
        }
      } catch (error) {
        //  console.log(error)
      }
      
    }
   
  };

  const headeTitle = "Forgot Password | Freekaamaal";

  const forgotPasswordChangeHandler = (e) => {
    setEmail_Mobile_Err(false)
    setForgotPassword(e.target.value);
  };

  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
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
            src={fPasswordImage}
            alt="LogIn "
            width={300}
            height={300}
            style={{}}
          ></Image>
        </div>
        <div  style={{ width: "100%", padding: " 5px 20px" }}>
           <h1>
              <strong style={{ fontWeight: "400",fontSize: "29px",color: "rgb(65, 61, 61)" }}> Forgot Password </strong>
           </h1>
          <h4 className="heading_text" >
            {" "}
            Don&apos;t worry ! It happens. Please enter the address Associated
            with your acount.
          </h4>
          <form style={{ paddingTop: "30px" }} onSubmit={onSubmit}>
            <input
              style={{ width: "100%", marginTop: "10px" }}
              className="input_style"
              id="forgotPassword"
              value={forgotPassword}
              onChange={forgotPasswordChangeHandler}
              type="text"
              placeholder="Email ID / Mobile Number"
              
            />
            {
              <p style={{ color: "rgb(62 133 64)", paddingLeft: "5px", marginTop:"5px"}}>
                {verifyUser}
              </p>
            }
            <button
               className="contain_button"
               style={{
                width: "100%",
                letterSpacing: "1px",
                fontSize: "17px",
                color: "#fff",
                fontWeight: "bold",
                margin: "20px 0",
                padding: "6px 15px"
              }}
              type="submit"
            >
              Submit
            </button>
            <p style={{ color: "#f27935", paddingLeft: "5px", marginTop:"5px"}}>
                {email_Mobile_Err ? "Enter Valid Email Id  Or Phone No." : ""}
            </p>
          </form>
        </div>
      </div>
      
    </>
  );
};

export default authPageProtect(ForgotPassword) ;
