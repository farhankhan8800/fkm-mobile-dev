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


const apiAuth = process.env.API_AUTH

const ClickHistory = () => {

const [click_History, setClick_History] = useState([])
const [authToken, setAuthToken] = useState()
const [page, setPage] = useState(1)
const [noMoreData,setNoMoreData] = useState(false)
const [click_history_title , setClick_history_title] = useState()

useEffect(()=>{
  setAuthToken(JSON.parse(localStorage.getItem("user")).token)
},[])

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
    // console.log(data.response.click_history)
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

  


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const headeTitle = "Click History | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <Box sx={{ p: 2, m: 2, bgcolor: "#f1f1f1", borderRadius: "5px" }}>
          <Typography component="p" fontSize="13px" color="gray">
           {
            click_history_title ? click_history_title :"Loding..."
           }
          </Typography>
        </Box>
        <Box sx={{ m: 2 }}>
          <TableContainer component={Paper}>
         
            <Table sx={{minWidth:"350px"}}  aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>SN</StyledTableCell>
                  <StyledTableCell>Store</StyledTableCell>
                  <StyledTableCell>Clicks</StyledTableCell>
                  <StyledTableCell>Last Click</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                click_History  &&  click_History.map((item, i) => (
                  <StyledTableRow key={i + 1}>
                    <StyledTableCell>{i + 1}</StyledTableCell>
                    <StyledTableCell>{item.store}</StyledTableCell>
                    <StyledTableCell>{item.num_of_time}</StyledTableCell>
                    <StyledTableCell>{item.last_click}</StyledTableCell>
                  </StyledTableRow>
                ))

                }
             
              </TableBody>
            </Table>
           
            
          </TableContainer>
        </Box>{
          noMoreData ? " No More Data..." : <Box sx={{p:1, display:"flex",justifyContent:"center"}}>
            <Button onClick={moreData} variant="outlined">More Data</Button>
          </Box>
          
        }
      </div>
      <style jxs>{`
      .css-sli737-MuiTableCell-root{
        padding: 12px 6px;
      }
      .css-sli737-MuiTableCell-root.MuiTableCell-body{
        font-size: 13px;
      }
      .css-1f97x3w-MuiTableCell-root{
        padding: 11px 10px;
      }
    `}</style>
   
    </>
  );
};

export default ClickHistory;
