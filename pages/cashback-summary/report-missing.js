import React from "react";
import { Box, Typography } from "@mui/material";

import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
const ReportMissing = () => {
  const headeTitle = "Report Missing | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header></Header>
      <div style={{ paddingTop: "56px" }}>
        <Box sx={{ p: 2, m: 2, bgcolor: "#f1f1f1", borderRadius: "5px" }}>
          <Typography component="p" fontSize="13px" fontWeight="600">
            sorry There{" "}
          </Typography>
          <Typography component="p" fontSize="13px" color="gray">
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop p
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default ReportMissing;
