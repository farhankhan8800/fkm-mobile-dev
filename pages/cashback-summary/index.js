import Link from "next/link";
import Image from "next/image";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { Box, Grid, Typography, IconButton, Avatar, TextField, Button, Alert } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import UserSummary from "../../components/clickHistoryComponents/UserSummary";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import {promoCodeAPI} from "service/API"

const apiAuth = process.env.API_AUTH;


const UserProfile = () => {
  const [user_summary, setUser_summary] = useState();
  const [getCode, setGetCode]= useState()
  const [code_error,set_code_error] = useState()
  const [authToken, setAuthToken] = useState();
  const [serverError, setServerError] = useState();
  const [alert_message, set_Alert_message] = useState();
  const router = useRouter();
  const headeTitle = "User Name | Freekaamaal";

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    setUser_summary(JSON.parse(localStorage.getItem("usersummary")));
  }, []);

  useEffect(() => {
    setAuthToken(JSON.parse(localStorage.getItem("user")).token);
  }, []);

  const redeemCode = async (e)=>{
    e.preventDefault()
    set_code_error("")
    setServerError("")
    set_Alert_message("")
    if(getCode){
      try {
          let {data} = await axios.post(promoCodeAPI,{
            apiAuth: apiAuth,
            device_type: "4",
            promocode: getCode,
          },{
            headers:{
              Authorization:authToken
            }
          })
          console.log(data)
          if(data.status == 1){
            set_Alert_message(data.message)
          }else{
            setServerError(data.message)
          }
      } catch (error) {
        console.log(error)
      }
      
    }else{
      set_code_error("Enter Any Code Then Press Redeem Button")
    }
    
  }


  // console.log(user_summary)
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <Box sx={{ p: 2 }}>
          <Box
            component="div"
            style={{
              backgroundColor: "#f27935",
              padding: "10px 20px",
              borderRadius: "10px",
            }}
          >
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ color: "#fff" }}
            >
              <Grid item>
                <Avatar
                  alt="Freekaamaal"
                  sx={{ border: "3px solid #fff" }}
                  src="/static/images/avatar/1.jpg"
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ fontWeight: "600" }}
                >
                  {" "}
                  Freekaamaal
                </Typography>
                <Typography variant="p" component="p" fontSize="12px">
                  Check Out Your Cashback Summary{" "}
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  variant="contained"
                  onClick={() => router.push("/user-edit-details")}
                  sx={{ color: "#fff", borderRadius: "30px" }}
                  size="small"
                >
                  <EditIcon fontSize="small"></EditIcon>
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{ p: 2, m: 2, bgcolor: "#f9f9f9", borderRadius: "3px" }}
          component="div"
        >
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Box
                sx={{ p: 1, bgcolor: "#fff", borderRadius: "5px" }}
                component="div"
              >
                <Typography component="p" textAlign="center" fontWeight="600">
                  &#8377; {user_summary ? user_summary.confirm_amount : ""}
                </Typography>
                <Typography component="p" textAlign="center" fontSize="10px">
                  Confirmed Cashback{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{ p: 1, bgcolor: "#fff", borderRadius: "5px" }}
                component="div"
              >
                <Typography component="p" textAlign="center" fontWeight="600">
                  &#8377; {user_summary ? user_summary.available_amount : ""}
                </Typography>
                <Typography component="p" textAlign="center" fontSize="10px">
                  Available Amount{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{ p: 1, bgcolor: "#fff", borderRadius: "5px" }}
                component="div"
              >
                <Typography component="p" textAlign="center" fontWeight="600">
                  &#8377; {user_summary ? user_summary.pending_amount : ""}
                </Typography>
                <Typography component="p" textAlign="center" fontSize="10px">
                  Pending Amount
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{ p: 1, bgcolor: "#fff", borderRadius: "5px" }}
                component="div"
              >
                <Typography component="p" textAlign="center" fontWeight="600">
                  &#8377;{" "}
                  {user_summary ? user_summary.withdraw_pending_amount : ""}
                </Typography>
                <Typography component="p" textAlign="center" fontSize="10px">
                  Withdraw Pending Amount
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{ p: 1, bgcolor: "#fff", borderRadius: "5px" }}
                component="div"
              >
                <Typography component="p" textAlign="center" fontWeight="600">
                  &#8377; {user_summary ? user_summary.withdrawal_amount : ""}
                </Typography>
                <Typography component="p" textAlign="center" fontSize="10px">
                  Withdrawal Amount{" "}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          {/* PromoCode  */}

          <Box component="div" sx={{padding:" 20px 10px" , border:"1px solid #faecec",borderRadius:"5px",marginTop:"20px",background:"#fff"}}>

         <Typography fontWeight={600}>Get A Promo Code</Typography>
         <div style={{paddingTop:"10px", position:"relative"}}>
          <form onSubmit={redeemCode}>
          <TextField value={getCode} onChange={(e)=>{setGetCode(e.target.value)}} placeholder="Your Promo Code" size="small" sx={{width:"100%"}} id="standard-basic"  variant="standard" />
          <div>
            {
              code_error ?  <Alert sx={{marginTop:"10px"}} severity="error">{code_error}</Alert> :""
            }
            {
              serverError ? <Alert sx={{marginTop:"10px"}} severity="error">{serverError}</Alert> :""
            }
            {
               alert_message ? <Alert sx={{marginTop:"10px"}} severity="success">{alert_message}</Alert> :""
            }
           
          </div>
            <Button type="submit" size="small" sx={{position:"absolute",top:"-3px",right:"7px"}} variant="outlined">Redeem</Button>
          </form>
         
         </div>
        
          </Box>
        </Box>
        <UserSummary />
      </div>
    </>
  );
};

export default UserProfile;
