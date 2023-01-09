import { Box, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from 'next/router'

const CashBackClaimCard = (props) => {
  const router = useRouter()
  return (
    <>
    <Link href="">
      <Box
        component="div"
        sx={{
          color:"#000",
          margin: "20px 7px",
          padding: "10px 15px",
          borderRadius: "10px",
          bgcolor: "#dddddd",
        }}
      >
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item md={8}>
            <Box component="div">
              <Typography variant="h6" component="h6">
                Cashback claim form
              </Typography>
              <Typography variant="p" component="p">
                fill up this form within 24 hrs
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box component="div">
              <Button
                onClick={()=>router.push("")}
                variant="contained"
                sx={{ color: "#fff", bgcolor: "gray" }}
              >
                submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      </Link>
    </>
  );
};

export default CashBackClaimCard;
