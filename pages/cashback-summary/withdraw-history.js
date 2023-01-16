import React from "react";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";

import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import axios from "axios";
import {withdrawal_historyAPI} from "service/API"
import { useState } from "react";
import { useEffect } from "react";

const apiAuth = process.env.API_AUTH


const WithdrawHistory = () => {

  const [page, setPage] = useState(1)
  const [authToken, setAuthToken] = useState()
  const [cashback_history_title, setCashback_history_title] = useState()
  const [cashback_history_all, setCashback_history_all] = useState([])
  const [cashback_history_pending, setCashback_history_pending] = useState([])
  const [cashback_history_debit, setCashback_history_debit] = useState([])
  const [cashback_history_decline, setCashback_history_decline] = useState([])
  const [option, setOption] = useState("all")
  const [noMoreData,setNoMoreData] = useState(false)




// eslint-disable-next-line react-hooks/exhaustive-deps
const getData = async () =>{
  try {
    const {data} = await axios.post(withdrawal_historyAPI,{
      apiAuth:apiAuth,
      device_type:"4",
      option:option,
      page:page
    },
    {
      headers:{
        Authorization:authToken
    }
  })

  // console.log(data.response.debit)
  setCashback_history_title(data.response.top_desc)
  if(option == " "){
    if((data.response.all).length == 0 ){
     
    }else{
      setCashback_history_all([...cashback_history_all, ...data.response.all])
    }
    
  }else if(option == "pending"){
     if((data.response.pending).length == 0){
    
     }else{
      setCashback_history_pending([...cashback_history_pending, ...data.response.pending])
     }
    
  }else if(option == "debit"){
    if((data.response.debit).length == 0){
     
    }else{

      setCashback_history_debit([...cashback_history_debit, ...data.response.debit])
    }
   
  }else if(option == "decline"){
    if((data.response.decline).length == 0){
    
    }else{
      setCashback_history_decline([...cashback_history_decline, ...data.response.decline])
    }
  }else{
    if((data.response.all).length == 0 ){
      
    }else{
      setCashback_history_all([...cashback_history_all, ...data.response.all])
    }
   
  }
  } catch (error) {
  }
} 
const moreData = ()=>{
  setPage(page + 1)
}

useEffect(()=>{
  setAuthToken(JSON.parse(localStorage.getItem("user")).token)
  getData()
},[authToken]) 


useEffect(()=>{
  getData()
},[option, page])

const allTab = ()=>{
setOption("all")
setPage(1)
setCashback_history_pending("")
setCashback_history_debit('')
setCashback_history_decline('')
}

const pendingTab =()=>{
setOption("pending")
setPage(1)
setCashback_history_all("")
setCashback_history_debit('')
setCashback_history_decline('')
}

const debitTab = ()=>{
 setOption("debit")
 setPage(1)
 setCashback_history_all("")
 setCashback_history_pending("")
 setCashback_history_decline('')
}

const declineTab =()=>{
 setOption("decline")
 setPage(1)
 setCashback_history_all("")
 setCashback_history_pending("")
 setCashback_history_debit('')
}
console.log(cashback_history_debit)
  
const Tab = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;

    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: transparent;
    min-width: 130px;
    padding: 10px 5px;

    border: none;
    border-radius: 7px;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: #f27935;
    }

    &:focus {
      color: #fff;
    }

    &.${tabUnstyledClasses.selected} {
      background-color: #fff;
      color: #f27935;
    }
  `;

  const TabsList = styled(TabsListUnstyled)(
    ({ theme }) => `
   
    display: flex;
    overflow-x: scroll;
    align-items: center;
    justify-content: space-between;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${theme.palette.mode === "dark" ? "#fff" : "#fff"};
    `
  );

  const TabPanel = styled(TabPanelUnstyled)(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    overflow:auto;
    padding: 20px 12px;
   
    border-radius: 7px;
    `
  );

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

  const headeTitle = "Cashback History | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <Box
          sx={{
            p: 2,
            margin: "10px 10px 0",
            bgcolor: "#f1f1f1",
            borderRadius: "5px",
          }}
        >
          <Typography component="p" fontSize="13px" color="gray">
           {
             setCashback_history_title ? cashback_history_title : "Loding.."
           }
          </Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box sx={{ width: "100%" }}>
            <TabsUnstyled defaultValue={0}>
              <TabsList className="tabsList">
                <Tab onClick={allTab}>All</Tab>
                <Tab onClick={pendingTab}>Pending</Tab>
                <Tab onClick={debitTab}>Debit</Tab>
                <Tab onClick={declineTab}>Declined</Tab>
              </TabsList>
              <TabPanel value={0}>
                <TableContainer component={Paper}>
                {
                    cashback_history_all.length > 0 ? 
                      <Table sx={{ minWidth: 300 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>SN</StyledTableCell>
                          <StyledTableCell>Amount</StyledTableCell>
                          <StyledTableCell>Transaction Data</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        { cashback_history_all && cashback_history_all.map((item, i) => (
                          <StyledTableRow key={i + 1}>
                            <StyledTableCell>{i + 1}</StyledTableCell>
                            <StyledTableCell> &#8377; {item.amount} </StyledTableCell>
                            <StyledTableCell>{item.date}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                    :<Typography textAlign={"center"} fontSize={18}>No Data Available</Typography> 
                  }
                </TableContainer>
                <div>
                  {
              noMoreData ? "No More Data...":<>
              {
              (cashback_history_all) ?  <Box sx={{p:1, display:"flex",justifyContent:"center"}}>
              <Button onClick={moreData} variant="outlined">More Data</Button>
                </Box> :""
                }
                  </>
                }
                  </div>
              </TabPanel>
              <TabPanel value={1}>
                <TableContainer component={Paper}>
                  {
                    cashback_history_pending.length > 0 ? 
                      <Table sx={{ minWidth: 300 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                        <StyledTableCell>SN</StyledTableCell>
                          <StyledTableCell>Bank</StyledTableCell>
                          <StyledTableCell>Amount</StyledTableCell>
                          <StyledTableCell>Transaction Data</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        { cashback_history_pending && cashback_history_pending.map((item, i) => (
                          <StyledTableRow key={i + 1}>
                            <StyledTableCell>{i + 1}</StyledTableCell>
                            <StyledTableCell>{item.type}</StyledTableCell>
                            <StyledTableCell> &#8377; {item.amount} </StyledTableCell>
                            <StyledTableCell>{item.date}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                    :<Typography textAlign={"center"} fontSize={18}>No Data Available</Typography> 
                  }
                 
                </TableContainer>
                <div>
                  {
              noMoreData ? "No More Data...":<>
              {
              cashback_history_pending.length > 0 ?  <Box sx={{p:1, display:"flex",justifyContent:"center"}}>
              <Button onClick={moreData} variant="outlined">More Data</Button>
                </Box> :""
                }
                  </>
                }
                  </div>
              </TabPanel>
              <TabPanel value={2}>
                <TableContainer component={Paper}>
                  {
                    cashback_history_debit.length > 0 ? 
                      <Table sx={{ minWidth: 300 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                        <StyledTableCell>SN</StyledTableCell>
                          <StyledTableCell>Bank</StyledTableCell>
                          <StyledTableCell>Amount</StyledTableCell>
                          <StyledTableCell>Transaction Data</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        { cashback_history_debit && cashback_history_debit.map((item, i) => (
                          <StyledTableRow key={i + 1}>
                          <StyledTableCell>{i + 1}</StyledTableCell>
                          <StyledTableCell>{item.type}</StyledTableCell>
                          <StyledTableCell> &#8377; {item.amount} </StyledTableCell>
                          <StyledTableCell>{item.date}</StyledTableCell>
                        </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                    :<Typography textAlign={"center"} fontSize={18}>No Data Available</Typography> 
                  }
                 
                </TableContainer>
                <div>
                  {
              noMoreData ? "No More Data...":<>
              {
              (cashback_history_debit).length > 0 ?  <Box sx={{p:1, display:"flex",justifyContent:"center"}}>
              <Button onClick={moreData} variant="outlined">More Data</Button>
                </Box> :""
                }
                  </>
                }
                  </div>
              </TabPanel>
              <TabPanel value={3}>
                <TableContainer component={Paper}>
                  {
                    cashback_history_decline.length > 0 ? 
                      <Table sx={{ minWidth: 300 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>SN</StyledTableCell>
                          <StyledTableCell>Bank</StyledTableCell>
                          <StyledTableCell>Amount</StyledTableCell>
                          <StyledTableCell>Reason</StyledTableCell>
                          <StyledTableCell>Transaction Data</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        { cashback_history_decline && cashback_history_decline.map((item, i) => (
                          <StyledTableRow key={i + 1}>
                            <StyledTableCell>{i + 1}</StyledTableCell>
                            <StyledTableCell>{item.type}</StyledTableCell>
                            <StyledTableCell> &#8377; {item.amount} </StyledTableCell>
                            <StyledTableCell sx={{minWidth:"200px"}}>{item.reason}</StyledTableCell>
                            <StyledTableCell>{item.date}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                    :<Typography textAlign={"center"} fontSize={18}>No Data Available</Typography> 
                  }
                 
                </TableContainer>
                <div>
                  {
              noMoreData ? "No More Data...":<>
              {
              cashback_history_decline.length > 0 ?  <Box sx={{p:1, display:"flex",justifyContent:"center"}}>
              <Button onClick={moreData} variant="outlined">More Data</Button>
                </Box> :""
                }
                  </>
                }
                  </div>
              </TabPanel>
            </TabsUnstyled>
          </Box>
        </Box>
      </div>
      <style>
        {`
            .tabsList::-webkit-scrollbar {
              display: none;
          }
        
          .css-sli737-MuiTableCell-root{
            padding: 12px 6px;
          }
          .css-sli737-MuiTableCell-root.MuiTableCell-body{
            font-size: 13px;
          }
          .css-1f97x3w-MuiTableCell-root{
            padding: 11px 10px;
          }
          .MuiPaper-root.MuiPaper-elevation::-webkit-scrollbar{
            display: none;
          }
                    
        `}
      </style>
    </>
  );
};

export default WithdrawHistory;
// WithdrawHistory