import React from "react";
import { Typography, Box, Button } from "@mui/material";

import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import Image from "next/image";

import FrequentlyQuestion from "../../components/FrequentlyQuestion";

const referEarn = () => {
  const copyLink = () => {
    const copyLinkValue = document.getElementById("couponLink");
    copyLinkValue.select();
    navigator.clipboard.writeText(copyLinkValue.value);
    document.getElementById("copyLinkButton").innerHTML = "copied";
  };
  const copyCode = () => {
    const copyCodeValue = document.getElementById("couponCode");
    copyCodeValue.select();
    navigator.clipboard.writeText(copyCodeValue.value);
    document.getElementById("copyCodeButton").innerHTML = "copied";
  };

  const headeTitle = "Refer and Earn | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <Box component="div" sx={{ p: 2, paddingBottom: "10px" }}>
          <Typography component="h6" fontWeight="600">
            {" "}
            Let&apos;s Grow Together With Our Refer And Earn Program
          </Typography>
          <Box
            component="div"
            sx={{ bgcolor: "#fff0f0", margin: "10px 0", p: 2 }}
          >
            <Box sx={{ position: "relative", marginBottom: "10px" }}>
              <Typography component="p"> Referral Link</Typography>
              <input
                id="couponLink"
                readOnly
                value="freekaamaal.com/576345723DGFG/6456"
              ></input>
              <Button
                onClick={copyLink}
                id="copyLinkButton"
                size="small"
                sx={{
                  position: "absolute",
                  color: "#fff",
                  right: "4px",
                  top: "27px",
                }}
                variant="contained"
              >
                Copy
              </Button>
            </Box>
            <Box sx={{ position: "relative" }}>
              <Typography component="p"> Referral Code</Typography>
              <input id="couponCode" readOnly value="6456"></input>
              <Button
                onClick={copyCode}
                id="copyCodeButton"
                size="small"
                sx={{
                  position: "absolute",
                  color: "#fff",
                  right: "4px",
                  top: "27px",
                }}
                variant="contained"
              >
                Copy
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{ p: 2, paddingTop: "0px", paddingBottom: "10px" }}
        >
          <Typography component="h6" fontWeight="600">
            {" "}
            Easy Process
          </Typography>
          <Box sx={{ padding: "10px 0" }}>
            {/* <Image
              src={}
              width={100}
              style={{ width: "100%", borderRadius: "10px" }}
              alt=""
              height={200}
            ></Image> */}
          </Box>
        </Box>
        <Box component="div" sx={{ p: 2, paddingTop: "0px" }}>
          <FrequentlyQuestion />
        </Box>
      </div>
      <style jsx>{`
        input {
          width: 100%;
          padding: 8px;
          border: 2px solid #e1e1e1;
          border-radius: 5px;
          font-size: 15px;
        }
      `}</style>
    </>
  );
};

export default referEarn;
