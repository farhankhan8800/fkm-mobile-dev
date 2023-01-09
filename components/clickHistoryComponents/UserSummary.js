import { IconButton, Typography, Grid, Box } from "@mui/material";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clickImage from "public/images/icon/click.png"


import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const userManage = [
  {
    headingTag: "Click History",
    pTage: "List Of store your visited reacently",
    icon: clickImage,
    link: "/cashback-summary/click-history",
  },
  {
    headingTag: "Cashback History",
    pTage: "List Of store your visited reacently",
    icon:"",
    link: "/cashback-summary/cashback-history",
  },
  {
    headingTag: "Withdrawal History",
    pTage: "List Of store your visited reacently",
    icon: '',
    link: "/cashback-summary/withdraw-history",
  },
  {
    headingTag: "Report Missing",
    pTage: "List Of store your visited reacently",
    icon: '',
    link: "/cashback-summary/report-missing",
  },
  {
    headingTag: "Refer and earn",
    pTage: "List Of store your visited reacently",
    icon: "",
    link: "/cashback-summary/refer-earn",
  },
  {
    headingTag: "Referral History",
    pTage: "List Of store your visited reacently",
    icon: "",
    link: "/",
  },
  {
    headingTag: "Withdraw Money",
    pTage: "List Of store your visited reacently",
    icon: "",
    link: "/cashback-summary/withdraw-money",
  },
  {
    headingTag: "Referal Money",
    pTage: "List Of store your visited reacently",
    icon: "",
    link: "cashback-summary/referal-money",
  },
  {
    headingTag: "Cashback Claim Form",
    pTage: "List Of store your visited reacently",
    icon: "",
    link: "/cashback-summary/cashback-calimform",
  },
  {
    headingTag: "Missing CashbackHistory",
    pTage: "List Of store your visited reacently",
    icon: "",
    link: "/cashback-summary/missing-order",
  },
  {
    headingTag: "Add Account",
    pTage: "List Of store your visited reacently",
    icon: "",
    link: "/cashback-summary/add-account",
  },
  {
    headingTag: "Notification",
    pTage: "List Of store your visited reacently",
    icon: "",
    link: "/",
  },
  {
    headingTag: "Missing Cashback History",
    pTage: "List Of store your visited reacently",
    icon: "",
    link: "/",
  },
];

const UserSummary = () => {
  return (
    <>
      <Box>
        {userManage.map((item, i) => (
          <Box
            key={i}
            component="div"
            sx={{ bgcolor: "#fff7f7", m: 1, p: 1, borderRadius: "5px" }}
          >
            <Link href={item.link}>
              <Grid container>
                <Grid item xs={2} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <Image width={25} height={25} alt="icon" sx={{ color: "#000" }} src={item.icon}></Image>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{ color: "#000", fontSize: "14px" }}
                    component="p"
                    fontWeight="600"
                  >
                    {item.headingTag}
                  </Typography>
                  <Typography
                    sx={{ color: "#000", fontSize: "11px" }}
                    component="p"
                  >
                    {item.pTage}
                  </Typography>
                </Grid>
                <Grid item sx={2}>
                  <IconButton sx={{ color: "#bbb7b7" }}>
                    <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                  </IconButton>
                </Grid>
              </Grid>
            </Link>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default UserSummary;
