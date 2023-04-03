import React from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {clickHistoryAPI} from "service/API"
import { useUserToken } from "service/customHooks";


const apiAuth = process.env.API_AUTH

const ClickHistory = () => {

const [click_History, setClick_History] = useState([])
const [authToken, setAuthToken] = useState()
const [page, setPage] = useState(1)
const [noMoreData,setNoMoreData] = useState(false)
const [click_history_title , setClick_history_title] = useState()

const token = useUserToken()

useEffect(()=>{
  setAuthToken(token)
},[token])

// eslint-disable-next-line react-hooks/exhaustive-deps
const getData = async ()=>{
  try {
    const {data} = await axios.post(clickHistoryAPI,{
        apiAuth:apiAuth,
        device_type:"4",
        page:page
    },
    {
      headers:{
        Authorization:authToken
      }
    })
  setClick_history_title(data.response.top_desc)
  if((data.response.click_history).length == 0){
    setNoMoreData(true)
  }else{
    setClick_History([...click_History,...data.response.click_history])
  }
 } catch (error) {
   
 }
 } 

 const moreData = ()=>{
  setPage(page + 1)
}


  useEffect(()=>{
    getData()
  },[page,authToken])

  




  const headeTitle = "Click History | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <div style={{ padding:"15px",margin:"15px", background: "#f1f1f1", borderRadius: "5px" }}>
          <p  style={{fontSize:"13px", color:"gray"}}>
           {
            click_history_title ? click_history_title :"Loding..."
           }
          </p>
        </div>
        <div style={{ margin:"15px",overflow: "auto" }}>
        <table id="click_id">
          <thead>
          <tr>
            <th>SN</th>
            <th>Store</th>
            <th>Clicks</th>
            <th>Last&nbsp;Click</th>
          </tr>
          </thead>
          <tbody>
            {
               click_History  &&  click_History.map((item, i) =>{
               return(
                <tr key={i}>
                <td>{i+1}</td>
                <td>{item.store}</td>
                <td>{item.num_of_time}</td>
                <td>{item.last_click}</td>
                </tr>
               )
               })
            }
         
          </tbody>
 
</table>

        </div>{
          noMoreData ? " No More Data..." : <div style={{padding:"10px", display:"flex",justifyContent:"center"}}>
            <button onClick={moreData} className="border_button">More Data</button>
          </div>
          
        }
      </div>
      <style jxs>{`
     #click_id {
      border-collapse: collapse;
      width: 100%;
    }
    
    #click_id td, #click_id th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    
    #click_id tr:nth-child(even){background-color: #f2f2f2;}
    
    #click_id tr:hover {background-color: #ddd;}
    
    #click_id th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: var(--main-color);
      color: white;
    }
    `}</style>
   
    </>
  );
};

export default ClickHistory;
