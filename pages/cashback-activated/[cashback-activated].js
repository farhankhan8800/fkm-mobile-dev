import { Box, Typography, Button, Grid } from "@mui/material";

import Link from "next/link";

import FmdGoodIcon from "@mui/icons-material/FmdGood";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";


const cardCupon = {
  position: "absolute",
  top: "-25px",
  padding: "10px",
  background: " #fff",
  border: "2px solid #f58484",
  width: "210px",
  left: "50%",
  transform: "translate(-50%,0%)",
  borderRadius: "7px",
};

const CashbackActivated = () => {
  const headeTitle = "Activate Cashback | Freekaamaal";
  return (
    <>
      <HeadTag headeTitle={headeTitle}></HeadTag>
      <Header />
      {/* <div style={{ paddingTop: "56px" }}>
        <Box component="div" sx={{ p: 4, paddingTop: "69px" }}>
          <Box
            component="div"
            sx={{
              padding: "50px 15px 20px",
              position: "relative",
              textAlign: "center",
              border: "2px solid #e7dede",
              borderRadius: "10px",
            }}
          >
            <Box
              component="div"
              style={cardCupon}
              sx={{ position: "absolute" }}
            >
              <Typography component="p" sx={{ color: "#f58484" }}>
                {" "}
                Cashback Activated
              </Typography>
            </Box>
            <Box>
              <Typography
                component="p"
                sx={{ fontWeight: "600", fontSize: "12px" }}
              >
                Shop at xyxx crew & &#8377;450.00 Cashback <br />{" "}
                Freekaamaal.com
              </Typography>
            </Box>
            <Box component="div" sx={{ paddingTop: "10px" }}>
              <Grid container flex={1} spacing="5px">
                <Grid xs={4} item>
                  <Box
                    sx={{
                      p: 2,
                      border: "1px solid gray",
                      borderRadius: "5px",
                      color: "#db7272",
                    }}
                  >
                    <FmdGoodIcon fontSize="large" />
                    <Typography
                      component="p"
                      sx={{ fontSize: "10px", paddingTop: "10px" }}
                    >
                      Cashback Track in
                    </Typography>
                  </Box>
                  <Typography
                    component="p"
                    sx={{ fontSize: "10px", paddingTop: "10px" }}
                  >
                    2-3 Business Days
                  </Typography>
                </Grid>
                <Grid xs={4} item>
                  <Box
                    sx={{
                      p: 2,
                      border: "1px solid gray",
                      borderRadius: "5px",
                      color: "#db7272",
                    }}
                  >
                    <DescriptionIcon fontSize="large" />
                    <Typography
                      component="p"
                      sx={{ fontSize: "10px", paddingTop: "10px" }}
                    >
                      Cashback Confirmation
                    </Typography>
                  </Box>
                  <Typography
                    component="p"
                    sx={{ fontSize: "10px", paddingTop: "10px" }}
                  >
                    40-50 Days
                  </Typography>
                </Grid>
                <Grid xs={4} item>
                  <Box
                    sx={{
                      p: 2,
                      border: "1px solid gray",
                      borderRadius: "5px",
                      color: "#db7272",
                    }}
                  >
                    <SearchIcon fontSize="large" />
                    <Typography
                      component="p"
                      sx={{ fontSize: "10px", paddingTop: "10px" }}
                    >
                      Misssing Ticket
                    </Typography>
                  </Box>
                  <Typography
                    component="p"
                    sx={{ fontSize: "10px", paddingTop: "10px" }}
                  >
                    Accepted
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box
          component="div"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography component="p">
            We are Now redirecting to our partner site{" "}
          </Typography>
          <Button sx={{ marginTop: "15px" }} variant="contained">
            <Link href="/" style={{ color: "#fff" }}>
              Click here to redirect menually
            </Link>
          </Button>
        </Box>
      </div> */}
    </>
  );
};

export default CashbackActivated;
