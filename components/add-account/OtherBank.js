import React, { useState } from "react";
import axios from "axios";
import {add_accountAPI} from "service/API"

import { ImWarning } from "react-icons/im";
import { AiFillInfoCircle } from "react-icons/ai";
import { useUserToken } from "service/customHooks";
import { useRouter } from "next/router";

const OtherBank = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [notValid, setNotValid] = useState(null);
  const [serverdata, setServerdata] = useState()

  const router = useRouter()
  const authToken = useUserToken()

  const apiAuth = process.env.API_AUTH
  const DEVICE_TYPE = process.env.DEVICE_TYPE

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name && phone) {
      if (name.length > 2) {
        if (phone.length == 10) {
                try {
                  let{data}= await axios.post(add_accountAPI,{
                    
                      apiAuth:apiAuth,
                      device_type: DEVICE_TYPE,
                      paytmphone: phone,
                      account_type:"paytm",
                      paytmname:name,
                    },{
                    headers: {
                      Authorization:authToken
                    }
                   })

                    if(data.code == "401"){
                       return router.push("/session-expired")
                    }
                   if(data.status == 1){
                    setTimeout(function(){
                      setName("")
                      setPhone("")
                      setServerdata(data.message)
                    }, 500);
                         
                   }else{
                    setServerdata(data.message)
                   }
                } catch (error) {
                }

        } else {
          setNotValid("Fill the Valid Phone Number");
        }
      } else {
        setNotValid("Fill the Valid Name");
      }
    } else {
      setNotValid("Fill the all details ");
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    setNotValid(null);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
    setNotValid(null);
  };
 
  return (
    <>
     <div style={{paddingTop:"20px"}}>
        <hr></hr>
     <div sx={{paddingTop:"10px"}}>
            <form onSubmit={onSubmit}>
              <label>Paytm Account Holder Name</label>
              <input
                value={name}
                onChange={nameHandler}
                type="text"
                id="outlined-basic"
                placeholder="Name"
                className="input_style" 
                style={{width:"100%",padding: "6px 10px"}}
              />
              <label>Phone Number</label>
              <input
                className="input_style" 
                style={{width:"100%",padding: "6px 10px"}}
                onChange={phoneHandler}
                type="number"
                value={phone}
                id="outlined-basic"
                placeholder="Phone Number"
              
              />
              <div style={{ padding: "10px 0" }}>
                <button
                  type="submit"
                  className="full_with_button"
                  style={{ width: "100%", color: "#fff", fontWeight: "600" }}
                >
                  {" "}
                  Save
                </button>
              </div>
              {notValid ? <div  className="alert_warning_class"> <span><ImWarning /></span> <p>{notValid}</p> </div> : ""}
              {
                serverdata ? <div  className="alert_info_class"> <span><AiFillInfoCircle /></span> <p>{serverdata}</p> </div>:""
              }
            </form>
          </div>
     </div>
     
      <style jsx>{`
        label{
            display: block;
            padding: 9px 2px 5px;
        }
    `}</style>
    </>
  );
};

export default OtherBank;
