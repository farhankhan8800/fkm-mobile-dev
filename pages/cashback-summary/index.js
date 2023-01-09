import Link from "next/link";
import Image from "next/image";
import Header from "../../components/headerComponent/Header";
import HeadTag from "../../components/headTagComponent/HeadTag";
import { Box, Grid, Typography, IconButton, Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import UserSummary from "../../components/clickHistoryComponents/UserSummary";
import { useRouter } from "next/router";

const UserProfile = () => {
  const router = useRouter();
  const headeTitle = "User Name | Freekaamaal";
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
                  &#8377; 5645{" "}
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
                  &#8377; 5645{" "}
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
                  &#8377; 5645{" "}
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
                  &#8377; 5645{" "}
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
                  &#8377; 5645{" "}
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
                  &#8377; 5645{" "}
                </Typography>
                <Typography component="p" textAlign="center" fontSize="10px">
                  Confirmed Cashback{" "}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <UserSummary />
      </div>
    </>
  );
};

export default UserProfile;
