import React, { useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import {withdrawMoneyAPI} from "service/API"
import { useEffect } from "react";
import { useRouter } from 'next/router'

const apiAuth = process.env.API_AUTH

const WithdrawOtherBank = ({userData}) => {

  const [amount, setAmount] = useState();
  const [account , setAccount] = useState();
  const [authToken, setAuthToken] = useState()
  const [serverdata, setServerdata] = useState()
  const [notValid, setNotValid] = useState(null);
   const [userAccountData, setUserAccountData] = useState()
   const [userPromocodes, setUserPromocodes] = useState()
   const [promocodes,setPromocodes] = useState(null)
   const [promocodesCouponid, setPromocodesCouponid] = useState()
   const [promocodesCode, setPromocodesCode] = useState()

   const router = useRouter()
 
  useEffect(()=>{
    setAuthToken(JSON.parse(localStorage.getItem("user")).token)
    
  },[])

    useEffect(()=>{
        setUserAccountData(userData)
        setUserPromocodes(userData.promocodes)
    },[userData])

  const onSubmit = async (e) => {
    setPromocodesCouponid(promocodes.split(" ")[1])
    setPromocodesCode(promocodes.split(" ")[0])
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
                    couponid:promocodesCode,
                    code:promocodesCouponid,
                    option:"cbrequest"
                  },
                  {
                    headers: {
                          Authorization:authToken
                        }
                  })
                //  console.log(data)
                 if(data.status == 1){
                  setTimeout(()=>{
                    setServerdata(data.msg)
                    setAmount("")
                    setAccount("")
                    sessionStorage.setItem("verifydata",JSON.stringify(data));
                  }, 400);
                  setTimeout(()=>{
                    router.push("/cashback-summary/verify-withdraw-money")
                  }, 600);
                  

                 } else if(data.status == 0){
                  setServerdata(data.msg)
                 }else{
                  setServerdata(data.msg)
                 }
               
              } catch (error) {
                // console.log(error)
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

  const promocodesHandal = (e)=>{
    if(e.target.value == "none"){

    }else{
      setPromocodes(e.target.value);
    }
    
  }

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

               userAccountData ? userAccountData.account.map((item,i)=>
               
                // eslint-disable-next-line react/jsx-key
                <option key={i} value={item.account_ref_id}>{item.name}</option>

               ):"" 
                 
               }
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
          <div>
            {
              userPromocodes ? (<Box sx={{paddingTop:"10px"}}>
                <Typography fontWeight={"600"}>Your save Coupons</Typography>
                <Box>
                    {
                        userPromocodes.map((item ,i)=>{
                            return(
                                // eslint-disable-next-line react/jsx-key
                                <React.Fragment key={i}>
                                <div style={{display:'flex'}} classname="promocodes_class" >
                                <input value={`${item.code} ${item.couponid}`} onChange={promocodesHandal}  style={{curser :"pointer"}} type="radio" name="Promocodes" />
                                <label style={{fontSize:"14px", marginLeft:"10px"}} classname="" htmlFor="Promocodes">{item.usage_text}</label> 
                                </div>
                                </React.Fragment>
                            )
                        }
                        
                        //   <Typography fontSize={"13px"} component="p" key={i+1}>{item.usage_text}</Typography>
                        )
                    }
                    <div style={{display:'flex'}} classname="promocodes_class">
                                <input value="none" checked  style={{curser :"pointer"}} onChange={promocodesHandal} type="radio"  id="defaultChecked" name="Promocodes" />
                                <label style={{fontSize:"14px", marginLeft:"10px"}} classname=""   htmlFor="Promocodes">If you do not have any coupons to use</label> 
                    </div>
                </Box>
              </Box>):""
            }
          </div>
          
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

export default WithdrawOtherBank;


