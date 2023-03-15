import React, { useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import cashbackImage from "../public/images/money.png";
import Image from "next/image";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const spanImage = {
  width: "15px",
  float: "right",
  display: "inline-block",
  margin: " 0 5px",
  paddingTop: "2px",
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
    marginBottom: 10,
    borderRadius: 8,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const HowToEarnCashback = (props) => {
  const [expanded, setExpanded] = React.useState("panel1");
  const [howtoearncashback, setHowtoearncashback] = useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    setHowtoearncashback(props.howtoearncashback);
  }, [props]);

  return (
    <>
      <Grid container sx={{ padding: "13px 3px 3px" }}>
        <Grid item>
          <Box component="div" sx={{ width: "30px", marginRight: "10px" }}>
            <Image
              src={cashbackImage}
              alt="cash back image"
              height={29}
              width={29}
            />
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h6" component="h6">
            {" "}
            How To Earn <strong>Cashback?</strong>
          </Typography>
        </Grid>
      </Grid>
      <Box component="div" sx={{ padding: "5px 17px" }}>
        <Box
          component="div"
          sx={{
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: " 0px 0px 6px -2px grey",
          }}
        >
          {/* <iframe width="100%" loading="lazy" height="200px" src="https://www.youtube.com/embed/hkStK-PBO_k" title="How to Earn Cashback"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
        </Box>
        <Box
          component="div"
          sx={{
            borderRadius: "10px",
            bgcolor: "#fff5efv  ",
            padding: "20px 17px",
            marginTop: "20px",
          }}
        >
          <div>
            {howtoearncashback &&
              howtoearncashback.map((item, i) => (
                <Accordion
                  key={i + 1}
                  sx={{ borderRadius: "8px" }}
                  expanded={expanded === `panel${i + 1}`}
                  onChange={handleChange(`panel${i + 1}`)}
                >
                  <AccordionSummary
                    aria-controls={`panel${i + 1}d-content`}
                    id={`panel${i + 1}d-header`}
                  >
                    <span style={spanImage}>
                      {" "}
                      <Image
                        width={20}
                        height={20}
                        src={cashbackImage}
                        alt="explane image"
                      ></Image>
                    </span>
                    <Typography fontSize="14px">{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography fontSize="13px">{item.description}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default HowToEarnCashback;
