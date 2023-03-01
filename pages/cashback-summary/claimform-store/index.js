// login page --------------------

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  Box,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import Header from "components/headerComponent/Header";
import HeadTag from "components/headTagComponent/HeadTag";


const apiAuth = process.env.API_AUTH

const ClaimformStore = () => {
  const [inputForm, setInputForm] = useState() 
  const [store_id, setStore_id] = useState() 
  const [data, setData] = useState({})

  useEffect(()=>{
   let InputData =  sessionStorage.getItem("claimStoreForm");
    setInputForm(JSON.parse(InputData).response);
    setStore_id(sessionStorage.getItem("store_id"));
  },[])

  const submitForm = (e)=>{
    e.preventDefault()
    console.log(data);
    console.log(e);
  } 
  
  const updateData = e => {
   
    setData({
        ...data,
       [e.target.name]: e.target.value
    })
}
  // console.log(inputForm)
   
  const headeTitle = " Claime store Form | Freekaamaal"; 
 
  return (
    <>
      <HeadTag headeTitle={headeTitle} />
      <Header />
      <div style={{ paddingTop: "56px" }}>
        <Box component="div" style={{ width: "100%", padding: " 5px 20px", paddingTop:"20px" }}>
          <Typography variant="h5" component="h5">
            <strong style={{ fontWeight: "800" }}>Claim Form</strong>
          </Typography>
          <form  onSubmit={submitForm}>
            <div>
            {
               inputForm ? inputForm.claimform.map((item, i)=>{
                if(item.type == "file"){
                  return(
                    <React.Fragment key={i+1}>
                      {
                        item.is_mandatory == 1 ? <label htmlFor={item.id}>{item.title} <span>*</span></label> : <label htmlFor={item.id}>{item.title}</label>
                      }
                      <TextField
                        sx={{ width: "100%", marginTop: "5px" }}
                        size="small"
                        multiple accept="image/*"
                        name={item.field_name}
                        id={item.id}
                        onChange={updateData}
                        type={item.type}
                        variant="outlined"
                      ></TextField>
                    </React.Fragment>
                     )
                } else if(item.type == "date"){
                  return(
                    <React.Fragment key={i+1}>
                      {
                        item.is_mandatory == 1 ? <label htmlFor={item.id}>{item.title} <span>*</span></label> : <label htmlFor={item.id}>{item.title}</label>
                      }
                      <TextField
                        sx={{ width: "100%", marginTop: "5px" }}
                        size="small"
                        name={item.field_name}
                        id={item.id}
                        onChange={updateData}
                        type={item.type}
                        variant="outlined"
                      ></TextField>
                    </React.Fragment>
                     )
                }else {
                 return(
                  <React.Fragment key={i+1}>
                      {
                        item.is_mandatory == 1 ? <label htmlFor={item.id}>{item.title} <span>*</span></label> : <label htmlFor={item.id}>{item.title}</label>
                      }
                    <TextField
                      sx={{ width: "100%", marginTop: "5px" }}
                      size="small"
                      id={item.id}
                      onChange={updateData}
                      name={item.field_name}
                      type={item.type} 
                      placeholder={item.placeholder}
                      variant="outlined"
                    ></TextField>
                  </React.Fragment>
                 )
                }
               }): "Loding ..."
            }
            </div>
            <div>
              {
                inputForm ? <select name="userClicks" >
                  <option value="nodata" >Select Date</option>
                  {
                    inputForm.userclicks.map((item, i)=>{
                      return( <option key={i} value={item.clickid}> {item.created_time}</option>)
                    })
                  }
                  </select> :"Loding ..."
              }
            </div>
            {/* console.log(inputForm.userclicks) */}

            <Button
              variant="contained"
              sx={{
                width: "100%",
                color: "#fff",
                fontWeight: "bold",
                margin: "10px 0",
                fontSize: "17px",
                letterSpacing: "1px",
              }}
              type="Submit"
            >
              Submit
            </Button>
           
          </form>
         
        </Box>
      </div>
      <style jsx>{`
          select {
                width: 100%;
                padding: 9px;
                margin: 10px 0;
                font-size: 16px;
                border: 1px solid gray;
                border-radius: 5px;
          }
          label{
            font-size: 16px;
            margin-top: 11px;
            color: gray;
            display: inline-block;
          }
          label span{
            color:#f27935;
          }
      `}</style>
    </>
  );
};

export default ClaimformStore;
