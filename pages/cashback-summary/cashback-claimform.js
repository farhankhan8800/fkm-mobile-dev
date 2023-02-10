import React, { useState,useEffect } from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
// import Image from "next/image";
import {claimformStoreAPI} from "service/API"
import {userClaimformAPI} from "service/API"
import { Box, Typography, Button, Alert,  } from "@mui/material";
import axios from "axios";
import { useRouter } from 'next/router'

const apiAuth = process.env.API_AUTH;

const CashbackClaimform = () => {
  const [storeType, setStoreType] = useState();
  const [authToken, setAuthToken] = useState();
  const [store, setStore] = useState()
  const [err, setErr] =useState()

  const router = useRouter()


  useEffect(()=>{
    setAuthToken(JSON.parse(localStorage.getItem("user")).token);
  },[])

  const getData = async ()=>{
    try {
       let {data}= await axios.post(claimformStoreAPI,{
        apiAuth: apiAuth,
        device_type: "4"
       },
       {
        headers: {
          Authorization: authToken,
        },
      });
      // console.log(data.response)
      setStore(data.response)
      // console.log(data)
    } catch (error) {
      // console.log(error)
    }
  }

  useEffect(()=>{
   getData()
  },[authToken])

  const onSubmit = (e) => {
    e.preventDefault();
    if(storeType){
      if(storeType == "nostore"){
        setErr(`Please Select valid Store Name`)
      }else{
        // console.log(storeType)
        const sendStoreData = async () =>{
          try {
             let {data} = await axios.post(userClaimformAPI,{
              apiAuth: apiAuth,
              device_type: "4",
              store_id:storeType
             },
             {
              headers: {
                Authorization: authToken,
              },
             })
             if(data.status == 1){
              // console.log(data)
              sessionStorage.setItem("store_id",storeType);
              sessionStorage.setItem("claimStoreForm",JSON.stringify(data));
              setTimeout(()=>{
                router.push("claimform-store")
              },500)
             
             }else if(data.status == 0){
              setErr(data.message)
             }
          } catch (error) {
            console.log(error)
          }
        }
        sendStoreData()
      }
    }else{
      setErr(`Select Store Name`)
    }
  };
  
  const storeHandler = (e) => {
    // (e.target.value
    let splitValue = e.target.value
    // console.log(splitValue)
    let myArray =  splitValue.split(" ");
    setStoreType(myArray[0]);
    sessionStorage.setItem("store_name",myArray[1]);
    setErr("")
  };

  const headeTitle = "Cashback CalimForm | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <Box sx={{ m: 2, p: 2, bgcolor: "#f1f1f1", borderRadius: "4px" }}>
          <Box>
            <Typography component="h6" fontWeight="700">
              {" "}
              Cashback CalimForm
            </Typography>
            <Typography component="p" fontSize="13px">
              {" "}
             
            </Typography>
          </Box>
          <Box sx={{paddingTop:"10px"}}>
            
            <form  onSubmit={onSubmit}>
              <select
                onChange={storeHandler}
                value={storeType}
                name="account-type"
                id="account-type"
              >
                <option value="nostore">Store Name</option>
                {
                 store && store.map((item,i)=>{
                    return(
                      <option key={item.id} value={`${item.store_id} ${item.name}`}>{item.name}</option>
                    )
                  }) 
                }
              </select>
              <Box sx={{ padding: "10px 0" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "100%", color: "#fff", fontWeight: "600" }}
                >
                  {" "}
                  Submit
                </Button>
              </Box>
              <Box>
                {
                  err ?<Box sx={{paddingTop:"10px"}}>  <Alert severity="error">{err}</Alert></Box> :""
                }
              </Box>
            </form>
          </Box>
        </Box>
      </div>
      <style jsx>{`
        select {
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

export default CashbackClaimform;
