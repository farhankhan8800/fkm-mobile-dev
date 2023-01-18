import React, { useState } from "react";
import { Alert, Box, Button, TextField } from "@mui/material";
import axios from "axios";
import {add_accountAPI} from "service/API"
import { useEffect } from "react";

const OtherBank = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [notValid, setNotValid] = useState(null);
 

  useEffect(()=>{
    // setUser(json.parse(localStorage.getItem("user").token));
  },[])


  const apiAuth = process.env.API_AUTH

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name && phone) {
      if (name.length > 2) {
        if (phone.length == 10) {
                try {
                  let{data}= axios.post(add_accountAPI,{
                    method: 'POST',
                    body: JSON.stringify({
                      apiAuth:apiAuth,
                      device_type: "4",
                      phone: phone,
                      account_name:name,
                    }),
                    mode: 'cors', 
                    Headers: {
                      'Content-Type': 'application/json', 
                    }
                  })
                } catch (error) {
                  
                }
                 console.log(
                   `${name},${phone},${accountnumber},${ifsc},${bankName},${accountType}`
                 );
             
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

export default OtherBank;
