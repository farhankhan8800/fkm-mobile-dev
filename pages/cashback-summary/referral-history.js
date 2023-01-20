
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { Box, Button, Grid, Typography  } from "@mui/material";
import axios from "axios";
import { useState,useEffect } from "react";
import {referral_summaryAPI} from "service/API"
import React from "react";
import Image from "next/image";
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
import {cashbackHistoryAPI} from "service/API"


const apiAuth = process.env.API_AUTH

const ReferralHistory = () => {
    const [referral, setReferral] = useState()
    const [page, setPage] = useState(1)
    const [authToken, setAuthToken] = useState()
    const [cashback_history_all, setCashback_history_all] = useState([])
    const [cashback_history_pending, setCashback_history_pending] = useState([])
    const [cashback_history_confirmed, setCashback_history_confirmed] = useState([])
    const [cashback_history_declined, setCashback_history_declined] = useState([])
    const [option, setOption] = useState("all")
    const [noMoreData,setNoMoreData] = useState(false)



    useEffect(()=>{
        setAuthToken(JSON.parse(localStorage.getItem("user")).token)
        
      },[])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getData = async ()=>{
        try {
            const {data} = await axios.post(referral_summaryAPI,{
                apiAuth:apiAuth,
                device_type:"4",
                option:"summary",
                page:1
            },{
                headers:{
                    Authorization:authToken
                  }
            })
            // console.log(data.response.summary)
            setReferral(data.response.summary)
        }catch(error) {
            console.log(error)
        }
      
    }

// eslint-disable-next-line react-hooks/exhaustive-deps
const cashback_History = async () =>{
    try {
      const {data} = await axios.post(cashbackHistoryAPI,{
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
  
    
    if(option == " "){
      if((data.response.all).length == 0 ){
        setNoMoreData(true)
      }else{
        setCashback_history_all([...cashback_history_all, ...data.response.all])
      }
      
    }else if(option == "pending"){
       if((data.response.pending).length == 0){
        setNoMoreData(true)
       }else{
        setCashback_history_pending([...cashback_history_pending, ...data.response.pending])
       }
      
    }else if(option == "confirmed"){
      if((data.response.confirmed).length == 0){
        setNoMoreData(true)
      }else{
        setCashback_history_confirmed([...cashback_history_confirmed, ...data.response.confirmed])
      }
     
    }else if(option == "declined"){
      if((data.response.declined).length == 0){
        setNoMoreData(true)
      }else{
        setCashback_history_declined([...cashback_history_declined, ...data.response.declined])
      }
      
    }else{
      if((data.response.all).length == 0 ){
        setNoMoreData(true)
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
    getData()
   

},[page,authToken])

useEffect(()=>{
    cashback_History()
},[page,authToken,option])

const allTab = ()=>{
  setNoMoreData(false)
    setOption("all")
    setPage(1)
    setCashback_history_pending("")
    setCashback_history_confirmed('')
    setCashback_history_declined('')
    }
    const pendingTab =()=>{
      setNoMoreData(false)
    setOption("pending")
    setPage(1)
    setCashback_history_all("")
    setCashback_history_confirmed('')
    setCashback_history_declined('')
    }
    const confirmedTab = ()=>{
      setNoMoreData(false)
     setOption("confirmed")
     setPage(1)
     setCashback_history_all("")
     setCashback_history_pending("")
    setCashback_history_declined('')
    }
    const declinedTab =()=>{
      setNoMoreData(false)
     setOption("declined")
     setPage(1)
     setCashback_history_all("")
     setCashback_history_pending("")
     setCashback_history_confirmed('')
    }
    

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

  const headeTitle = "Referral History | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
      
        <Box
          sx={{ m: 2, bgcolor: "#f9f9f9", borderRadius: "3px" }}
          component="div"
        >
            <Box><Typography variant="h6" fontWeight={600} color="initial">Referral History</Typography></Box>
          <Grid container spacing={1}> {
            referral ? <>
            <Grid item xs={6}>
              <Box
                sx={{ p: 1, bgcolor: "#fff", borderRadius: "5px" }}
                component="div"
              >
                <Typography component="p" textAlign="center" fontWeight="600">
                  &#8377; {referral.confirm_ref_amount}
                </Typography>
                <Typography component="p" textAlign="center" fontSize="10px">
                Confirm Ref Amount
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{ p: 1, bgcolor: "#fff", borderRadius: "5px" }}
                component="div"
              >
                <Typography component="p" textAlign="center" fontWeight="600">
                  &#8377; {referral.pending_ref_amount}
                </Typography>
                <Typography component="p" textAlign="center" fontSize="10px">
                Pending Ref Amount{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{ p: 1, bgcolor: "#fff", borderRadius: "5px" }}
                component="div"
              >
                <Typography component="p" textAlign="center" fontWeight="600">
                  &#8377; {referral.declined_ref_amount}
                </Typography>
                <Typography component="p" textAlign="center" fontSize="10px">
                Declined Ref Amount
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{ p: 1, bgcolor: "#fff", borderRadius: "5px" }}
                component="div"
              >
                <Typography component="p" textAlign="center" fontWeight="600">
                  &#8377; {referral.withdrawal_ref_amount}
                </Typography>
                <Typography component="p" textAlign="center" fontSize="10px">
                Withdrawal Ref Amount
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{ p: 1, bgcolor: "#fff", borderRadius: "5px" }}
                component="div"
              >
                <Typography component="p" textAlign="center" fontWeight="600">
                  &#8377; {referral.withdrawal_request_amount}
                </Typography>
                <Typography component="p" textAlign="center" fontSize="10px">
                Withdrawal Request Amount
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{ p: 1, bgcolor: "#fff", borderRadius: "5px" }}
                component="div"
              >
                <Typography component="p" textAlign="center" fontWeight="600">
                  &#8377; {referral.withdrawal_declined_amount}
                </Typography>
                <Typography component="p" textAlign="center" fontSize="10px">
                Withdrawal Declined Amount
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{ p: 1, bgcolor: "#fff", borderRadius: "5px" }}
                component="div"
              >
                <Typography component="p" textAlign="center" fontWeight="600">
                  &#8377; {referral.available_ref_amount}
                </Typography>
                <Typography component="p" textAlign="center" fontSize="10px">
                Available Ref Amount
                </Typography>
              </Box>
            </Grid>
            </>:"Loding.."
          }
            
          </Grid>
          <Box sx={{ pt: 2 }}>
          <Typography variant="h6" fontWeight={600} color="initial">Cashback History</Typography>
          </Box>
          <Box sx={{ pt: 1 }}>
          <Box sx={{ width: "100%" }}>
            <TabsUnstyled defaultValue={0}>
              <TabsList className="tabsList">
                <Tab onClick={allTab}>All</Tab>
                <Tab onClick={pendingTab}>Pending</Tab>
                <Tab onClick={confirmedTab}>Confirmed</Tab>
                <Tab onClick={declinedTab}>Declined</Tab>
              </TabsList>
              <TabPanel value={0}>
                <TableContainer component={Paper}>
                {
                    cashback_history_all.length > 0 ? 
                      <Table sx={{ minWidth: 300 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>SN</StyledTableCell>
                          <StyledTableCell>Store</StyledTableCell>
                          <StyledTableCell>Amount</StyledTableCell>
                          <StyledTableCell>Order Id</StyledTableCell>
                          <StyledTableCell>Transaction Data</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        { cashback_history_all && cashback_history_all.map((item, i) => (
                          <StyledTableRow key={i + 1}>
                            <StyledTableCell>{i + 1}</StyledTableCell>
                            <StyledTableCell>{item.store_name}</StyledTableCell>
                            <StyledTableCell> &#8377; {item.amount} </StyledTableCell>
                            <StyledTableCell>{item.orderid}</StyledTableCell>
                            <StyledTableCell>{item.transaction_date}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                    :<Typography textAlign={"center"} fontSize={18}>No Data Available</Typography> 
                  }
                </TableContainer>
                <div>
                  {
                  noMoreData ? "No More Data..." : 
                    <Box sx={{p:1, display:"flex",justifyContent:"center"}}>
                        <Button onClick={moreData} variant="outlined">More Data</Button>
                    </Box> 
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
                          <StyledTableCell>Store</StyledTableCell>
                          <StyledTableCell>Amount</StyledTableCell>
                          <StyledTableCell>Order Id</StyledTableCell>
                          <StyledTableCell>Transaction Data</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        { cashback_history_pending && cashback_history_pending.map((item, i) => (
                          <StyledTableRow key={i + 1}>
                            <StyledTableCell>{i + 1}</StyledTableCell>
                            <StyledTableCell>{item.store_name}</StyledTableCell>
                            <StyledTableCell> &#8377; {item.amount} </StyledTableCell>
                            <StyledTableCell>{item.orderid}</StyledTableCell>
                            <StyledTableCell>{item.transaction_date}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                    :<Typography textAlign={"center"} fontSize={18}>No Data Available</Typography> 
                  }
                 
                </TableContainer>
                <div>
                  {
                  noMoreData ? "No More Data..." : 
                    <Box sx={{p:1, display:"flex",justifyContent:"center"}}>
                        <Button onClick={moreData} variant="outlined">More Data</Button>
                    </Box> 
                  }
                  </div>
              </TabPanel>


              <TabPanel value={2}>
                <TableContainer component={Paper}>
                  {
                    cashback_history_confirmed.length > 0 ? 
                      <Table sx={{ minWidth: 300 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>SN</StyledTableCell>
                          <StyledTableCell>Store</StyledTableCell>
                          <StyledTableCell>Amount</StyledTableCell>
                          <StyledTableCell>Order Id</StyledTableCell>
                          <StyledTableCell>Transaction Data</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        { cashback_history_confirmed && cashback_history_confirmed.map((item, i) => (
                          <StyledTableRow key={i + 1}>
                            <StyledTableCell>{i + 1}</StyledTableCell>
                            <StyledTableCell>{item.store_name}</StyledTableCell>
                            <StyledTableCell> &#8377; {item.amount} </StyledTableCell>
                            <StyledTableCell>{item.orderid}</StyledTableCell>
                            <StyledTableCell>{item.transaction_date}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                    :<Typography textAlign={"center"} fontSize={18}>No Data Available</Typography> 
                  }
                 
                </TableContainer>
                <div>
                  {
                  noMoreData ? "No More Data..." : 
                    <Box sx={{p:1, display:"flex",justifyContent:"center"}}>
                        <Button onClick={moreData} variant="outlined">More Data</Button>
                    </Box> 
                  }
                  </div>
              </TabPanel>
              <TabPanel value={3}>
                <TableContainer component={Paper}>
                  {
                    cashback_history_declined.length > 0 ? 
                      <Table sx={{ minWidth: 300 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>SN</StyledTableCell>
                          <StyledTableCell>Store</StyledTableCell>
                          <StyledTableCell>Amount</StyledTableCell>
                          <StyledTableCell>Order Id</StyledTableCell>
                          <StyledTableCell>Transaction Data</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        { cashback_history_declined && cashback_history_declined.map((item, i) => (
                          <StyledTableRow key={i + 1}>
                            <StyledTableCell>{i + 1}</StyledTableCell>
                            <StyledTableCell>{item.store_name}</StyledTableCell>
                            <StyledTableCell> &#8377; {item.amount} </StyledTableCell>
                            <StyledTableCell>{item.orderid}</StyledTableCell>
                            <StyledTableCell>{item.transaction_date}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                    :<Typography textAlign={"center"} fontSize={18}>No Data Available</Typography> 
                  }
                 
                </TableContainer>
                <div>
                  {
                  noMoreData ? "No More Data..." : 
                    <Box sx={{p:1, display:"flex",justifyContent:"center"}}>
                        <Button onClick={moreData} variant="outlined">More Data</Button>
                    </Box> 
                  }
                  </div>
              </TabPanel>
            </TabsUnstyled>
          </Box>
        </Box>
        </Box>
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
      </div>
    </>
  );
};

export default ReferralHistory;

