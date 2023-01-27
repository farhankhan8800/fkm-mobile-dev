import React, { useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import {withdrawMoneyAPI} from "service/API"
import { useEffect } from "react";
import { typography } from "@mui/system";

const apiAuth = process.env.API_AUTH

const WithdrawBank = ({userData}) => {

  const [amount, setAmount] = useState();
  const [account , setAccount] = useState();
  const [authToken, setAuthToken] = useState()
  const [serverdata, setServerdata] = useState()
  const [notValid, setNotValid] = useState(null);
   const [userAccountData, setUserAccountData] = useState()
   

 
  useEffect(()=>{
    setAuthToken(JSON.parse(localStorage.getItem("user")).token)
  },[])

    useEffect(()=>{
        setUserAccountData(userData)
        
    },[userData])

  const onSubmit = async (e) => {
    e.preventDefault();
   if(account){
    if (amount) {
        if(account == "00"){
           setNotValid("Select Valid Withdrawal Account");
        }else{
    
        try {
                let{data} = await axios.post(withdrawMoneyAPI,{
                    apiAuth:apiAuth,
                    device_type: "4",
                    wallet_name:"paytm",
                    account_ref_id:account,
                    amount:amount,
                    option:"cbrequest"


                  },
                  {
                    headers: {
                          Authorization:authToken
                        }
                  })
                 console.log(data)
                 if(data.status == 1){
                   console.log(userAccountData)
                   
                 }
               
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



//   console.log(promocodes)
 
  return (
    <>
     <div style={{paddingTop:"20px"}}>
   {
    userAccountData ?  <Typography fontSize={"13px"} fontWeight={600}> {userAccountData.label_msg}</Typography> :""
   }
   
     <Box sx={{paddingTop:"10px"}}>
            <form onSubmit={onSubmit}>
            <label>Select Account</label>
              <select  className="select_tag_account"
                onChange={accountHandler}
                value={account}
              >
                <option value="00">Select Account</option>
               {

               userAccountData && userAccountData.account.map((item,i)=>
               
                // eslint-disable-next-line react/jsx-key
                <option key={i} value={item.account_ref_id}>{item.name}</option>

               
                 
              )}
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
       .promocodes_class{
         display: flex !important;
         padding-left: 5px;
       }
       .promocodes_class input{
        margin-right: 10px;
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
 