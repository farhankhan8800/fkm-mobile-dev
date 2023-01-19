import React, { useState } from "react";
import { Alert, Box, Button, TextField } from "@mui/material";
import axios from "axios";
import {add_accountAPI} from "service/API"
import { useEffect } from "react";


const WithdrawOtherBank = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [notValid, setNotValid] = useState(null);
  const [authToken, setAuthToken] = useState()
  const [serverdata, setServerdata] = useState()


  useEffect(()=>{
    setAuthToken(JSON.parse(localStorage.getItem("user")).token)
  },[])


  const apiAuth = process.env.API_AUTH

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name && phone) {
      if (name.length > 2) {
        if (phone.length == 10) {
                try {
                  let{data}= await axios.post(add_accountAPI,{
                    
                      apiAuth:apiAuth,
                      device_type: "4",
                      paytmphone: phone,
                      account_type:"paytm",
                      paytmname:name,
                    },{
                    headers: {
                      Authorization:authToken
                    }
                   })
                  //  console.log(data)
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

  // console.log(
  //   `${name},${phone},${accountnumber},${ifsc},${bankName},${accountType}`
  // );
  //     setName("");
  //     setPhone("");
  //     setAccountNumber("");
  //     setIfsc("");
  //     setBankName("");
  //     setAccountType("");

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
     <Box sx={{paddingTop:"10px"}}>
            <form onSubmit={onSubmit}>
             
              <label>Paytm Account Holder Name</label>
              <TextField
                size="small"
                fullWidth
                value={name}
                onChange={nameHandler}
                type="text"
                id="outlined-basic"
                placeholder="Name"
                variant="outlined"
              />
              <label>Phone Number</label>
              <TextField
                size="small"
                fullWidth
                onChange={phoneHandler}
                type="number"
                value={phone}
                id="outlined-basic"
                placeholder="Phone Number"
                variant="outlined"
              />
              <Box sx={{ padding: "10px 0" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "100%", color: "#fff", fontWeight: "600" }}
                >
                  {" "}
                  Save
                </Button>
              </Box>
              {notValid ? <Alert severity="warning">{notValid}</Alert> : ""}
              {
                serverdata ? <Alert severity="info">{serverdata}</Alert>:""
              }
            </form>
          </Box>
     </div>
     
      <style jxs>{`
     label{
        display: block;
        padding: 9px 2px 5px;
    }
    `}</style>
    </>
  );
};

export default WithdrawOtherBank;
