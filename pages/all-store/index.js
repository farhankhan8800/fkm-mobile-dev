import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import {allStores} from "../../service/API"
import { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";

const headeTitle = "All Store | Freekaamaal";
const apiAuth = process.env.API_AUTH

const Index = () => {
  const [allStore, setAllStore]= useState()
 

  useEffect(()=>{
    GetData()
  },[])

 
  const GetData = async ()=>{
    try {
          let data = await fetch(allStores,{
            method: 'post',
            body: JSON.stringify({ 
              apiAuth:apiAuth
             }),
            mode: 'cors', 
            Headers: {
               'Content-Type': 'application/json'
               }
            })
            let result = await data.json();
             setAllStore(result.response.allstores)
         

    } catch (error) {
      return error     
    }   
  }

  // console.log(allStore)
 
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <Box component="div" sx={{ p: 2 }}>
          <Grid container spacing={2}>
            {
          allStore && allStore.map((store,i)=>
               
              <Grid item xs={6}  sx={{marginBottom:"20px"}} key={i+1}>
                <Link  href={`store/${store.store_slug}`}  >
                  <Box
                    component="div"
                    sx={{
                      color:"black",
                      position: "relative",
                      border: "2px solid #e9e9e9",
                      borderRadius: "7px",
                      p: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={store.store_image}
                        width={90}
                        height={30}
                        alt="store image"
                      ></Image>
                    </Box>

                    <Typography
                      component="p"
                      fontWeight="bold"
                      paddingTop= "10px"
                      textTransform="capitalize"
                      textAlign="center"
                    >
                      {store.store_name}
                    </Typography>
                    <Box
                      component="div"
                      sx={{
                        position: "absolute",
                        bgcolor: "#f27935",
                        padding: "6px 14px",
                        left: "50%",
                        transform: "translate(-50%,0)",
                        bottom: "-19px",
                        borderRadius: "7px",
                        minWidth: "154px",
                      }}
                    >
                      <Typography fontSize={12} textAlign={"center"} color="#fff">&#8377; {store.cashback_amount}&nbsp;Cashback</Typography>
                    </Box>
                  </Box>
                  </Link>
                </Grid> 
              )
            }
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Index;
