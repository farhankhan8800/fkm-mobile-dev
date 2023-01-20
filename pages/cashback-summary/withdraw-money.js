import React, { useState } from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { Alert, Box, Typography } from "@mui/material";
import WithdrawBank from "components/withdraw-money/withdrawBank";
import { useEffect } from "react";
import WithdrawOtherBank from "components/withdraw-money/withdrawOtherBank";
import { withdrawPaymentModeAPI } from "service/API";
import axios from "axios";
<<<<<<< HEAD

=======
<<<<<<< HEAD

const apiAuth = process.env.API_AUTH;

const WithdrawMoney = () => {
  const [account, setAccount] = useState();
  const [activeBank, setActiveBank] = useState(false);
  const [activePaytm, setActivePaytm] = useState(false);
  const [authToken, setAuthToken] = useState();
  const [serverdata, setServerdata] = useState();
  const [userData, setuserData] = useState([]);
=======
import { useRouter } from "next/router";
>>>>>>> 6398010a3e8f17300eae2738b630716a78fa1ed8
const apiAuth = process.env.API_AUTH

const WithdrawMoney = () => {
  
  const [account,setAccount] = useState()
   const [activeBank, setActiveBank]= useState(false)
   const [activePaytm, setActivePaytm]= useState(false)
   const [authToken, setAuthToken] = useState()
   const [serverdata, setServerdata] = useState()
   const [userData, setuserData] = useState([])

   useEffect(()=>{
    setAuthToken(JSON.parse(localStorage.getItem("user")).token)

  },[])
 
>>>>>>> e3aa3b7cb0ecf5c91801edd2fee4e9f19a269350

  useEffect(() => {
    setAuthToken(JSON.parse(localStorage.getItem("user")).token);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeAccount = async (account) => {
    try {
      let { data } = await axios.post(
        withdrawPaymentModeAPI,
        {
          apiAuth: apiAuth,
          device_type: "4",
          wallet_type: account,
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      );

<<<<<<< HEAD
      if (data.status == 1) {
         console.log(data)
         setuserData(data)
        if (account == "bank") {
          setActiveBank(true);
          setActivePaytm(false);
        } else if (account == "paytm") {
          setActiveBank(false);
          setActivePaytm(true);
        }
      } else {
        setServerdata(data.message);
      }
    } catch (error) {
      console.log(error);
=======
      
         if(data.status ==1)
         {
          setuserData(data)
          console.log(data)
          console.log("success- data is there-")
         }
         else
         {
          setuserData(data)
          console.log(data)
          console.log("failed- no ndata is there-")
         }
        // if(data.status == 1)
        // {
        //   // setuserData(data)
        //     console.log("data-");
        //     if(account == "bank")
        //     {
        //       setActiveBank(true)
        //       setActivePaytm(false)
        //     }
        //     else if(account == "paytm")
        //     {
        //       setActiveBank(false)
        //       setActivePaytm(true) 
        //     }
        // }
        // else if(data.status == 0)
        // {
        //   console.log("datanahi hai-",data);
        //   setServerdata(data.message)
        // }
          } catch (error) {
            // console.log(error)
          }
  }
  useEffect(()=>{
    setAuthToken(JSON.parse(localStorage.getItem("user")).token)
    

  },[account, changeAccount])

 


  const accountHandler = (e) =>{
    setAccount(e.target.value)
    
    if(account == "bank"){
      changeAccount(account)
    }else if(account == "paytm"){
      changeAccount(account)
    }else{
      setActiveBank(false)
      setActivePaytm(false)
>>>>>>> e3aa3b7cb0ecf5c91801edd2fee4e9f19a269350
    }
  };
  useEffect(() => {
    setAuthToken(JSON.parse(localStorage.getItem("user")).token);
  }, []);

  const accountHandler = (e) => {
    setServerdata("");
    setAccount(e.target.value);
    setActiveBank(false);
    setActivePaytm(false);
  };

  const callAccount = () => {
    setActiveBank(false);
    setActivePaytm(false);
    if(account == "bank") {
      changeAccount(account);
    }else if(account == "paytm") {
      changeAccount(account);
    }

  } 

  const headeTitle = "Add Your bank Account | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <Box
          component="div"
          sx={{ p: 2, m: 2, mt: 0, background: "#f7f7f7", borderRadius: "5px" }}
        >
          <Box sx={{}}>
            <Typography variant="p" fontWeight={400} color="initial">
              Select Your Payment Mode
            </Typography>
          </Box>
          <Box>
            <select
              className="select_tag"
              onChange={accountHandler}
              onClick={callAccount}
              value={account}
            >
              <option value="Option">Select Payment Mode</option>
              <option value="bank">Bank</option>
              <option value="paytm">Paytm</option>
            </select>
          </Box>
          {serverdata ? <Alert severity="info">{serverdata}</Alert> : ""}
          <Box>
            <div>
              {activeBank ? <WithdrawBank userData={userData} /> : ""}
            </div>

            <div>
              {activePaytm ? (
                <WithdrawOtherBank userData={userData} />
              ) : (
                ""
              )}
            </div>
          </Box>
        </Box>
      </div>
      <style jxs>{`
      .select_tag{
        width: 100%;
        margin: 18px 0px;
        cursor: pointer;
        padding: 8px;
        border: none;
        border: 2px solid #383535;
        border-radius: 7px;
        color: #000;
      }
      .select_tag option{
        padding:5px;
      }
    `}</style>
    </>
  );
};

export default WithdrawMoney;
