import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";

import { FaUser } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { ImWarning } from "react-icons/im";
import { updateUserDataAPI } from "service/API";
import { useGetUser, useUserToken } from "service/customHooks";
import protectRoute from "service/protect-route";
import axios from "axios";

const apiAuth = process.env.API_AUTH;
const DEVICE_TYPE = process.env.DEVICE_TYPE;

const UserEditDetails = () => {
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [error, setError] = useState(null)
  const [updatedSucc, setUpdatedSucc] = useState(null)

  const authToken = useUserToken();
  const userdata = useGetUser()
  const router = useRouter();
  // console.log(userdata)

  useEffect(()=>{
    setUserName(userdata?.data.username)
  },[userdata])


  const onEdit = async (e) => {
    e.preventDefault();
    if(profileImage || userName ){
      try {
        let { data } = await axios.post(
          updateUserDataAPI,
          {
            apiAuth: apiAuth,
            device_type:DEVICE_TYPE,
            title:userName,
            profileimage:profileImage
          },
          {
            headers: {
               "Content-Type": "multipart/form-data",
               Authorization: authToken,
            },
          }
        );
        
        // console.log(data)
        setUpdatedSucc(data.message)
      } catch (error) {
      //  console.log(error)
      }
    }else{
      setError("Att list Update One Input")
    //  console.log("Att list Update One Input")
    }
      
    }
  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
    setUpdatedSucc(null)
    setError(null)
  };
  const fileChangeHandler =(e)=>{
    setProfileImage(e.target.files[0])
    setUpdatedSucc(null)
    setError(null)
    // console.log(e.target.files[0])
  }
  
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
                {/* <FaUser /> */}
                <Image src={userdata?.data.user_img_url} alt="userProfile" height={45} width={45}></Image>
              </div>
              <div  style={{paddingLeft:"10px"}}>
                <h6
                 className="heading"
                  style={{ fontWeight: "600" }}
                >
                  {userdata?.data.username}
                 
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
              
              <input
                style={{ width: "100%" }}
                id="file"
                onChange={fileChangeHandler}
                type="file"
                accept="image/*"
                name="file"
                placeholder="Your Profile Image"
                className="input_style"
              />

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
            </form>
            <div component="div" sx={{ padding: "10px 0" }}>
            {
              error ?   <div  className="alert_warning_class"> <span><ImWarning /></span> <p>{error}</p> </div>:""
            }
            {
              updatedSucc ?<div  className="alert_warning_class" style={{background:"#5cc64a4f",color:"green"}}> <span><BsCheckCircle /></span> <p> {updatedSucc} </p> </div>:""
            }
             
            </div>
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
          overflow: hidden;
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

export default  protectRoute(UserEditDetails) ;
