import React, { useState } from "react";
import { Alert, Box, Button, TextField } from "@mui/material";
import axios from "axios";
import {add_accountAPI} from "service/API"
import { useEffect } from "react";

const apiAuth = process.env.API_AUTH

const Bank = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [accountnumber, setAccountNumber] = useState();
  const [ifsc, setIfsc] = useState();
  const [bankName, setBankName] = useState();
  const [authToken, setAuthToken] = useState()
  const [serverdata, setServerdata] = useState()
 
  const [notValid, setNotValid] = useState(null);


  useEffect(()=>{
    setAuthToken(JSON.parse(localStorage.getItem("user")).token)
  },[])


//   debugger

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name && phone && bankName && ifsc && accountnumber) {
       if (name.length > 2) {
        if (phone.length == 10) {
          if (bankName.length > 4) {
            if (ifsc.length == 11) {
              if (accountnumber.length > 11) {

                try {
                  let{data} = await axios.post(add_accountAPI,{
                      apiAuth:apiAuth,
                      device_type: "4",
                      phone: phone,
                      account_name:name,
                      account_type:"bank",
                      account_no:accountnumber,
                      ifsc_code:ifsc,
                      bank_name: bankName,
                    },
                    {
                      headers: {
                            Authorization:authToken
                          }
                    })
                   console.log(data)
                   if(data.status == 1){
                    setTimeout(function(){
                      setName("");
                      setPhone("");
                      setAccountNumber("");
                      setIfsc("");
                      setBankName("");
                      setServerdata(data.message)
                    }, 500);
                         
                   }else{
                    setServerdata(data.message)
                   }
                  // console.log(
                  //  `${name},${phone},${accountnumber},${ifsc},${bankName}`
                  // );
                } catch (error) {
                  console.log(error)
                }
               
              } else {
                setNotValid("Fill the Valid Account Number");
              }
            } else {
              setNotValid("Fill the Valid IFSC Code");
            }
          } else {
            setNotValid("Fill the Valid Bank Name");
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
  const acountNumberHandler = (e) => {
    setAccountNumber(e.target.value);
    setNotValid(null);
  };
  const ifscHandler = (e) => {
    setIfsc(e.target.value);
    setNotValid(null);
  };
  const bankNameHandler = (e) => {
    setBankName(e.target.value);
    setNotValid(null);
  };
 
  return (
    <>
     <div style={{paddingTop:"20px"}}>
        <hr></hr>
     <Box sx={{paddingTop:"10px"}}>
            <form onSubmit={onSubmit}>
             
              <label>Account Holder Name</label>
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
              <label>Phone</label>
              <TextField
                size="small"
                fullWidth
                onChange={phoneHandler}
                type="number"
                value={phone}
                id="outlined-basic"
                placeholder="Phone"
                variant="outlined"
              />
              <label>Account Number</label>
              <TextField
                size="small"
                fullWidth
                type="text"
                value={accountnumber}
                onChange={acountNumberHandler}
                id="outlined-basic"
                placeholder="Account Number"
                variant="outlined"
              />
              <label>IFSC</label>
              <TextField
                size="small"
                fullWidth
                value={ifsc}
                onChange={ifscHandler}
                type="text"
                id="outlined-basic"
                placeholder="IFSC"
                variant="outlined"
              />
              <label>Bank Name</label>
              <TextField
                size="small"
                fullWidth
                type="text"
                value={bankName}
                onChange={bankNameHandler}
                id="outlined-basic"
                placeholder="Bank Name"
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
    select{
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        font-size: 15px;
        border: 1px solid #c1c1c1;
    }
    `}</style>
    </>
  );
};

export default Bank;
