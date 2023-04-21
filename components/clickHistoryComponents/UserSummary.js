import { IconButton, Typography, Grid, Box } from "@mui/material";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import clickImage from "public/images/icon/click.png"
import referalHistoryImage from "public/images/icon/referal-history.png"
import referEarnImage from "public/images/icon/refer-earn.png"
import cashbackHistoryImage from "public/images/icon/cashback-history.png"
import reportIconImage from "public/images/icon/report-icon.png"
import withdrawalHistoryImage from "public/images/icon/withdrawal-history.png"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import withdrawalMoneyImage from "public/images/icon/withdrawal-money.png"
import refrealMoneyImage from "public/images/icon/refreal-money.png"
import climeFormImage from "public/images/icon/clime-form.png"
import missingCashbackImage from "public/images/icon/missing-cashback.png"
import addAccountImage from "public/images/icon/add-account.png"
import bellImage from "public/images/icon/bell.png"

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
    icon:cashbackHistoryImage,
    link: "/cashback-summary/cashback-history",
  },
  {
    headingTag: "Withdrawal History",
    pTage: "List Of store your visited reacently",
    icon: withdrawalHistoryImage,
    link: "/cashback-summary/withdraw-history",
  },
  {
    headingTag: "Report Missing",
    pTage: "List Of store your visited reacently",
    icon:reportIconImage,
    link: "/cashback-summary/report-missing",
  },
  {
    headingTag: "Refer and earn",
    pTage: "List Of store your visited reacently",
    icon: referEarnImage,
    link: "/cashback-summary/refer-earn",
  },
  {
    headingTag: "Referral History",
    pTage: "List Of store your visited reacently",
    icon:referalHistoryImage,
    link: "/cashback-summary/referral-history",
  },
  {
    headingTag: "Withdraw Money",
    pTage: "List Of store your visited reacently",
    icon: withdrawalMoneyImage,
    link: "/cashback-summary/withdraw-money",
  },
  {
    headingTag: "Referal Money",
    pTage: "List Of store your visited reacently",
    icon: refrealMoneyImage,
    link: "cashback-summary/referal-money",
  },
  {
    headingTag: "Cashback Claim Form",
    pTage: "List Of store your visited reacently",
    icon: climeFormImage,
    link: "/cashback-summary/cashback-claimform",
  },
  {
    headingTag: "Missing Cashback History",
    pTage: "List Of store your visited reacently",
    icon: missingCashbackImage,
    link: "/cashback-summary/missing-order",
  },
  {
    headingTag: "Add Account",
    pTage: "List Of store your visited reacently",
    icon: addAccountImage,
    link: "/cashback-summary/add-account",
  },
  {
    headingTag: "Notification",
    pTage: "List Of store your visited reacently",
    icon: bellImage,
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
