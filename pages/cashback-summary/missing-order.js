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
import {missing_historyAPI} from "service/API"


const apiAuth = process.env.API_AUTH

const ClickHistory = () => {

const [missing_history, setMissing_history] = useState([])
const [authToken, setAuthToken] = useState()
const [page, setPage] = useState(1)
const [noMoreData,setNoMoreData] = useState(false)


useEffect(()=>{
  setAuthToken(JSON.parse(localStorage.getItem("user")).token)
  
},[])

// eslint-disable-next-line react-hooks/exhaustive-deps
const getData = async ()=>{
  try {
    const {data} = await axios.post(missing_historyAPI,{
        apiAuth:apiAuth,
        device_type:"4",
        page:page
    },
    {
      headers:{
        Authorization:authToken
      }
    })
   if((data.response.missing_history).length == 0){
    setNoMoreData(true)
   }else{
    setMissing_history([...missing_history,...data.response.missing_history])
   }
 } catch (error) {
  //  console.log(error)
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
        <Box sx={{ m: 2 }}>
          <TableContainer component={Paper}>
         
            <Table sx={{minWidth:"350px"}}  aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>SN</StyledTableCell>
                  <StyledTableCell>Store</StyledTableCell>
                  <StyledTableCell>Amount</StyledTableCell>
                  <StyledTableCell>Reported Date</StyledTableCell>
                  <StyledTableCell>Order Date</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                missing_history  &&  missing_history.map((item, i) => (
                  <StyledTableRow key={i + 1}>
                    <StyledTableCell>{i + 1}</StyledTableCell>
                    <StyledTableCell>{item.store}</StyledTableCell>
                    <StyledTableCell>{item.amount}</StyledTableCell>
                    <StyledTableCell>{item.reported_date}</StyledTableCell>
                    <StyledTableCell>{item.order_date}</StyledTableCell>
                    <StyledTableCell>{item.status}</StyledTableCell>
                  </StyledTableRow>
                ))

                }
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        
        {
          noMoreData ?  <Box sx={{textAlign:"center"}}>No More Data...</Box> :
          <Box sx={{p:1, display:"flex",justifyContent:"center"}}>
            <Button onClick={moreData} variant="outlined">More Data</Button>
         </Box> 
        }
        {/* {
          noMoreData ? <Box sx={{textAlign:"center"}}>No More Data...</Box>:<>
          {
          missing_history ?  <Box sx={{p:1, display:"flex",justifyContent:"center"}}>
          <Button onClick={moreData} variant="outlined">More Data</Button>
        </Box> :""
        }
          </>
        } */}
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
      .tabsList::-webkit-scrollbar {
        display: none;
    }
    .MuiPaper-root.MuiPaper-elevation::-webkit-scrollbar{
      display: none;
    }
    .MuiTableCell-root{
      min-width:130px;
    }
    `}</style>
   
    </>
  );
};

export default ClickHistory;
