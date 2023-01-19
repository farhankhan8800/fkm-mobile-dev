import React, { useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import {withdrawMoneyAPI} from "service/API"
import { useEffect } from "react";

const apiAuth = process.env.API_AUTH

const WithdrawBank = () => {
  const [amount, setAmount] = useState();
  const [account , setAccount] = useState();
  const [authToken, setAuthToken] = useState()
  const [serverdata, setServerdata] = useState()
  const [notValid, setNotValid] = useState(null);


  useEffect(()=>{
    setAuthToken(JSON.parse(localStorage.getItem("user")).token)
  },[])


  const onSubmit = async (e) => {
    e.preventDefault();
   if(account){
    if (amount) {
        if(account == "00"){
           setNotValid("Select Valid Withdrawal Account");
        }else{
        //    console.log("valid")
        //    console.log(`account =  ${account}, amount = ${amount}`)


            try {
                let{data} = await axios.post(withdrawMoneyAPI,{
                    apiAuth:apiAuth,
                    device_type: "4",
                  },
                  {
                    headers: {
                          Authorization:authToken
                        }
                  })
                 console.log(data)
                //  if(data.status == 1){
                //   setTimeout(function(){
                
                //     setServerdata(data.message)
                //   }, 500);
                    
                //  }else{
                //   setServerdata(data.message)
                //  }
                // console.log(
                //  `${name},${phone},${accountnumber},${ifsc},${bankName}`
                // );
              } catch (error) {
                console.log(error)
              }

        }
       } else {
         setNotValid("Fill Withdrawal Amount");
       }
   }else{
    setNotValid("Select Withdrawal Account");
   }
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
    setNotValid(null);
  };

  const accountHandler =(e)=>{
    setAccount(e.target.value)
    setNotValid(null);
  }
 
  return (
    <>
     <div style={{paddingTop:"20px"}}>
   
    <Typography fontSize={"13px"} fontWeight={600}> Kindly Note, minimum withdrawal Amount is Rs 100</Typography>
     <Box sx={{paddingTop:"10px"}}>
            <form onSubmit={onSubmit}>
            <label>Select Account</label>
              <select  className="select_tag_account"
                onChange={accountHandler}
                value={account}
              >
                <option value="00">Select Account</option>
                <option value="bank">Bank</option>
                <option value="paytm">Paytm</option>
              </select>
              <label>Enter Amount</label>
              <TextField
                size="small"
                fullWidth
                value={amount}
                onChange={amountHandler}
                type="Number"
                id="outlined-basic"
                placeholder="Enter Amount"
                variant="outlined"
              />
            
              <Box sx={{ padding: "10px 0" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "100%", color: "#fff", fontWeight: "600" }}
                >
                  {" "}
                 Withdraw
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
    .select_tag_account{
        width: 100%;
        padding: 8px 2px;
        border: 1px solid gray;
        font-size: 15px;
       }
       .select_tag option{
        padding:5px;
       }
    `}</style>
    </>
  );
};

export default WithdrawBank;


// try {
//     let{data} = await axios.post(add_accountAPI,{
//         apiAuth:apiAuth,
//         device_type: "4",
  
//       },
//       {
//         headers: {
//               Authorization:authToken
//             }
//       })
//      console.log(data)
//      if(data.status == 1){
//       setTimeout(function(){
       
//         setServerdata(data.message)
//       }, 500);
           
//      }else{
//       setServerdata(data.message)
//      }
//     // console.log(
//     //  `${name},${phone},${accountnumber},${ifsc},${bankName}`
//     // );
//   } catch (error) {
//     console.log(error)
//   }
 